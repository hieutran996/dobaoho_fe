//animation
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import LightSpeed from 'react-reveal/LightSpeed'
import Layout from "../components/layout";
import Seo from "../components/seo";
//image
import ImageLazy from 'next/image'
//api
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import Link from "next/link";
import { Carousel } from 'antd';

const Home = ({ homepage }) => {
  console.log(homepage)
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div className="page-body">
        <section className="awe-section-1">	
          <div id="magik-slideshow" className="magik-slideshow slick-initialized slick-slider">
            <Carousel autoplay autoplaySpeed={3000}>
              <div>
                <a href="#" tabIndex={0}>
                  <picture>
                    <source media="(min-width: 992px)" srcSet="images/homepage/agv_helmet.jpeg" />
                    <source media="(min-width: 569px)" srcSet="images/homepage/agv_helmet.jpeg" />
                    <source media="(min-width: 480px)" srcSet="images/homepage/agv_helmet.jpeg" />
                    <img src="images/homepage/agv_helmet.jpeg" alt="Agv" />
                  </picture>
                </a>
              </div>
            </Carousel>
          </div>
        </section>
        <section className="awe-section-2">	
          <section className="section_banner">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 banner-1">
                  <div className="banner">
                    <a href="#" title="Mũ Ego">
                      <img className="img-responsive lazyload loaded" src="images/homepage/ego-e7.jpg"  alt="Mũ Ego" data-was-processed="true" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 banner-2">
                  <div className="banner">
                    <a href="#" title="Mũ LS2">
                      <img className="img-responsive lazyload loaded" src="images/homepage/ls2-carbon.jpg"  alt="Mũ LS2" data-was-processed="true" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 banner-3">
                  <div className="banner">
                    <a href="#" title="Mũ Yohe">
                      <img className="img-responsive lazyload loaded" src="images/homepage/yohe-978-plus.jpg"  alt="Mũ Yohe" data-was-processed="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="awe-section-3">	
          <section className="section_deal_hot_product">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 deal_hot">
                  <h2 className="section_title">
                    <a href="san-pham-khuyen-mai" title="Khuyến mãi">
                      Khuyến mãi
                    </a>
                  </h2>
                  <div className="section_content">
                    <div className="slick_deal_hot slick-initialized slick-slider">
                      <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox"><div className="item slick-slide slick-current slick-active" style={{width: '100%'}} data-slick-index={0} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide10">
                            <div className="col-item">
                              <div className="sale-label sale-top-right"><span>- 
                                  10% 
                                </span></div>
                              <div className="product-thumb">
                                <a href="/may-khoan-pin-18v-dewalt-dcd796m2-1" className="thumb" title="Máy khoan pin 18V Dewalt DCD796M2" tabIndex={0}>
                                  <img className="lazyload loaded" src="images/sp1-7a859f40-6a62-4602-884a-2c273e115b8e.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/sp1-7a859f40-6a62-4602-884a-2c273e115b8e.jpg?v=1603967160000" alt="Máy khoan pin 18V Dewalt DCD796M2" data-was-processed="true" />
                                </a>
                                <div className="actions hidden-xs hidden-sm">
                                  <form action="/cart/add" method="post" className="variants" data-id="product-actions-19564843" encType="multipart/form-data">
                                    <input type="hidden" name="variantId" defaultValue={37690000} tabIndex={0} />
                                    <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng" tabIndex={0}>
                                      Thêm vào giỏ hàng
                                    </button>
                                  </form>       
                                </div>
                              </div>
                              <div className="clockdiv" data-countdown="2021/12/12" style={{display: 'block !important'}}><div className="date-time time-day"><span className="days"><b>325</b><small>Ngày</small></span></div><span className="clocks" /><div className="date-time time-hour"><span className="hours "><b>08</b><small>Giờ</small></span></div><span className="clocks" /><div className="date-time time-min"><span className="minutes "><b>32</b><small>Phút</small></span></div><span className="clocks" /><div className="date-time time-sec"><span className="seconds"><b>06</b><small>Giây</small></span></div></div>
                              <div className="product-info">
                                <div className="product_type" />
                                <h3 className="title"> <a href="/may-khoan-pin-18v-dewalt-dcd796m2-1" title="Máy khoan pin 18V Dewalt DCD796M2" tabIndex={0}>Máy khoan pin 18V Dewalt DCD796M2 </a> </h3>
                                <div className="content">
                                  <div className="item-price">    
                                    <div className="price-box"> 
                                      <span className="special-price"> 
                                        4.900.000₫
                                      </span>
                                      <span className="old-price"> 
                                        5.450.000₫
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="thumbs-list">
                                <div className="thumbs-list-item active">
                                  <img className="lazyload loaded" src="images/sp1-7a859f40-6a62-4602-884a-2c273e115b8e_1.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/sp1-7a859f40-6a62-4602-884a-2c273e115b8e.jpg?v=1603967160000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/sp1-7a859f40-6a62-4602-884a-2c273e115b8e.jpg?v=1603967160000" alt="Máy khoan pin 18V Dewalt DCD796M2" data-was-processed="true" />
                                </div>
                                <div className="thumbs-list-item ">
                                  <img className="lazyload loaded" src="images/sp1-2-d30ac025-471e-4755-ba5a-a14a537fe335.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/sp1-2-d30ac025-471e-4755-ba5a-a14a537fe335.jpg?v=1603967161000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/sp1-2-d30ac025-471e-4755-ba5a-a14a537fe335.jpg?v=1603967161000" alt="Máy khoan pin 18V Dewalt DCD796M2" data-was-processed="true" />
                                </div>
                                <div className="thumbs-list-item ">
                                  <img className="lazyload loaded" src="images/sp1-3-01685be1-3f4d-4d2b-8121-db8928eb1c42.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/sp1-3-01685be1-3f4d-4d2b-8121-db8928eb1c42.jpg?v=1603967161000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/sp1-3-01685be1-3f4d-4d2b-8121-db8928eb1c42.jpg?v=1603967161000" alt="Máy khoan pin 18V Dewalt DCD796M2" data-was-processed="true" />
                                </div>
                                <div className="thumbs-list-item ">
                                  <img className="lazyload loaded" src="images/sp1-4-3c7d7bba-ba8e-4f15-8608-5410c9b30892.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/sp1-4-3c7d7bba-ba8e-4f15-8608-5410c9b30892.jpg?v=1603967162000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/sp1-4-3c7d7bba-ba8e-4f15-8608-5410c9b30892.jpg?v=1603967162000" alt="Máy khoan pin 18V Dewalt DCD796M2" data-was-processed="true" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12 product_nb">
                  <div className="box-title">
                    <h2 className="section_title">
                      <a href="san-pham-noi-bat" title="Bán chạy">
                        Bán chạy
                      </a>
                    </h2>
                    <ul className="link_list hidden-xs">
                      <li><a className="ef" href="/" title="Trang chủ">Trang chủ</a></li>
                      <li><a className="ef" href="/gioi-thieu" title="Giới thiệu">Giới thiệu</a></li>
                      <li><a className="ef" href="/collections/all" title="Sản phẩm">Sản phẩm</a></li>
                      <li><a className="ef" href="/tin-tuc" title="Tin tức">Tin tức</a></li>
                    </ul>
                  </div>
                  <div className="section_content">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bua-khoan-soi-thuy-tinh-3-lb" className="thumb" title="BÚA KHOAN SỢI THỦY TINH 3 LB.">
                              <img className="lazyload loaded" src="images/25_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/25.jpg?v=1604029328000" alt="BÚA KHOAN SỢI THỦY TINH 3 LB." data-was-processed="true" />
                            </a>
                            <div className="actions hidden-xs hidden-sm">
                              <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568520" encType="multipart/form-data">
                                <input type="hidden" name="variantId" defaultValue={37701058} />
                                <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng">
                                  Thêm vào giỏ hàng
                                </button>
                              </form>       
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bua-khoan-soi-thuy-tinh-3-lb" title="BÚA KHOAN SỢI THỦY TINH 3 LB.">BÚA KHOAN SỢI THỦY TINH 3 LB. </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">10.499.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="thumbs-list">
                            <div className="thumbs-list-item active">
                              <img className="lazyload loaded" src="images/25.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/25.jpg?v=1604029328000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/25.jpg?v=1604029328000" alt="BÚA KHOAN SỢI THỦY TINH 3 LB." data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/25-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/25-2.jpg?v=1604029328000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/25-2.jpg?v=1604029328000" alt="BÚA KHOAN SỢI THỦY TINH 3 LB." data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/25-3.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/25-3.jpg?v=1604029331000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/25-3.jpg?v=1604029331000" alt="BÚA KHOAN SỢI THỦY TINH 3 LB." data-was-processed="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bo-thay-lop-co-le-mo-men-lai" className="thumb" title="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI">
                              <img className="lazyload loaded" src="images/24_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/24.jpg?v=1604029308000" alt="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI" data-was-processed="true" />
                            </a>
                            <div className="actions hidden-xs hidden-sm">
                              <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568517" encType="multipart/form-data">
                                <input type="hidden" name="variantId" defaultValue={37701054} />
                                <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng">
                                  Thêm vào giỏ hàng
                                </button>
                              </form>       
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bo-thay-lop-co-le-mo-men-lai" title="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI">BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">11.000.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="thumbs-list">
                            <div className="thumbs-list-item active">
                              <img className="lazyload loaded" src="images/24.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/24.jpg?v=1604029308000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/24.jpg?v=1604029308000" alt="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/24-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/24-2.jpg?v=1604029308000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/24-2.jpg?v=1604029308000" alt="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI" data-was-processed="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/dao-tien-ich-co-the-thu-vao-cao-cap" className="thumb" title="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP">
                              <img className="lazyload loaded" src="images/23_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/23.jpg?v=1604029278000" alt="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP" data-was-processed="true" />
                            </a>
                            <div className="actions hidden-xs hidden-sm">
                              <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568513" encType="multipart/form-data">
                              </form>       
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/dao-tien-ich-co-the-thu-vao-cao-cap" title="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP">DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="thumbs-list">
                            <div className="thumbs-list-item active">
                              <img className="lazyload loaded" src="images/23.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/23.jpg?v=1604029278000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/23.jpg?v=1604029278000" alt="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/23-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/23-2.jpg?v=1604029279000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/23-2.jpg?v=1604029279000" alt="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/23-3.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/23-3.jpg?v=1604029280000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/23-3.jpg?v=1604029280000" alt="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP" data-was-processed="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bo-cuon-phan-6-1" className="thumb" title="BỘ CUỘN PHẤN 6:1">
                              <img className="lazyload loaded" src="images/22_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/22.jpg?v=1604029251000" alt="BỘ CUỘN PHẤN 6:1" data-was-processed="true" />
                            </a>
                            <div className="actions hidden-xs hidden-sm">
                              <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568509" encType="multipart/form-data">
                              </form>       
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bo-cuon-phan-6-1" title="BỘ CUỘN PHẤN 6:1">BỘ CUỘN PHẤN 6:1 </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="thumbs-list">
                            <div className="thumbs-list-item active">
                              <img className="lazyload loaded" src="images/22.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/22.jpg?v=1604029251000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/22.jpg?v=1604029251000" alt="BỘ CUỘN PHẤN 6:1" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/22-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/22-2.jpg?v=1604029252000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/22-2.jpg?v=1604029252000" alt="BỘ CUỘN PHẤN 6:1" data-was-processed="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/sung-bam-ghim-bang-soi-carbon" className="thumb" title="SÚNG BẤM GHIM BẰNG SỢI CARBON">
                              <img className="lazyload loaded" src="images/21_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/21.jpg?v=1604029219000" alt="SÚNG BẤM GHIM BẰNG SỢI CARBON" data-was-processed="true" />
                            </a>
                            <div className="actions hidden-xs hidden-sm">
                              <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568505" encType="multipart/form-data">
                              </form>       
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/sung-bam-ghim-bang-soi-carbon" title="SÚNG BẤM GHIM BẰNG SỢI CARBON">SÚNG BẤM GHIM BẰNG SỢI CARBON </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="thumbs-list">
                            <div className="thumbs-list-item active">
                              <img className="lazyload loaded" src="images/21.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/21.jpg?v=1604029219000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/21.jpg?v=1604029219000" alt="SÚNG BẤM GHIM BẰNG SỢI CARBON" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/21-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/21-2.jpg?v=1604029219000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/21-2.jpg?v=1604029219000" alt="SÚNG BẤM GHIM BẰNG SỢI CARBON" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/21-3.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/21-3.jpg?v=1604029220000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/21-3.jpg?v=1604029220000" alt="SÚNG BẤM GHIM BẰNG SỢI CARBON" data-was-processed="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/may-thoi-khi-co-day-khong-day-20v-max" className="thumb" title="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *">
                              <img className="lazyload loaded" src="images/20.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/20.jpg?v=1604028085000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                            </a>
                            <div className="actions hidden-xs hidden-sm">
                              <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568364" encType="multipart/form-data">
                                <input type="hidden" name="variantId" defaultValue={37700810} />
                                <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng">
                                  Thêm vào giỏ hàng
                                </button>
                              </form>       
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/may-thoi-khi-co-day-khong-day-20v-max" title="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *">MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX * </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">15.000.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="thumbs-list">
                            <div className="thumbs-list-item active">
                              <img className="lazyload loaded" src="images/20_1.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/20.jpg?v=1604028085000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/20.jpg?v=1604028085000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/20-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/20-2.jpg?v=1604028086000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/20-2.jpg?v=1604028086000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/20-3.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/20-3.jpg?v=1604028086000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/20-3.jpg?v=1604028086000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/may-suoi-canh-quat-khong-day-cuong-buc-20v-max-70-000-btu" className="thumb" title="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU">
                              <img className="lazyload loaded" src="images/19_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/19.jpg?v=1604028014000" alt="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU" data-was-processed="true" />
                            </a>
                            <div className="actions hidden-xs hidden-sm">
                              <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568359" encType="multipart/form-data">
                              </form>       
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/may-suoi-canh-quat-khong-day-cuong-buc-20v-max-70-000-btu" title="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU">MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="thumbs-list">
                            <div className="thumbs-list-item active">
                              <img className="lazyload loaded" src="images/19.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/19.jpg?v=1604028014000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/19.jpg?v=1604028014000" alt="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/19-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/19-2.jpg?v=1604028016000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/19-2.jpg?v=1604028016000" alt="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU" data-was-processed="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/flexvolt-20v-60v-max-12-0-ah-pin" className="thumb" title="FLEXVOLT 20V / 60V MAX 12.0 AH PIN">
                              <img className="lazyload loaded" src="images/18_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/18.jpg?v=1604027973000" alt="FLEXVOLT 20V / 60V MAX 12.0 AH PIN" data-was-processed="true" />
                            </a>
                            <div className="actions hidden-xs hidden-sm">
                              <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568356" encType="multipart/form-data">
                              </form>       
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/flexvolt-20v-60v-max-12-0-ah-pin" title="FLEXVOLT 20V / 60V MAX 12.0 AH PIN">FLEXVOLT 20V / 60V MAX 12.0 AH PIN </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="thumbs-list">
                            <div className="thumbs-list-item active">
                              <img className="lazyload loaded" src="images/18.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/18.jpg?v=1604027973000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/18.jpg?v=1604027973000" alt="FLEXVOLT 20V / 60V MAX 12.0 AH PIN" data-was-processed="true" />
                            </div>
                            <div className="thumbs-list-item ">
                              <img className="lazyload loaded" src="images/18-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/18-2.jpg?v=1604027975000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/18-2.jpg?v=1604027975000" alt="FLEXVOLT 20V / 60V MAX 12.0 AH PIN" data-was-processed="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="awe-section-4">	
          <section className="section_category">
            <div className="container">
              <div className="text-center">
                <h2 className="section_title_2">
                  Danh mục sản phẩm
                </h2>
              </div>
              <div className="section_content">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="block-item">
                      <div className="block-image">
                        <a href="#" title="Dụng cụ điện">
                          <img className="img-responsive lazyload loaded" src="images/image_cat_1.jpg" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/image_cat_1.jpg?1610636210110" alt="Dụng cụ điện" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Dụng cụ điện">
                            Dụng cụ điện
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <a href="/dung-cu-dien" title="Dụng cụ điện">Dụng cụ điện</a>
                          <a href="/dung-cu-cam-tay" title="Dụng cụ cầm tay">Dụng cụ cầm tay</a>
                          <a href="/phu-kien" title="Phụ kiện">Phụ kiện</a>
                          <a href="/ngoai-troi" title="Ngoài trời">Ngoài trời</a>
                          <a href="/do-bao-ho" title="Đồ bảo hộ">Đồ bảo hộ</a>
                        </div>
                        <a className="view-more" href="#" title="Xem tất cả">Xem tất cả</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="block-item">
                      <div className="block-image">
                        <a href="#" title="Dụng cụ cầm tay">
                          <img className="img-responsive lazyload loaded" src="images/image_cat_2.jpg" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/image_cat_2.jpg?1610636210110" alt="Dụng cụ cầm tay" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Dụng cụ cầm tay">
                            Dụng cụ cầm tay
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <a href="/dung-cu-dien" title="Dụng cụ điện">Dụng cụ điện</a>
                          <a href="/dung-cu-cam-tay" title="Dụng cụ cầm tay">Dụng cụ cầm tay</a>
                          <a href="/phu-kien" title="Phụ kiện">Phụ kiện</a>
                          <a href="/ngoai-troi" title="Ngoài trời">Ngoài trời</a>
                          <a href="/do-bao-ho" title="Đồ bảo hộ">Đồ bảo hộ</a>
                        </div>
                        <a className="view-more" href="#" title="Xem tất cả">Xem tất cả</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="block-item">
                      <div className="block-image">
                        <a href="#" title="Phụ kiện">
                          <img className="img-responsive lazyload loaded" src="images/image_cat_3.jpg" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/image_cat_3.jpg?1610636210110" alt="Phụ kiện" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Phụ kiện">
                            Phụ kiện
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <a href="/dung-cu-dien" title="Dụng cụ điện">Dụng cụ điện</a>
                          <a href="/dung-cu-cam-tay" title="Dụng cụ cầm tay">Dụng cụ cầm tay</a>
                          <a href="/phu-kien" title="Phụ kiện">Phụ kiện</a>
                          <a href="/ngoai-troi" title="Ngoài trời">Ngoài trời</a>
                          <a href="/do-bao-ho" title="Đồ bảo hộ">Đồ bảo hộ</a>
                        </div>
                        <a className="view-more" href="#" title="Xem tất cả">Xem tất cả</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="block-item">
                      <div className="block-image">
                        <a href="#" title="Thiết bị ngoài trời">
                          <img className="img-responsive lazyload loaded" src="images/image_cat_4.jpg" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/image_cat_4.jpg?1610636210110" alt="Thiết bị ngoài trời" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Thiết bị ngoài trời">
                            Thiết bị ngoài trời
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <a href="/dung-cu-dien" title="Dụng cụ điện">Dụng cụ điện</a>
                          <a href="/dung-cu-cam-tay" title="Dụng cụ cầm tay">Dụng cụ cầm tay</a>
                          <a href="/phu-kien" title="Phụ kiện">Phụ kiện</a>
                          <a href="/ngoai-troi" title="Ngoài trời">Ngoài trời</a>
                          <a href="/do-bao-ho" title="Đồ bảo hộ">Đồ bảo hộ</a>
                        </div>
                        <a className="view-more" href="#" title="Xem tất cả">Xem tất cả</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="block-item">
                      <div className="block-image">
                        <a href="#" title="Công cụ máy móc">
                          <img className="img-responsive lazyload loaded" src="images/image_cat_5.jpg" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/image_cat_5.jpg?1610636210110" alt="Công cụ máy móc" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Công cụ máy móc">
                            Công cụ máy móc
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <a href="/dung-cu-dien" title="Dụng cụ điện">Dụng cụ điện</a>
                          <a href="/dung-cu-cam-tay" title="Dụng cụ cầm tay">Dụng cụ cầm tay</a>
                          <a href="/phu-kien" title="Phụ kiện">Phụ kiện</a>
                          <a href="/ngoai-troi" title="Ngoài trời">Ngoài trời</a>
                          <a href="/do-bao-ho" title="Đồ bảo hộ">Đồ bảo hộ</a>
                        </div>
                        <a className="view-more" href="#" title="Xem tất cả">Xem tất cả</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="block-item">
                      <div className="block-image">
                        <a href="#" title="Đồ bảo hộ">
                          <img className="img-responsive lazyload loaded" src="images/image_cat_6.jpg" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/image_cat_6.jpg?1610636210110" alt="Đồ bảo hộ" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Đồ bảo hộ">
                            Đồ bảo hộ
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <a href="/dung-cu-dien" title="Dụng cụ điện">Dụng cụ điện</a>
                          <a href="/dung-cu-cam-tay" title="Dụng cụ cầm tay">Dụng cụ cầm tay</a>
                          <a href="/phu-kien" title="Phụ kiện">Phụ kiện</a>
                          <a href="/ngoai-troi" title="Ngoài trời">Ngoài trời</a>
                          <a href="/do-bao-ho" title="Đồ bảo hộ">Đồ bảo hộ</a>
                        </div>
                        <a className="view-more" href="#" title="Xem tất cả">Xem tất cả</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="awe-section-5">	
          <div className="section_tab_san_pham">
            <div className="container">
              <div className="bg">
                <h2 className="section_title">Nổi bật trong tuần</h2>
                <div className="e-tabs not-dqtab ajax-tab-2" data-section="ajax-tab-2" data-view="grid_4">
                  <div className="content">
                    <span className="hidden-md hidden-lg button_show_tab">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </span>
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <ul className="tabs tabs-title tab-desktop ajax clearfix evo-close">
                          <li className="tab-link has-content current" data-tab="tab-1" data-url="/dung-cu-dien">
                            <span title="Dụng cụ điện">
                              <img className="img-responsive lazyload loaded" src="images/screwdriver.png" data-src="https://bizweb.dktcdn.net/100/408/894/collections/screwdriver.png?v=1604029430450" alt="Dụng cụ điện" data-was-processed="true" />
                              <span className="link_title">Dụng cụ điện</span>
                            </span>
                          </li>
                          <li className="tab-link " data-tab="tab-2" data-url="/dung-cu-cam-tay">
                            <span title="Dụng cụ cầm tay">
                              <img className="img-responsive lazyload loaded" src="images/hand-tool.png" data-src="https://bizweb.dktcdn.net/100/408/894/collections/hand-tool.png?v=1604029667243" alt="Dụng cụ cầm tay" data-was-processed="true" />
                              <span className="link_title">Dụng cụ cầm tay</span>
                            </span>
                          </li>
                          <li className="tab-link " data-tab="tab-3" data-url="/phu-kien">
                            <span title="Phụ kiện">
                              <img className="img-responsive lazyload loaded" src="images/pliers-hand-tool-outline.png" data-src="https://bizweb.dktcdn.net/100/408/894/collections/pliers-hand-tool-outline.png?v=1604030004387" alt="Phụ kiện" data-was-processed="true" />
                              <span className="link_title">Phụ kiện</span>
                            </span>
                          </li>
                          <li className="tab-link " data-tab="tab-4" data-url="/ngoai-troi">
                            <span title="Ngoài trời">
                              <img className="img-responsive lazyload loaded" src="images/lawn-mower.png" data-src="https://bizweb.dktcdn.net/100/408/894/collections/lawn-mower.png?v=1604030105093" alt="Ngoài trời" data-was-processed="true" />
                              <span className="link_title">Ngoài trời</span>
                            </span>
                          </li>
                          <li className="tab-link " data-tab="tab-5" data-url="/do-bao-ho">
                            <span title="Đồ bảo hộ">
                              <img className="img-responsive lazyload loaded" src="images/worker.png" data-src="https://bizweb.dktcdn.net/100/408/894/collections/worker.png?v=1604030308643" alt="Đồ bảo hộ" data-was-processed="true" />
                              <span className="link_title">Đồ bảo hộ</span>
                            </span>
                          </li>
                          <li className="tab-link " data-tab="tab-6" data-url="/oc-vit">
                            <span title="Ốc vít">
                              <img className="img-responsive lazyload" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="https://bizweb.dktcdn.net/100/408/894/collections/screw.png?v=1604030672857" alt="Ốc vít" />
                              <span className="link_title">Ốc vít</span>
                            </span>
                          </li>
                          <li className="tab-link " data-tab="tab-7" data-url="/co-khi-neo">
                            <span title="đồ bảo hộ neo">
                              <img className="img-responsive lazyload" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="https://bizweb.dktcdn.net/100/408/894/collections/car-parts.png?v=1604030694580" alt="đồ bảo hộ neo" />
                              <span className="link_title">đồ bảo hộ neo</span>
                            </span>
                          </li>
                          <li className="tab-link " data-tab="tab-8" data-url="/cua-tay">
                            <span title="Cưa tay">
                              <img className="img-responsive lazyload" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="https://bizweb.dktcdn.net/100/408/894/collections/saw-blade-10d180f5-38f6-4b33-9e65-3680f7b7746f.png?v=1604029713940" alt="Cưa tay" />
                              <span className="link_title">Cưa tay</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="tab-1 tab-content current">
                          <div className="row">
                            <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="col-item">
                                <div className="product-thumb">
                                  <a href="/may-thoi-khi-co-day-khong-day-20v-max" className="thumb" title="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *">
                                    <img className="lazyload loaded" src="images/20.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/20.jpg?v=1604028085000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                                  </a>
                                  <div className="actions hidden-xs hidden-sm">
                                    <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568364" encType="multipart/form-data">
                                      <input type="hidden" name="variantId" defaultValue={37700810} />
                                      <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng">
                                        Thêm vào giỏ hàng
                                      </button>
                                    </form>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"> <a href="/may-thoi-khi-co-day-khong-day-20v-max" title="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *">MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX * </a> </h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price">15.000.000₫</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="thumbs-list">
                                  <div className="thumbs-list-item active">
                                    <img className="lazyload loaded" src="images/20_1.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/20.jpg?v=1604028085000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/20.jpg?v=1604028085000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/20-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/20-2.jpg?v=1604028086000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/20-2.jpg?v=1604028086000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/20-3.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/20-3.jpg?v=1604028086000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/20-3.jpg?v=1604028086000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="col-item">
                                <div className="product-thumb">
                                  <a href="/may-suoi-canh-quat-khong-day-cuong-buc-20v-max-70-000-btu" className="thumb" title="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU">
                                    <img className="lazyload loaded" src="images/19_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/19.jpg?v=1604028014000" alt="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU" data-was-processed="true" />
                                  </a>
                                  <div className="actions hidden-xs hidden-sm">
                                    <form action="/cart/add" method="post" className="variants" data-id="product-actions-19568359" encType="multipart/form-data">
                                    </form>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"> <a href="/may-suoi-canh-quat-khong-day-cuong-buc-20v-max-70-000-btu" title="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU">MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU </a> </h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price"> 
                                          Liên hệ
                                        </span> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="thumbs-list">
                                  <div className="thumbs-list-item active">
                                    <img className="lazyload loaded" src="images/19.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/19.jpg?v=1604028014000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/19.jpg?v=1604028014000" alt="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/19-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/19-2.jpg?v=1604028016000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/19-2.jpg?v=1604028016000" alt="MÁY SƯỞI CÁNH QUẠT KHÔNG DÂY CƯỠNG BỨC 20V MAX * 70.000 BTU" data-was-processed="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="col-item">
                                <div className="product-thumb">
                                  <a href="/may-cat-gach-da-op-muler-m089" className="thumb" title="Máy Cắt Gạch - Đá Ốp MULER M089">
                                    <img className="lazyload loaded" src="images/15.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/15.jpg?v=1604026094000" alt="Máy Cắt Gạch - Đá Ốp MULER M089" data-was-processed="true" />
                                  </a>
                                  <div className="actions hidden-xs hidden-sm">
                                    <form action="/cart/add" method="post" className="variants" data-id="product-actions-19567995" encType="multipart/form-data">
                                    </form>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"> <a href="/may-cat-gach-da-op-muler-m089" title="Máy Cắt Gạch - Đá Ốp MULER M089">Máy Cắt Gạch - Đá Ốp MULER M089 </a> </h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price"> 
                                          Liên hệ
                                        </span> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="thumbs-list">
                                  <div className="thumbs-list-item active">
                                    <img className="lazyload loaded" src="images/15_1.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/15.jpg?v=1604026094000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/15.jpg?v=1604026094000" alt="Máy Cắt Gạch - Đá Ốp MULER M089" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/15-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/15-2.jpg?v=1604026095000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/15-2.jpg?v=1604026095000" alt="Máy Cắt Gạch - Đá Ốp MULER M089" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/15-3.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/15-3.jpg?v=1604026095000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/15-3.jpg?v=1604026095000" alt="Máy Cắt Gạch - Đá Ốp MULER M089" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/15-4.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/15-4.jpg?v=1604026095000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/15-4.jpg?v=1604026095000" alt="Máy Cắt Gạch - Đá Ốp MULER M089" data-was-processed="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="col-item">
                                <div className="product-thumb">
                                  <a href="/may-cat-co-cam-tay-gardena-09856-20" className="thumb" title="Máy cắt cỏ cầm tay gardena 09856-20">
                                    <img className="lazyload loaded" src="images/14_1.png" data-src="https://bizweb.dktcdn.net/100/408/894/products/14.png?v=1604026062000" alt="Máy cắt cỏ cầm tay gardena 09856-20" data-was-processed="true" />
                                  </a>
                                  <div className="actions hidden-xs hidden-sm">
                                    <form action="/cart/add" method="post" className="variants" data-id="product-actions-19567992" encType="multipart/form-data">
                                    </form>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"> <a href="/may-cat-co-cam-tay-gardena-09856-20" title="Máy cắt cỏ cầm tay gardena 09856-20">Máy cắt cỏ cầm tay gardena 09856-20 </a> </h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price"> 
                                          Liên hệ
                                        </span> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="thumbs-list">
                                  <div className="thumbs-list-item active">
                                    <img className="lazyload loaded" src="images/14.png" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/14.png?v=1604026062000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/14.png?v=1604026062000" alt="Máy cắt cỏ cầm tay gardena 09856-20" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/14-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/14-2.jpg?v=1604026063000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/14-2.jpg?v=1604026063000" alt="Máy cắt cỏ cầm tay gardena 09856-20" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/14-3.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/14-3.jpg?v=1604026064000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/14-3.jpg?v=1604026064000" alt="Máy cắt cỏ cầm tay gardena 09856-20" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/14-4.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/14-4.jpg?v=1604026064000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/14-4.jpg?v=1604026064000" alt="Máy cắt cỏ cầm tay gardena 09856-20" data-was-processed="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="col-item">
                                <div className="product-thumb">
                                  <a href="/may-mai-cat-goc-cam-tay-hikari-master-k100b" className="thumb" title="Máy Mài Cắt Góc Cầm Tay Hikari Master K100B">
                                    <img className="lazyload loaded" src="images/13_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/13.jpg?v=1604026030000" alt="Máy Mài Cắt Góc Cầm Tay Hikari Master K100B" data-was-processed="true" />
                                  </a>
                                  <div className="actions hidden-xs hidden-sm">
                                    <form action="/cart/add" method="post" className="variants" data-id="product-actions-19567990" encType="multipart/form-data">
                                    </form>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"> <a href="/may-mai-cat-goc-cam-tay-hikari-master-k100b" title="Máy Mài Cắt Góc Cầm Tay Hikari Master K100B">Máy Mài Cắt Góc Cầm Tay Hikari Master K100B </a> </h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price"> 
                                          Liên hệ
                                        </span> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="thumbs-list">
                                  <div className="thumbs-list-item active">
                                    <img className="lazyload loaded" src="images/13.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/13.jpg?v=1604026030000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/13.jpg?v=1604026030000" alt="Máy Mài Cắt Góc Cầm Tay Hikari Master K100B" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/13-2.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/13-2.jpg?v=1604026031000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/13-2.jpg?v=1604026031000" alt="Máy Mài Cắt Góc Cầm Tay Hikari Master K100B" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/13-3.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/13-3.jpg?v=1604026031000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/13-3.jpg?v=1604026031000" alt="Máy Mài Cắt Góc Cầm Tay Hikari Master K100B" data-was-processed="true" />
                                  </div>
                                  <div className="thumbs-list-item ">
                                    <img className="lazyload loaded" src="images/13-4.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/13-4.jpg?v=1604026031000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/13-4.jpg?v=1604026031000" alt="Máy Mài Cắt Góc Cầm Tay Hikari Master K100B" data-was-processed="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="col-item">
                                <div className="product-thumb">
                                  <a href="/may-khoan-cam-tay-18v-dewalt-dcd785d2-b1" className="thumb" title="Máy khoan cầm tay 18V Dewalt DCD785D2-B1">
                                    <img className="lazyload loaded" src="images/sp9.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/sp9.jpg?v=1603967642000" alt="Máy khoan cầm tay 18V Dewalt DCD785D2-B1" data-was-processed="true" />
                                  </a>
                                  <div className="actions hidden-xs hidden-sm">
                                    <form action="/cart/add" method="post" className="variants" data-id="product-actions-19564921" encType="multipart/form-data">
                                    </form>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"> <a href="/may-khoan-cam-tay-18v-dewalt-dcd785d2-b1" title="Máy khoan cầm tay 18V Dewalt DCD785D2-B1">Máy khoan cầm tay 18V Dewalt DCD785D2-B1 </a> </h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price"> 
                                          Liên hệ
                                        </span> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="thumbs-list">
                                  <div className="thumbs-list-item active">
                                    <img className="lazyload loaded" src="images/sp9_1.jpg" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/sp9.jpg?v=1603967642000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/sp9.jpg?v=1603967642000" alt="Máy khoan cầm tay 18V Dewalt DCD785D2-B1" data-was-processed="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="col-item">
                                <div className="product-thumb">
                                  <a href="/than-may-van-vit-dung-pin-18v-dewalt-dcf887n-kr" className="thumb" title="Thân máy vặn vít dùng pin 18V DeWALT DCF887N-KR">
                                    <img className="lazyload loaded" src="images/sp8_1.png" data-src="https://bizweb.dktcdn.net/100/408/894/products/sp8.png?v=1603967625000" alt="Thân máy vặn vít dùng pin 18V DeWALT DCF887N-KR" data-was-processed="true" />
                                  </a>
                                  <div className="actions hidden-xs hidden-sm">
                                    <form action="/cart/add" method="post" className="variants" data-id="product-actions-19564919" encType="multipart/form-data">
                                    </form>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"> <a href="/than-may-van-vit-dung-pin-18v-dewalt-dcf887n-kr" title="Thân máy vặn vít dùng pin 18V DeWALT DCF887N-KR">Thân máy vặn vít dùng pin 18V DeWALT DCF887N-KR </a> </h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price"> 
                                          Liên hệ
                                        </span> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="thumbs-list">
                                  <div className="thumbs-list-item active">
                                    <img className="lazyload loaded" src="images/sp8.png" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/sp8.png?v=1603967625000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/sp8.png?v=1603967625000" alt="Thân máy vặn vít dùng pin 18V DeWALT DCF887N-KR" data-was-processed="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                              <div className="col-item">
                                <div className="product-thumb">
                                  <a href="/than-may-khoan-dong-luc-dung-pin-18v-dewalt-dcd996n-kr-khong-choi-than" className="thumb" title="Thân máy khoan động lực dùng pin 18V Dewalt DCD996N-KR (không chổi than)">
                                    <img className="lazyload loaded" src="images/sp7.png" data-src="https://bizweb.dktcdn.net/100/408/894/products/sp7.png?v=1603967585000" alt="Thân máy khoan động lực dùng pin 18V Dewalt DCD996N-KR (không chổi than)" data-was-processed="true" />
                                  </a>
                                  <div className="actions hidden-xs hidden-sm">
                                    <form action="/cart/add" method="post" className="variants" data-id="product-actions-19564913" encType="multipart/form-data">
                                    </form>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"> <a href="/than-may-khoan-dong-luc-dung-pin-18v-dewalt-dcd996n-kr-khong-choi-than" title="Thân máy khoan động lực dùng pin 18V Dewalt DCD996N-KR (không chổi than)">Thân máy khoan động lực dùng pin 18V Dewalt DCD996N-KR (không chổi than) </a> </h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price"> 
                                          Liên hệ
                                        </span> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="thumbs-list">
                                  <div className="thumbs-list-item active">
                                    <img className="lazyload loaded" src="images/sp7_1.png" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/sp7.png?v=1603967585000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/sp7.png?v=1603967585000" alt="Thân máy khoan động lực dùng pin 18V Dewalt DCD996N-KR (không chổi than)" data-was-processed="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-2 tab-content">
                        </div>
                        <div className="tab-3 tab-content">
                        </div>
                        <div className="tab-4 tab-content">
                        </div>
                        <div className="tab-5 tab-content">
                        </div>
                        <div className="tab-6 tab-content">
                        </div>
                        <div className="tab-7 tab-content">
                        </div>
                        <div className="tab-8 tab-content">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-6">	
          <section className="section_why_choose">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <h2 className="section_title_2">
                    Vì sao chọn chúng tôi?
                  </h2>
                  <div className="section_content">
                    <div className="item">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 476 476" style={{enableBackground: 'new 0 0 476 476'}} xmlSpace="preserve">
                          <g>
                            <path d="M400.85,181v-18.3c0-43.8-15.5-84.5-43.6-114.7c-28.8-31-68.4-48-111.6-48h-15.1c-43.2,0-82.8,17-111.6,48   c-28.1,30.2-43.6,70.9-43.6,114.7V181c-34.1,2.3-61.2,30.7-61.2,65.4V275c0,36.1,29.4,65.5,65.5,65.5h36.9c6.6,0,12-5.4,12-12   V192.8c0-6.6-5.4-12-12-12h-17.2v-18.1c0-79.1,56.4-138.7,131.1-138.7h15.1c74.8,0,131.1,59.6,131.1,138.7v18.1h-17.2   c-6.6,0-12,5.4-12,12v135.6c0,6.6,5.4,12,12,12h16.8c-4.9,62.6-48,77.1-68,80.4c-5.5-16.9-21.4-29.1-40.1-29.1h-30   c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.2,42.1,42.2h30.1c19.4,0,35.7-13.2,40.6-31c9.8-1.4,25.3-4.9,40.7-13.9   c21.7-12.7,47.4-38.6,50.8-90.8c34.3-2.1,61.5-30.6,61.5-65.4v-28.6C461.95,211.7,434.95,183.2,400.85,181z M104.75,316.4h-24.9   c-22.9,0-41.5-18.6-41.5-41.5v-28.6c0-22.9,18.6-41.5,41.5-41.5h24.9V316.4z M268.25,452h-30.1c-10,0-18.1-8.1-18.1-18.1   s8.1-18.1,18.1-18.1h30.1c10,0,18.1,8.1,18.1,18.1S278.25,452,268.25,452z M437.95,274.9c0,22.9-18.6,41.5-41.5,41.5h-24.9V204.8   h24.9c22.9,0,41.5,18.6,41.5,41.5V274.9z" />
                          </g>
                        </svg>
                      </div>
                      <div className="info">
                        <h3>
                          Hỗ trợ 24/7
                        </h3>
                        <div className="des">
                          Tùy chọn tự trợ giúp có sẵn 24/7, nơi bạn có thể duyệt qua bài viết hỗ trợ của chúng tôi, hỗ trợ trò chuyện trực tuyến trực tiếp cũng hoạt động 24/7.
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                          <g>
                            <g>
                              <path d="M288.502,32.502c-108.328,0-198.827,77.485-219.166,179.899l-42.482-53.107L0,180.784l68.769,85.961    c3.352,4.178,8.338,6.447,13.427,6.447c2.596,0,5.226-0.585,7.685-1.805l103.153-51.577l-15.387-30.757l-75.8,37.892    c14.063-90.5,92.27-160.059,186.655-160.059c104.271,0,189.114,84.843,189.114,189.114s-84.843,189.114-189.114,189.114v34.384    C411.735,479.498,512,379.233,512,256S411.735,32.502,288.502,32.502z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="info">
                        <h3>
                          Dễ dàng đổi trả
                        </h3>
                        <div className="des">
                          Nó đã tồn tại không chỉ năm thế kỷ, mà còn là bước nhảy vọt trong lĩnh vực sắp chữ điện tử, về cơ bản vẫn không thay đổi.
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="479pt" viewBox="0 0 479 479.84995" width="479pt"><path d="m293.773438 195.351562-72.097657 68.097657-34.601562-35.597657c-3.835938-3.949218-10.152344-4.039062-14.097657-.203124-3.949218 3.839843-4.039062 10.152343-.203124 14.101562l41.5 42.601562c3.855468 3.878907 10.085937 4.011719 14.101562.296876l79.300781-74.796876c1.925781-1.816406 3.050781-4.324218 3.125-6.96875.074219-2.644531-.90625-5.210937-2.726562-7.132812-3.859375-4.011719-10.222657-4.1875-14.300781-.398438zm0 0" /><path d="m240.273438 90.550781c-82.398438 0-149.398438 67-149.398438 149.398438 0 82.402343 67 149.402343 149.398438 149.402343 82.402343 0 149.402343-67 149.402343-149.402343 0-82.398438-67-149.398438-149.402343-149.398438zm0 278.800781c-71.398438 0-129.398438-58.101562-129.398438-129.402343s58-129.398438 129.398438-129.398438c71.46875 0 129.402343 57.933594 129.402343 129.398438 0 71.464843-57.933593 129.402343-129.402343 129.402343zm0 0" /><path d="m445.875 184.949219 3.300781-59.300781c.230469-3.980469-1.933593-7.71875-5.5-9.5l-52.800781-26.699219-26.699219-52.800781c-1.816406-3.535157-5.53125-5.6875-9.5-5.5l-59.402343 3.203124-49.5-32.703124c-3.335938-2.199219-7.660157-2.199219-11 0l-49.5 32.703124-59.296876-3.300781c-3.984374-.234375-7.71875 1.929688-9.5 5.5l-26.703124 52.800781-52.796876 26.699219c-3.539062 1.8125-5.6875 5.527344-5.5 9.5l3.296876 59.300781-32.699219 49.5c-2.199219 3.335938-2.199219 7.660157 0 11l32.601562 49.597657-3.300781 59.300781c-.230469 3.980469 1.929688 7.71875 5.5 9.5l52.800781 26.699219 26.699219 52.800781c1.8125 3.539062 5.527344 5.6875 9.5 5.5l59.300781-3.300781 49.5 32.699219c3.316407 2.269531 7.683594 2.269531 11 0l49.5-32.699219 59.300781 3.300781c3.980469.230469 7.714844-1.933594 9.5-5.5l26.699219-52.800781 52.800781-26.699219c3.535157-1.816406 5.6875-5.527344 5.5-9.5l-3.300781-59.300781 32.699219-49.5c2.199219-3.335938 2.199219-7.664063 0-11zm-18.601562 101.800781c-1.21875 1.789062-1.785157 3.941406-1.597657 6.101562l3.097657 56.097657-49.898438 25.199219c-1.902344.953124-3.445312 2.5-4.398438 4.402343l-25.203124 49.898438-56.097657-3.097657c-2.148437-.078124-4.269531.476563-6.101562 1.597657l-46.800781 30.902343-46.796876-30.902343c-1.625-1.097657-3.539062-1.691407-5.5-1.699219h-.5l-56.101562 3.101562-25.199219-49.902343c-.953125-1.902344-2.496093-3.445313-4.402343-4.398438l-50-25.101562 3.101562-56.097657c.078125-2.148437-.480469-4.269531-1.601562-6.101562l-30.898438-46.800781 30.898438-46.800781c1.222656-1.785157 1.789062-3.941407 1.601562-6.097657l-3.101562-56.101562 49.902343-25.199219c1.902344-.953125 3.445313-2.496094 4.398438-4.398438l25.199219-49.902343 56.101562 3.101562c2.144531.074219 4.265625-.480469 6.101562-1.601562l46.796876-30.898438 46.800781 30.898438c1.789062 1.222656 3.945312 1.789062 6.101562 1.601562l56.097657-3.101562 25.203124 49.902343c.953126 1.902344 2.496094 3.445313 4.398438 4.398438l49.898438 25.199219-3.097657 56.101562c-.078125 2.144531.480469 4.265625 1.597657 6.097657l30.902343 46.800781zm0 0" /></svg>
                      </div>
                      <div className="info">
                        <h3>
                          Chất lượng cao
                        </h3>
                        <div className="des">
                          Chúng tôi mong muốn tiếp tục sản xuất các sản phẩm chất lượng hàng đầu trong khi giảm tác động của chúng tôi đến môi trường.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="awe-section-7">	
          <section className="section_product_two">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 one">
                  <h2 className="section_title">
                    <a href="san-pham-noi-bat" title="Phụ kiện">
                      Phụ kiện
                    </a>
                  </h2>
                  <div className="section_content">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bua-khoan-soi-thuy-tinh-3-lb" className="thumb" title="BÚA KHOAN SỢI THỦY TINH 3 LB.">
                              <img className="lazyload loaded" src="images/25_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/25.jpg?v=1604029328000" alt="BÚA KHOAN SỢI THỦY TINH 3 LB." data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bua-khoan-soi-thuy-tinh-3-lb" title="BÚA KHOAN SỢI THỦY TINH 3 LB.">BÚA KHOAN SỢI THỦY TINH 3 LB. </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">10.499.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bo-thay-lop-co-le-mo-men-lai" className="thumb" title="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI">
                              <img className="lazyload loaded" src="images/24_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/24.jpg?v=1604029308000" alt="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bo-thay-lop-co-le-mo-men-lai" title="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI">BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">11.000.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/dao-tien-ich-co-the-thu-vao-cao-cap" className="thumb" title="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP">
                              <img className="lazyload loaded" src="images/23_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/23.jpg?v=1604029278000" alt="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/dao-tien-ich-co-the-thu-vao-cao-cap" title="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP">DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bo-cuon-phan-6-1" className="thumb" title="BỘ CUỘN PHẤN 6:1">
                              <img className="lazyload loaded" src="images/22_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/22.jpg?v=1604029251000" alt="BỘ CUỘN PHẤN 6:1" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bo-cuon-phan-6-1" title="BỘ CUỘN PHẤN 6:1">BỘ CUỘN PHẤN 6:1 </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/sung-bam-ghim-bang-soi-carbon" className="thumb" title="SÚNG BẤM GHIM BẰNG SỢI CARBON">
                              <img className="lazyload loaded" src="images/21_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/21.jpg?v=1604029219000" alt="SÚNG BẤM GHIM BẰNG SỢI CARBON" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/sung-bam-ghim-bang-soi-carbon" title="SÚNG BẤM GHIM BẰNG SỢI CARBON">SÚNG BẤM GHIM BẰNG SỢI CARBON </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/may-thoi-khi-co-day-khong-day-20v-max" className="thumb" title="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *">
                              <img className="lazyload loaded" src="images/20.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/20.jpg?v=1604028085000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/may-thoi-khi-co-day-khong-day-20v-max" title="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *">MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX * </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">15.000.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <h2 className="section_title">
                    <a href="san-pham-noi-bat" title="Sản phẩm khác">
                      Sản phẩm khác
                    </a>
                  </h2>
                  <div className="section_content">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bua-khoan-soi-thuy-tinh-3-lb" className="thumb" title="BÚA KHOAN SỢI THỦY TINH 3 LB.">
                              <img className="lazyload loaded" src="images/25_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/25.jpg?v=1604029328000" alt="BÚA KHOAN SỢI THỦY TINH 3 LB." data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bua-khoan-soi-thuy-tinh-3-lb" title="BÚA KHOAN SỢI THỦY TINH 3 LB.">BÚA KHOAN SỢI THỦY TINH 3 LB. </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">10.499.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bo-thay-lop-co-le-mo-men-lai" className="thumb" title="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI">
                              <img className="lazyload loaded" src="images/24_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/24.jpg?v=1604029308000" alt="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bo-thay-lop-co-le-mo-men-lai" title="BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI">BỘ THAY LỐP CỜ LÊ MÔ MEN LÁI </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">11.000.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/dao-tien-ich-co-the-thu-vao-cao-cap" className="thumb" title="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP">
                              <img className="lazyload loaded" src="images/23_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/23.jpg?v=1604029278000" alt="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/dao-tien-ich-co-the-thu-vao-cao-cap" title="DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP">DAO TIỆN ÍCH CÓ THỂ THU VÀO CAO CẤP </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/bo-cuon-phan-6-1" className="thumb" title="BỘ CUỘN PHẤN 6:1">
                              <img className="lazyload loaded" src="images/22_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/22.jpg?v=1604029251000" alt="BỘ CUỘN PHẤN 6:1" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/bo-cuon-phan-6-1" title="BỘ CUỘN PHẤN 6:1">BỘ CUỘN PHẤN 6:1 </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/sung-bam-ghim-bang-soi-carbon" className="thumb" title="SÚNG BẤM GHIM BẰNG SỢI CARBON">
                              <img className="lazyload loaded" src="images/21_1.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/21.jpg?v=1604029219000" alt="SÚNG BẤM GHIM BẰNG SỢI CARBON" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/sung-bam-ghim-bang-soi-carbon" title="SÚNG BẤM GHIM BẰNG SỢI CARBON">SÚNG BẤM GHIM BẰNG SỢI CARBON </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price"> 
                                    Liên hệ
                                  </span> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item">
                        <div className="col-item">
                          <div className="product-thumb">
                            <a href="/may-thoi-khi-co-day-khong-day-20v-max" className="thumb" title="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *">
                              <img className="lazyload loaded" src="images/20.jpg" data-src="https://bizweb.dktcdn.net/100/408/894/products/20.jpg?v=1604028085000" alt="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *" data-was-processed="true" />
                            </a>
                          </div>
                          <div className="product-info">
                            <h3 className="title"> <a href="/may-thoi-khi-co-day-khong-day-20v-max" title="MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX *">MÁY THỔI KHÍ CÓ DÂY / KHÔNG DÂY 20V MAX * </a> </h3>
                            <div className="content">
                              <div className="item-price">    
                                <div className="price-box"> 
                                  <span className="special-price">15.000.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="awe-section-8">	
          <section className="section_banner2">
            <div className="container">
              <div className="banner banner-1">
                <a href="#" title="ND đồ bảo hộ">
                  <img className="img-responsive lazyload loaded" src="images/img_banner2_1.jpg" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/img_banner2_1.jpg?1610636210110" alt="ND đồ bảo hộ" data-was-processed="true" />
                </a>
              </div>
            </div>
          </section>
        </section>
        <section className="awe-section-9">	
          <section className="section_blog_danhgia">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 section-block">
                  <h2 className="section_title">
                    <a href="tin-tuc" title="Tin tức">
                      Tin tức
                    </a>
                  </h2>
                  <div className="section_content">
                    <div className="slick_blog_index slick-initialized slick-slider">
                      <button type="button" data-role="none" className="slick-prev slick-arrow slick-disabled" aria-label="Previous" role="button" aria-disabled="true" style={{display: 'block'}}>Previous</button>
                      <div aria-live="polite" className="slick-list draggable">
                        <div className="slick-track" role="listbox" >
                          <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide40">
                            <div className="item item-blog-index" style={{width: '100%', display: 'inline-block'}}>
                              <div className="blog-img">
                                <a href="/dewalt-cong-bo-hai-san-pham-moi-bluetooth-radio-va-task-light" title="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light" tabIndex={0}>
                                  <picture>
                                    <source media="(min-width: 1200px)" srcSet="images/tin-tuc-6_1.jpg" />
                                    <source media="(min-width: 992px)" srcSet="images/tin-tuc-6_1.jpg" />
                                    <source media="(min-width: 569px)" srcSet="images/tin-tuc-6_1.jpg" />
                                    <source media="(min-width: 480px)" srcSet="images/tin-tuc-6.jpg" />
                                    <img src="images/tin-tuc-6.jpg" alt="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light" />
                                  </picture>  
                                </a>
                              </div>
                              <div className="blog-content">
                                <h3><a href="/dewalt-cong-bo-hai-san-pham-moi-bluetooth-radio-va-task-light" title="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light" tabIndex={0}>DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light</a> </h3>
                                <div className="justify des">TOWSON, MD (ngày 16 tháng 4 năm 2020) - DEWALT công...</div>
                              </div>
                            </div>
                            <div className="item item-blog-index" style={{width: '100%', display: 'inline-block'}}>
                              <div className="blog-img">
                                <a href="/dewalt-cong-bo-hai-san-pham-moi-bluetooth-radio-va-task-light" title="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light" tabIndex={0}>
                                  <picture>
                                    <source media="(min-width: 1200px)" srcSet="images/tin-tuc-6_1.jpg" />
                                    <source media="(min-width: 992px)" srcSet="images/tin-tuc-6_1.jpg" />
                                    <source media="(min-width: 569px)" srcSet="images/tin-tuc-6_1.jpg" />
                                    <source media="(min-width: 480px)" srcSet="images/tin-tuc-6.jpg" />
                                    <img src="images/tin-tuc-6.jpg" alt="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light" />
                                  </picture>  
                                </a>
                              </div>
                              <div className="blog-content">
                                <h3><a href="/dewalt-cong-bo-hai-san-pham-moi-bluetooth-radio-va-task-light" title="DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light" tabIndex={0}>DEWALT công bố hai sản phẩm mới: Bluetooth® Radio và Task Light</a> </h3>
                                <div className="justify des">TOWSON, MD (ngày 16 tháng 4 năm 2020) - DEWALT công...</div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button" style={{display: 'block'}} aria-disabled="false">Next</button></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 section-danhgia">
                  <div className="bg">
                    
                    <div className="slick_danhgia_index slick-initialized slick-slider slick-dotted" role="toolbar">
                      <div aria-live="polite" className="slick-list draggable">
                        <div className="slick-track" role="listbox">
                          <Carousel autoplay autoplaySpeed={5000}>
                            <div className="item slick-slide slick-cloned">
                              <div className="inner">
                                <div className="thumb">
                                  <img className="img-responsive lazyload" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/img_danhgia_2.jpg?1610636210110" alt="Toni" />
                                </div>
                                <div className="name">
                                  Hải Đỗ
                                </div>
                                <div className="job">
                                  CEO QT Group
                                </div>
                                <div className="des">
                                  Sản phẩm chất lượng, tư vấn nhiệt tình. Chúc Hiếu Trần phát triển mạnh mẽ hơn nữa và sớm trở thành nơi cung cấp sản phẩm đồ bảo hộ tốt nhất Việt Nam, tôi tin chắc điều đó.
                                </div>
                              </div>
                            </div>
                            <div className="item slick-slide slick-current slick-active">
                              <div className="inner">
                                <div className="thumb">
                                  <img className="img-responsive lazyload loaded" src="images/img_danhgia_1.jpg" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/img_danhgia_1.jpg?1610636210110" alt="Nguyễn Anh Dũng" data-was-processed="true" />
                                </div>
                                <div className="name">
                                  Trí Nguyễn
                                </div>
                                <div className="job">
                                  CEO TT Group    
                                </div>
                                <div className="des">
                                  Sản phẩm chất lượng, tư vấn nhiệt tình. Chúc Hiếu Trần phát triển mạnh mẽ hơn nữa và sớm trở thành nơi cung cấp sản phẩm đồ bảo hộ tốt nhất Việt Nam, tôi tin chắc điều đó.
                                </div>
                              </div>
                            </div>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="sec_brand">
          <div className="container">
            <div className="slick_brand slick-initialized slick-slider"><button type="button" data-role="none" className="slick-prev slick-arrow slick-disabled" aria-label="Previous" role="button" aria-disabled="true" style={{display: 'block'}}>Previous</button>
              <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{opacity: 1, width: '1309px', transform: 'translate3d(0px, 0px, 0px)'}}><div className="item slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide20" style={{width: '187px'}}>
                    <a href="#" title="ND đồ bảo hộ" tabIndex={0}>
                      <img className="img-responsive lazyload loaded" src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand1.jpg?1611839274323" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand1.jpg?1611839274323" alt="ND đồ bảo hộ" data-was-processed="true" />
                    </a>
                  </div><div className="item slick-slide slick-active" data-slick-index={1} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide21" style={{width: '187px'}}>
                    <a href="#" title="ND đồ bảo hộ" tabIndex={0}>
                      <img className="img-responsive lazyload loaded" src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand2.jpg?1611839274323" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand2.jpg?1611839274323" alt="ND đồ bảo hộ" data-was-processed="true" />
                    </a>
                  </div><div className="item slick-slide slick-active" data-slick-index={2} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide22" style={{width: '187px'}}>
                    <a href="#" title="ND đồ bảo hộ" tabIndex={0}>
                      <img className="img-responsive lazyload loaded" src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand3.jpg?1611839274323" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand3.jpg?1611839274323" alt="ND đồ bảo hộ" data-was-processed="true" />
                    </a>
                  </div><div className="item slick-slide slick-active" data-slick-index={3} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide23" style={{width: '187px'}}>
                    <a href="#" title="ND đồ bảo hộ" tabIndex={0}>
                      <img className="img-responsive lazyload loaded" src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand4.jpg?1611839274323" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand4.jpg?1611839274323" alt="ND đồ bảo hộ" data-was-processed="true" />
                    </a>
                  </div><div className="item slick-slide slick-active" data-slick-index={4} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide24" style={{width: '187px'}}>
                    <a href="#" title="ND đồ bảo hộ" tabIndex={0}>
                      <img className="img-responsive lazyload loaded" src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand5.jpg?1611839274323" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand5.jpg?1611839274323" alt="ND đồ bảo hộ" data-was-processed="true" />
                    </a>
                  </div><div className="item slick-slide slick-active" data-slick-index={5} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide25" style={{width: '187px'}}>
                    <a href="#" title="ND đồ bảo hộ" tabIndex={0}>
                      <img className="img-responsive lazyload loaded" src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand6.jpg?1611839274323" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand6.jpg?1611839274323" alt="ND đồ bảo hộ" data-was-processed="true" />
                    </a>
                  </div><div className="item slick-slide" data-slick-index={6} aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide26" style={{width: '187px'}}>
                    <a href title="Hiếu Trần" tabIndex={-1}>
                      <img className="img-responsive lazyload" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="//bizweb.dktcdn.net/100/408/894/themes/794154/assets/brand7.jpg?1611839274323" alt="Hiếu Trần" />
                    </a>
                  </div></div></div>
              <button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" role="button" style={{display: 'block'}} aria-disabled="false">Next</button></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([
    fetchAPI("/homepage")
  ]);

  return {
    props: {homepage},
    revalidate: 1,
  };
}

export default Home;
