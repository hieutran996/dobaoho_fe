import React, { useEffect, useState } from 'react';
import { CloseOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons';
import Link from "next/link";
import ImageLazy from 'next/image'
import { getStrapiMedia } from "../lib/media";
//Recoil
import {
    useRecoilState
  } from 'recoil';
import {OpenCart,AddToCart} from '../recoil/atom';

function Cart() {
    const [statusCart,setStatusCart] = useRecoilState(OpenCart);
    const [listaddToCart, setListAddToCart] = useRecoilState(AddToCart)

    useEffect(() => {
        var currentListCart = localStorage.getItem('listcart')
        if (currentListCart === null) {
            currentListCart = []
        } else {
            currentListCart = JSON.parse(currentListCart)
        }

        currentListCart

        setListAddToCart(currentListCart)
    }, [])

    console.log(listaddToCart)

    return (
        <div>
            <div id="kt_quick_cart" className={`offcanvas offcanvas-right p-10 ${statusCart && 'offcanvas-on'}`}>
                {/*begin::Header*/}
                <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7" kt-hidden-height={46} style={{}}>
                    <h4 className="font-weight-bold m-0">Giỏ hàng</h4>
                    <a className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_cart_close" onClick={() => setStatusCart(!statusCart)}>
                        <CloseOutlined style={{ fontSize: '16px'}} />
                    </a>
                </div>
                {/*end::Header*/}
                {/*begin::Content*/}
                <div className="offcanvas-content">
                    {/*begin::Wrapper*/}
                    <div className="offcanvas-wrapper mb-5 scroll-pull scroll ps ps--active-y scroll_cart" style={{overflow: 'hidden'}}>
                        {
                            listaddToCart.map((value) => {
                                return(
                                    <>
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8" key={value._id}>
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">{value.name}</a>
                                            <span className="text-muted">Giá x Số lượng</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">{new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(value.price)}đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">{value.count}</span>
                                                <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                                                <MinusOutlined />
                                                </a>
                                                <a href="#" className="btn btn-xs btn-light-success btn-icon">
                                                <PlusOutlined />
                                                </a>
                                            </div>
                                            </div>
                                            <Link href={`/detail/${value.slug}`} title={value.name}>
                                                <a className="thumb" title={value.name} id={`parent_cart_${value._id}`}>
                                                    <ImageLazy width={85} height={85} className="lazyload loaded" src={getStrapiMedia(value.image[0])} alt={value.name} />
                                                </a>
                                            </Link>
                                        </div>
                                        {/*end::Item*/}
                                        <div className="separator separator-solid" />
                                        {/*end::Separator*/}
                                    </>
                                )
                            })
                        }
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Purchase*/}
                    <div className="offcanvas-footer">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span className="font-weight-bold text-muted font-size-sm mr-2">Tạm tính</span>
                        <span className="font-weight-bolder text-dark-50 text-right">20,000,000đ</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span className="font-weight-bold text-muted font-size-sm mr-2">Phí vận chuyển</span>
                        <span className="font-weight-bolder text-dark-50 text-right">Miễn Phí</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-7">
                        <span className="font-weight-bold font-size-sm mr-2">Tổng cộng</span>
                        <span className="font-weight-bolder text-primary text-right">20,030,000đ</span>
                    </div>
                    <div className="text-right">
                        
                        <Link href="/checkout" title="Thanh toán"><button type="button" className="btn btn-primary text-weight-bold" onClick={() => setStatusCart(!statusCart)} >Tiến hành thanh toán</button></Link>
                    </div>
                    </div>
                    {/*end::Purchase*/}
                </div>
                {/*end::Content*/}
                </div>
                {statusCart && <div className="offcanvas-overlay"  onClick={() => setStatusCart(!statusCart)}></div>}
        </div>
    );
}

export default Cart;