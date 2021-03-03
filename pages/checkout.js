import React, { useState } from 'react';
import { Select } from 'antd';
import customData from '../common/data/data.json';
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import LinkConfig from "../common/link_config"

const { Option } = Select;

function Checkout({global}) {
    const { logo } = global;
    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: {
            name: '',
            value: null,
        },
        district: {
            name: '',
            value: null,
        },
        ward: {
            name: '',
            value: null,
        },
        note: '',
        typeShip: 0,
        products: [],
        code: '',
        transport_fee: 0,
        totalPay: 0
    })
    const [dataDistricts, setDataDistricts] = useState([])
    const [dataWards, setDataWards] = useState([])

    const onChangeCity = (value,data) => {
        setDataForm({
            ...dataForm,
            city: {
                name: data.children,
                value: value,
            },
            district: {
                name: '',
                value: null,
            },
            ward: {
                name: '',
                value: null,
            }
        })
        setDataDistricts(data.data)
    }
    const onChangeDistrict = (value,data) => {
        setDataForm({
            ...dataForm,
            district: {
                name: data.children,
                value: value,
            },
            ward: {
                name: '',
                value: null,
            }
        })
        setDataWards(data.data)
    }
    const onChangeWard = (value,data) => {
        setDataForm({
            ...dataForm,
            ward: {
                name: data.children,
                value: value,
            }
        })
    }

    const onChangeInputForm = (event) => {
        var data = dataForm
        data[event.target.name] = event.target.value
        setDataForm(data)
    }

    return (
        <div className="content" id="checkoutForm">
            <div className="wrap">
                <main className="main">
                <header className="main__header">
                    <div className="logo--left ">
                        <LinkConfig href="/">
                            <a title="Logo">
                                <img src={getStrapiMedia(logo[0])} className="logo__image  logo__image--small" alt="logo do bao ho"  style={{paddingRight: '25px'}}/>
                            </a>
                        </LinkConfig>	
                    </div>
                </header>
                <div className="main__content">
                    <article className="animate-floating-labels row">
                    <div className="col col--two">
                        <section className="section">
                        <div className="section__header">
                            <div className="layout-flex">
                            <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                Thông tin nhận hàng
                            </h2>
                            </div>
                        </div>
                        <div className="section__content">
                            <div className="fieldset">
                            <div className="field">
                                <div className="field__input-wrapper">
                                <label htmlFor="email" className="field__label">
                                    Email
                                </label>
                                <input name="email" id="email" type="email" className="field__input" onChange={onChangeInputForm} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="field__input-wrapper">
                                <label htmlFor="billingName" className="field__label">Họ và tên</label>
                                <input name="name" id="billingName" type="text" className="field__input" onChange={onChangeInputForm}/>
                                </div>
                            </div>
                            <div className="field ">
                                <div className="field__input-wrapper">
                                <label htmlFor="billingPhone" className="field__label">
                                    Số điện thoại (tùy chọn)
                                </label>
                                <input name="phone" id="billingPhone" type="tel" className="field__input" onChange={onChangeInputForm}/>
                                </div>
                            </div>
                            <div className="field ">
                                <div className="field__input-wrapper">
                                <label htmlFor="billingAddress" className="field__label">
                                    Địa chỉ (tùy chọn)
                                </label>
                                <input name="address" id="billingAddress" type="text" className="field__input" onChange={onChangeInputForm} />
                                </div>
                            </div>
                            <div className="field field--show-floating-label ">
                                <div className="field__input-wrapper field__input-wrapper--select2">
                                <label htmlFor="billingProvince" className="field__label">Tỉnh thành</label>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="Chọn tỉnh,thành phố"
                                    optionFilterProp="children"
                                    onChange={onChangeCity}
                                    value={dataForm.city.value}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >   
                                    {
                                        customData.map((value,index) => {
                                            return(
                                                <Option value={value.Id} key={index} data={value.Districts}>{value.Name}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                </div>
                            </div>
                            <div className="field field--show-floating-label ">
                                <div className="field__input-wrapper field__input-wrapper--select2">
                                <label htmlFor="billingDistrict" className="field__label">
                                    Quận huyện (tùy chọn)
                                </label>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="Chọn quận,huyện"
                                    optionFilterProp="children"
                                    onChange={onChangeDistrict}
                                    value={dataForm.district.value}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >   
                                    {
                                        dataDistricts.map((value,index) => {
                                            return(
                                                <Option value={value.Id} key={index} data={value.Wards}>{value.Name}</Option>
                                            )
                                        })
                                    }
                                </Select>
                                </div>
                            </div>
                            <div className="field field--show-floating-label ">
                                <div className="field__input-wrapper field__input-wrapper--select2">
                                <label htmlFor="billingWard" className="field__label">
                                    Phường xã (tùy chọn)
                                </label>
                                <Select
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="Chọn phường,xã"
                                    optionFilterProp="children"
                                    onChange={onChangeWard}
                                    value={dataForm.ward.value}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >   
                                    {
                                        dataWards.map((value,index) => {
                                            return(
                                                <Option value={value.Id} key={index}>{value.Name}</Option>
                                            )
                                        })
                                    }
                                </Select>                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                        <div className="fieldset">
                        <h3 className="visually-hidden">Ghi chú</h3>
                        <div className="field ">
                            <div className="field__input-wrapper">
                            <label htmlFor="note" className="field__label">
                                Ghi chú (tùy chọn)
                            </label>
                            <textarea name="note" id="note" type="text" className="field__input" onChange={onChangeInputForm}/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col col--two">
                        <section className="section">
                            <div className="section__header">
                                <div className="layout-flex">
                                <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                    Vận chuyển
                                </h2>
                                </div>
                            </div>
                            <label className="field__label label_transport">
                                Phương thức vận chuyển
                            </label>
                            <div className="section__content" id="shippingMethodList">
                                
                                <div className="alert alert--info ship">
                                Giao hàng tận nơi, miễn phí vận chuyển
                                </div>
                            </div>
                        </section>
                        <section className="section section_pay">
                            <label className="field__label label_pay">
                                Phương thức thanh toán
                            </label>
                            <div className="section__content">
                                <div className="content-box">
                                <div className="content-box__row">
                                    <div className="radio-wrapper">
                                    <div className="radio__input">
                                        <input name="paymentMethod" id="paymentMethod-483665" type="radio" className="input-radio" data-bind="paymentMethod" defaultValue={483665} defaultChecked />
                                    </div>
                                    <label htmlFor="paymentMethod-483665" className="radio__label">
                                        <span className="radio__label__primary">Thanh toán khi nhận hàng (COD)</span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    </article>
                    <div className="field__input-btn-wrapper field__input-btn-wrapper--vertical hide-on-desktop">
                    <div className="text-center mb-5 pb-5 mt-5">
                        <button type="button" className="btn btn-primary text-weight-bold">Hoàn tất thanh toán</button>
                    </div>
                    <a href="/cart" className="previous-link">
                        <i className="previous-link__arrow">❮</i>
                        <span className="previous-link__content">Quay về giỏ hàng</span>
                    </a>
                    </div>
                    <div id="common-alert" data-tg-refresh="refreshError">
                    <div className="alert alert--danger hide-on-desktop hide" data-bind-show="!isSubmitingCheckout && isSubmitingCheckoutError" data-bind="submitingCheckoutErrorMessage">Có lỗi xảy ra khi xử lý. Vui lòng thử lại</div>
                    </div>
                </div>
                </main>
                <aside className="sidebar">
                <div className="sidebar__header">
                    <h2 className="sidebar__title">
                    Đơn hàng (2 sản phẩm)
                    </h2>
                </div>
                <div className="sidebar__content">
                    <div id="order-summary" className="order-summary order-summary--is-collapsed">
                    <div id="kt_quick_cart">
                                {/*begin::Content*/}
                                <div className="offcanvas-content">
                                    {/*begin::Wrapper*/}
                                    <div className="offcanvas-wrapper mb-5 scroll-pull scroll ps ps--active-y scroll_cart">
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8">
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                                            <span className="text-muted">Mũ bảo hiểm</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
                                            </div>
                                            </div>
                                            <a href="#" className="symbol symbol-70 flex-shrink-0">
                                            <img src="https://motorstore.vn/wp-content/uploads/2018/03/AGV-K1-BLACK-800x800.jpg" alt="AGV" />
                                            </a>
                                        </div>
                                        {/*end::Item*/}
                                        <div className="separator separator-solid" />
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8">
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                                            <span className="text-muted">Mũ bảo hiểm</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
                                            </div>
                                            </div>
                                            <a href="#" className="symbol symbol-70 flex-shrink-0">
                                            <img src="https://motorstore.vn/wp-content/uploads/2018/03/AGV-K1-BLACK-800x800.jpg" alt="AGV" />
                                            </a>
                                        </div>
                                        {/*end::Item*/}
                                        <div className="separator separator-solid" />
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8">
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                                            <span className="text-muted">Mũ bảo hiểm</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
                                            </div>
                                            </div>
                                            <a href="#" className="symbol symbol-70 flex-shrink-0">
                                            <img src="https://motorstore.vn/wp-content/uploads/2018/03/AGV-K1-BLACK-800x800.jpg" alt="AGV" />
                                            </a>
                                        </div>
                                        {/*end::Item*/}
                                        <div className="separator separator-solid" />
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8">
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                                            <span className="text-muted">Mũ bảo hiểm</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
                                            </div>
                                            </div>
                                            <a href="#" className="symbol symbol-70 flex-shrink-0">
                                            <img src="https://motorstore.vn/wp-content/uploads/2018/03/AGV-K1-BLACK-800x800.jpg" alt="AGV" />
                                            </a>
                                        </div>
                                        {/*end::Item*/}
                                        <div className="separator separator-solid" />
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8">
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                                            <span className="text-muted">Mũ bảo hiểm</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
                                            </div>
                                            </div>
                                            <a href="#" className="symbol symbol-70 flex-shrink-0">
                                            <img src="https://motorstore.vn/wp-content/uploads/2018/03/AGV-K1-BLACK-800x800.jpg" alt="AGV" />
                                            </a>
                                        </div>
                                        {/*end::Item*/}
                                        <div className="separator separator-solid" />
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8">
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                                            <span className="text-muted">Mũ bảo hiểm</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
                                            </div>
                                            </div>
                                            <a href="#" className="symbol symbol-70 flex-shrink-0">
                                            <img src="https://motorstore.vn/wp-content/uploads/2018/03/AGV-K1-BLACK-800x800.jpg" alt="AGV" />
                                            </a>
                                        </div>
                                        {/*end::Item*/}
                                        <div className="separator separator-solid" />
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8">
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                                            <span className="text-muted">Mũ bảo hiểm</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
                                            </div>
                                            </div>
                                            <a href="#" className="symbol symbol-70 flex-shrink-0">
                                            <img src="https://motorstore.vn/wp-content/uploads/2018/03/AGV-K1-BLACK-800x800.jpg" alt="AGV" />
                                            </a>
                                        </div>
                                        {/*end::Item*/}
                                        <div className="separator separator-solid" />
                                        {/*begin::Item*/}
                                        <div className="d-flex align-items-center justify-content-between py-8">
                                            <div className="d-flex flex-column mr-2">
                                            <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">Mũ AGV</a>
                                            <span className="text-muted">Mũ bảo hiểm</span>
                                            <div className="d-flex align-items-center mt-2">
                                                <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">20,000,000đ</span>
                                                <span className="text-muted mr-1">x</span>
                                                <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">1</span>
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
                                    <div className="text-right hide-on-mobile">
                                        <button type="button" className="btn btn-primary text-weight-bold">Hoàn tất thanh toán</button>
                                    </div>
                                    </div>
                                    {/*end::Purchase*/}
                                </div>
                                {/*end::Content*/}
                            </div>
                    </div>
                </div>
                </aside>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const global = await fetchAPI(`/global`);
    return {
        props: { global },
        revalidate: 1,
    };
}

export default Checkout;