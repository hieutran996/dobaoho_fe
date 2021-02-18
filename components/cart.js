import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

//Recoil
import {
    useRecoilState
  } from 'recoil';
import {openCart} from '../recoil/atom';

function Cart() {
    const [statusCart,setStatusCart] = useRecoilState(openCart);
    console.log(statusCart)
    return (
        <div>
            <div id="kt_quick_cart" className={`offcanvas offcanvas-right p-10 ${statusCart && 'offcanvas-on'}`}>
                {/*begin::Header*/}
                <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7" kt-hidden-height={46} style={{}}>
                    <h4 className="font-weight-bold m-0">Shopping Cart</h4>
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
                        <a href="#" className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">iBlender</a>
                        <span className="text-muted">The best kitchen gadget in 2020</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 350</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">5</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center justify-content-between py-8">
                        <div className="d-flex flex-column mr-2">
                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                        <span className="text-muted">Perfect animation tool</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center justify-content-between py-8">
                        <div className="d-flex flex-column mr-2">
                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                        <span className="text-muted">Perfect animation tool</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center justify-content-between py-8">
                        <div className="d-flex flex-column mr-2">
                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                        <span className="text-muted">Perfect animation tool</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center justify-content-between py-8">
                        <div className="d-flex flex-column mr-2">
                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                        <span className="text-muted">Perfect animation tool</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center justify-content-between py-8">
                        <div className="d-flex flex-column mr-2">
                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                        <span className="text-muted">Perfect animation tool</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center justify-content-between py-8">
                        <div className="d-flex flex-column mr-2">
                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                        <span className="text-muted">Perfect animation tool</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center justify-content-between py-8">
                        <div className="d-flex flex-column mr-2">
                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                        <span className="text-muted">Perfect animation tool</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    <div className="separator separator-solid" />
                    {/*end::Separator*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center justify-content-between py-8">
                        <div className="d-flex flex-column mr-2">
                        <a href="#" className="font-weight-bold text-dark text-hover-primary">MotionWire</a>
                        <span className="text-muted">Perfect animation tool</span>
                        <div className="d-flex align-items-center mt-2">
                            <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">$ 650</span>
                            <span className="text-muted mr-1">for</span>
                            <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">7</span>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon mr-2">
                            <i className="ki ki-minus icon-xs" />
                            </a>
                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                            <i className="ki ki-plus icon-xs" />
                            </a>
                        </div>
                        </div>
                        <a href="#" className="symbol symbol-70 flex-shrink-0">
                        <img src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/stock-600x400/img-1.jpg" title alt="" />
                        </a>
                    </div>
                    {/*end::Item*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Purchase*/}
                    <div className="offcanvas-footer" kt-hidden-height={112} style={{}}>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span className="font-weight-bold text-muted font-size-sm mr-2">Total</span>
                        <span className="font-weight-bolder text-dark-50 text-right">$1840.00</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-7">
                        <span className="font-weight-bold text-muted font-size-sm mr-2">Sub total</span>
                        <span className="font-weight-bolder text-primary text-right">$5640.00</span>
                    </div>
                    <div className="text-right">
                        <button type="button" className="btn btn-primary text-weight-bold">Place Order</button>
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