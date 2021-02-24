import React, { useState } from 'react';
import Layout from "../components/layout";
import customData from '../common/data/data.json';
import { Select } from 'antd';
import { ConsoleSqlOutlined, PayCircleOutlined } from '@ant-design/icons';

const { Option } = Select;



function Checkout(props) {
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
        <Layout>
            <div className="content">
                <form data-tg-refresh="checkout" id="checkoutForm" method="post">
                <input type="hidden" name="_method" defaultValue="patch" />
                <div className="wrap">
                    <main className="main">
                    <header className="main__header">
                        <div className="logo--left ">
                        </div>
                    </header>
                    <div className="main__content">
                        <article className="animate-floating-labels row">
                        <div className="col col--two">
                            <section className="section">
                            <div className="section__header">
                                <div className="layout-flex">
                                <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                    <i className="fa fa-id-card-o fa-lg section__title--icon hide-on-desktop" />
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
                                    <i className="fa fa-truck fa-lg section__title--icon hide-on-desktop" />
                                    Vận chuyển
                                </h2>
                                </div>
                            </div>
                            <div className="section__content" id="shippingMethodList">
                                <div className="alert alert--loader spinner spinner--active hide" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                                    <use href="#spinner" />
                                </svg>
                                </div>
                                <div className="alert alert-retry alert--danger hide" >
                                <span data-bind="loadingShippingErrorMessage">Không thể load phí vận chuyển. Vui lòng thử lại</span> <i className="fa fa-refresh" />
                                </div>
                                <div className="alert alert--info">
                                Vui lòng nhập thông tin giao hàng
                                </div>
                            </div>
                            </section>
                            <section className="section">
                            <div className="section__header">
                                <div className="layout-flex">
                                <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                    <i className="fa fa-credit-card fa-lg section__title--icon hide-on-desktop" />
                                    Thanh toán
                                </h2>
                                </div>
                            </div>
                            <div className="section__content">
                                <div className="content-box">
                                <div className="content-box__row">
                                    <div className="radio-wrapper">
                                    <div className="radio__input">
                                        <input name="paymentMethod" id="paymentMethod-483665" type="radio" className="input-radio" data-bind="paymentMethod" defaultValue={483665} defaultChecked />
                                    </div>
                                    <label htmlFor="paymentMethod-483665" className="radio__label">
                                        <span className="radio__label__primary">Thanh toán khi giao hàng (COD)</span>
                                    </label>
                                    </div>
                                    <div className="content-box__row__desc" data-bind-show="paymentMethod == 483665">
                                    <p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
                        </div>
                        </article>
                        <div className="field__input-btn-wrapper field__input-btn-wrapper--vertical hide-on-desktop">
                        <button type="submit" className="btn btn-checkout spinner" data-bind-class="{'spinner--active': isSubmitingCheckout}" data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode">
                            <span className="spinner-label">ĐẶT HÀNG</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                            <use href="#spinner" />
                            </svg>
                        </button>
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
                        <div className="order-summary__sections">
                            <div className="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                            <table className="product-table">
                                <caption className="visually-hidden">Chi tiết đơn hàng</caption>
                                <thead className="product-table__header">
                                <tr>
                                    <th>
                                    <span className="visually-hidden">Ảnh sản phẩm</span>
                                    </th>
                                    <th>
                                    <span className="visually-hidden">Mô tả</span>
                                    </th>
                                    <th>
                                    <span className="visually-hidden">Sổ lượng</span>
                                    </th>
                                    <th>
                                    <span className="visually-hidden">Đơn giá</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="product">
                                    <td className="product__image">
                                    <div className="product-thumbnail">
                                        <div className="product-thumbnail__wrapper" data-tg-static>
                                        <img src="//bizweb.dktcdn.net/thumb/thumb/100/408/894/products/20.jpg?v=1604028085530" alt="" className="product-thumbnail__image" />
                                        </div>
                                        <span className="product-thumbnail__quantity">1</span>
                                    </div>
                                    </td>
                                    <th className="product__description">
                                    <span className="product__description__name">
                                        MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *
                                    </span>
                                    </th>
                                    <td className="product__quantity visually-hidden"><em>Số lượng:</em> 1</td>
                                    <td className="product__price">
                                    15.000.000₫
                                    </td>
                                </tr>
                                <tr className="product">
                                    <td className="product__image">
                                    <div className="product-thumbnail">
                                        <div className="product-thumbnail__wrapper" data-tg-static>
                                        <img src="//bizweb.dktcdn.net/thumb/thumb/100/408/894/products/25.jpg?v=1604029328333" alt="" className="product-thumbnail__image" />
                                        </div>
                                        <span className="product-thumbnail__quantity">1</span>
                                    </div>
                                    </td>
                                    <th className="product__description">
                                    <span className="product__description__name">
                                        BÚA KHOAN SỢI THỦY TINH 3 LB.
                                    </span>
                                    </th>
                                    <td className="product__quantity visually-hidden"><em>Số lượng:</em> 1</td>
                                    <td className="product__price">
                                    10.499.000₫
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="order-summary__section order-summary__section--discount-code" data-tg-refresh="refreshDiscount" id="discountCode">
                            <h3 className="visually-hidden">Mã khuyến mại</h3>
                            <div className="edit_checkout animate-floating-labels">
                                <div className="fieldset">
                                <div className="field  ">
                                    <div className="field__input-btn-wrapper">
                                    <div className="field__input-wrapper">
                                        <label htmlFor="reductionCode" className="field__label">Nhập mã giảm giá</label>
                                        <input name="reductionCode" id="reductionCode" type="text" className="field__input" autoComplete="off" data-bind-disabled="isLoadingReductionCode" data-bind-event-keypress="handleReductionCodeKeyPress(event)" data-define="{reductionCode: null}" data-bind="reductionCode" />
                                    </div>
                                    <button className="field__input-btn btn spinner btn--disabled" type="button" data-bind-disabled="isLoadingReductionCode || !reductionCode" data-bind-class="{'spinner--active': isLoadingReductionCode, 'btn--disabled': !reductionCode}" data-bind-event-click="applyReductionCode()" disabled>
                                        <span className="spinner-label">Áp dụng</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                                        <use href="#spinner" />
                                        </svg>
                                    </button>
                                    </div>
                                    <p className="field__message field__message--error field__message--error-always-show hide" data-bind-show="!isLoadingReductionCode && isLoadingReductionCodeError" data-bind="loadingReductionCodeErrorMessage">Có lỗi xảy ra khi áp dụng khuyến mãi. Vui lòng thử lại</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="order-summary__section order-summary__section--total-lines order-summary--collapse-element" data-define="{subTotalPriceText: '25.499.000₫'}" data-tg-refresh="refreshOrderTotalPrice" id="orderSummary">
                            <table className="total-line-table">
                                <caption className="visually-hidden">Tổng giá trị</caption>
                                <thead>
                                <tr>
                                    <td><span className="visually-hidden">Mô tả</span></td>
                                    <td><span className="visually-hidden">Giá tiền</span></td>
                                </tr>
                                </thead>
                                <tbody className="total-line-table__tbody">
                                <tr className="total-line total-line--subtotal">
                                    <th className="total-line__name">
                                    Tạm tính
                                    </th>
                                    <td className="total-line__price">25.499.000₫</td>
                                </tr>
                                <tr className="total-line total-line--shipping-fee">
                                    <th className="total-line__name">
                                    Phí vận chuyển
                                    </th>
                                    <td className="total-line__price" data-bind="getTextShippingPrice()">-</td>
                                </tr>
                                </tbody>
                                <tfoot className="total-line-table__footer">
                                <tr className="total-line payment-due">
                                    <th className="total-line__name">
                                    <span className="payment-due__label-total">
                                        Tổng cộng
                                    </span>
                                    </th>
                                    <td className="total-line__price">
                                    <span className="payment-due__price" data-bind="getTextTotalPrice()">25.499.000₫</span>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                            </div>
                            <div className="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                            <button type="submit" className="btn btn-checkout spinner" data-bind-class="{'spinner--active': isSubmitingCheckout}" data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode">
                                <span className="spinner-label">ĐẶT HÀNG</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                                <use href="#spinner" />
                                </svg>
                            </button>
                            <a href="/cart" className="previous-link">
                                <i className="previous-link__arrow">❮</i>
                                <span className="previous-link__content">Quay về giỏ hàng</span>
                            </a>
                            </div>
                            <div id="common-alert-sidebar" data-tg-refresh="refreshError">
                            <div className="alert alert--danger hide-on-mobile hide" data-bind-show="!isSubmitingCheckout && isSubmitingCheckoutError" data-bind="submitingCheckoutErrorMessage">Có lỗi xảy ra khi xử lý. Vui lòng thử lại</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </aside>
                </div>
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                <symbol id="spinner">
                    <svg viewBox="0 0 30 30">
                    <circle stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeDasharray="85%" cx="50%" cy="50%" r="40%">
                        <animateTransform attributeName="transform" type="rotate" from="0 15 15" to="360 15 15" dur="0.7s" repeatCount="indefinite" />
                    </circle>
                    </svg>
                </symbol>
                </svg>
            </div>
        </Layout>
    );
}

export default Checkout;