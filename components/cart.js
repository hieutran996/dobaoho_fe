import React from 'react';
import { CloseOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons';

//Recoil
import {
    useRecoilState
  } from 'recoil';
import {openCart} from '../recoil/atom';

function Cart() {
    const [statusCart,setStatusCart] = useRecoilState(openCart);
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
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center justify-content-between py-8">
                            <div className="d-flex flex-column mr-2">
                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                            <span className="text-muted">Mũ bảo hiểm</span>
                            <div className="d-flex align-items-center mt-2">
                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                <span className="text-muted mr-1">x</span>
                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
                                <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                                <MinusOutlined />
                                </a>
                                <a href="#" className="btn btn-xs btn-light-success btn-icon">
                                <PlusOutlined />
                                </a>
                            </div>
                            </div>
                            <a href="#" className="symbol symbol-70 flex-shrink-0">
                            <img src="https://motorstore.vn/wp-content/uploads/2018/03/AGV-K1-BLACK-800x800.jpg" alt="AGV" />
                            </a>
                        </div>
                        {/*end::Item*/}
                    
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Purchase*/}
                    <div className="offcanvas-footer" kt-hidden-height={112} style={{}}>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span className="font-weight-bold text-muted font-size-sm mr-2">Tạm tính</span>
                        <span className="font-weight-bolder text-dark-50 text-right">20,000,000đ</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span className="font-weight-bold text-muted font-size-sm mr-2">Phí vận chuyển</span>
                        <span className="font-weight-bolder text-dark-50 text-right">30,000đ</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-7">
                        <span className="font-weight-bold font-size-sm mr-2">Tổng cộng</span>
                        <span className="font-weight-bolder text-primary text-right">20,030,000đ</span>
                    </div>
                    <div className="text-right">
                        <button type="button" className="btn btn-primary text-weight-bold">Tiến hành thanh toán</button>
                    </div>
                    </div>
                    {/*end::Purchase*/}
                </div>
                {/*end::Content*/}
                </div>
                {statusCart && <div class="offcanvas-overlay"  onClick={() => setStatusCart(!statusCart)}></div>}
        </div>
    );
}

export default Cart;