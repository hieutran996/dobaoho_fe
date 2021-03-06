//animation
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import LightSpeed from 'react-reveal/LightSpeed'
import Layout from "../components/layout";
import Seo from "../components/seo";
import AddToCart from "../components/addToCart"
//image
import ImageLazy from 'next/image'
import Image from 'next/image'
//api
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import Link from "next/link";
import { Carousel } from 'antd';
import { useState } from 'react';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;
 
// Renderer callback with condition
const renderer = ({ days,hours, minutes, seconds }) => {
  return (
    <div className="clockdiv" style={{display: 'block !important', paddingLeft: 5}}>
      <div className="date-time time-day">
        <span className="days"><b>{days}</b><small>Ngày</small></span>
      </div>
      <span className="clocks" />
      <div className="date-time time-hour">
        <span className="hours "><b>{hours}</b><small>Giờ</small></span>
      </div>
      <span className="clocks" />
      <div className="date-time time-min">
        <span className="minutes "><b>{minutes}</b><small>Phút</small></span>
      </div>
      <span className="clocks" />
      <div className="date-time time-sec">
        <span className="seconds"><b>{seconds}</b><small>Giây</small></span>
      </div>
    </div>
  );
};


const Home = ({ homepage,news,accessories,other_products,bestsell_products,featured_helmet,featured_protective_gear,featured_accessories,featured_toy_bike }) => {
  const [tabActive,setTabActive] = useState('helmet')
  const dataSpecialInWeek = {
    helmet: featured_helmet,
    protective_gear: featured_protective_gear,
    accessories: featured_accessories,
    toy_bike: featured_toy_bike
  }
  const onClickSpecialTab = (event) => {
    setTabActive(event.currentTarget.dataset.name)
  }
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div className="page-body dash_board">
        <section className="awe-section-1">	
          <div id="magik-slideshow" className="magik-slideshow slick-initialized slick-slider">
            <Carousel autoplay autoplaySpeed={3000}>
              <div className="carousel_center">
                <Link href={`/detail/agv_helmet.jpeg`} title="AGV">
                  <Image layout='intrinsic' width={768} height={768}  src={`/images/homepage/agv_helmet.jpeg`} alt="AGV" />
                </Link>
              </div>
            </Carousel>
          </div>
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
                            {
                              featured_helmet.map((value) => {
                                if (value.slug === "mu-fullface-ls-2-challenger-carbon-ff-327") {
                                  return(
                                    <div className="col-item pt-0" key={value._id}>
                                      <div className="sale-label sale-top-right">
                                        <span>
                                          - 10% 
                                        </span>
                                      </div>
                                      <div className="product-thumb">
                                        <Link href={`/detail/${value.slug}`} title={value.name}>
                                          <a className="thumb" title={value.name} id={`parent_cart_${value._id}`}>
                                            <ImageLazy layout='fill' className="lazyload loaded" src={getStrapiMedia(value.image[0])} alt={value.name} />
                                          </a>
                                        </Link>
                                        <div className="actions hidden-xs hidden-sm">
                                          <div className="variants">
                                            <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng" onClick={() => AddToCart(value)}>
                                              Thêm vào giỏ hàng
                                            </button>
                                          </div>       
                                        </div>
                                      </div>
                                      <Countdown
                                        date={Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30}
                                        renderer={renderer}
                                      />
                                      <div className="product-info">
                                        <div className="product_type" />
                                        <h3 className="title"><Link href={`/detail/${value.slug}`} title={value.name}><a title={value.name} >{value.name} </a></Link></h3>
                                        <div className="content">
                                          <div className="item-price">    
                                            <div className="price-box"> 
                                              <span className="special-price"> 
                                                9,900,000₫
                                              </span>
                                              {/* <span className="old-price"> 
                                                900,000₫
                                              </span> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }
                              })
                            }
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
                      <li><Link className="ef" href="/aboutUs" title="Giới thiệu">Giới thiệu</Link></li>
                      <li><Link className="ef" href="/product" title="Sản phẩm">Sản phẩm</Link></li>
                      <li><Link className="ef" href="/new" title="Tin tức">Tin tức</Link></li>
                      <li><Link className="ef" href="/contact" title="Liên hệ">Liên hệ</Link></li>
                    </ul>
                  </div>
                  <div className="section_content">
                    <div className="row">
                      {
                        bestsell_products.map((value) => {
                          return(
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 item" key={value._id}>
                              <div className="col-item">
                                <div className="product-thumb">
                                  <Link href={`/detail/${value.slug}`} title={value.name}>
                                    <a className="thumb" title={value.name} id={`parent_cart_${value._id}`}>
                                      <ImageLazy layout='fill' className="lazyload loaded" src={getStrapiMedia(value.image[0])} alt={value.name} />
                                    </a>
                                  </Link>
                                  <div className="actions hidden-xs hidden-sm">
                                    <div className="variants">
                                      <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng" onClick={() => AddToCart(value)}>
                                        Thêm vào giỏ hàng
                                      </button>
                                    </div>       
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"><Link href={`/detail/${value.slug}`} title={value.name}><a title={value.name}>{value.name}</a></Link></h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price">{value.price}₫</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="awe-section-4">	
          <section className="section_category list_product">
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
                        <a href="#" title="Mũ bảo hiểm">
                          <img className="img-responsive lazyload loaded" src="images/homepage/pista-gp-r-anniversario.jpg" alt="Mũ bảo hiểm" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Mũ bảo hiểm">
                            Mũ bảo hiểm
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <Link href="/product/ls-2" title="LS2"><a title="LS2">LS2</a></Link>
                          <Link href="/product/yohe" title="Yohe"><a title="Yohe">Yohe</a></Link>
                          <Link href="/product/ego" title="Ego"><a title="Ego">Ego</a></Link>
                          <Link href="/product/bulldog" title="BullDog"><a title="BullDog">BullDog</a></Link>
                          <Link href="/product/zeus" title="Zeus"><a title="Zeus">Zeus</a></Link>
                        </div>
                        <Link href="/product" title="Xem tất cả"><a className="view-more" title="Xem tất cả">Xem tất cả</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="block-item">
                      <div className="block-image">
                        <a href="#" title="Đồ bảo hộ">
                          <img className="img-responsive lazyload loaded" src="images/homepage/giap_dainese.jpeg" alt="Đồ bảo hộ" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Đồ bảo hộ">
                            Đồ bảo hộ
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <a href="/dung-cu-dien" title="Mũ bảo hiểm">Dainese</a>
                          <a href="/dung-cu-cam-tay" title="Đồ bảo hộ">Alpinestars</a>
                        </div>
                        <a className="view-more" href="#" title="Xem tất cả">Xem tất cả</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="block-item">
                      <div className="block-image">
                        <a href="#" title="Phụ kiện">
                          <img className="img-responsive lazyload loaded" src="images/homepage/phukien.jpg" alt="Phụ kiện" data-was-processed="true" />
                        </a>
                      </div>
                      <div className="block-content">
                        <h3>
                          <a href="#" title="Phụ kiện">
                            Phụ kiện
                          </a>
                        </h3>
                        <div className="menu-cat">
                          <a href="/dung-cu-dien" title="Mũ bảo hiểm">Kính mũ</a>
                          <a href="/dung-cu-cam-tay" title="Đồ bảo hộ">Khoá số</a>
                          <a href="/phu-kien" title="Phụ kiện">Tai nghe</a>
                          <a href="/ngoai-troi" title="Ngoài trời">Trùm đầu</a>
                          <a href="/do-bao-ho" title="Đồ bảo hộ">Đuôi gió</a>
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
                          <li className={`tab-link ${tabActive === "helmet" ? 'has-content current' : ''}`} data-name="helmet" onClick={onClickSpecialTab}>
                            <span title="Mũ bảo hiểm">
                              <img className="img-responsive lazyload loaded" src="images/homepage/helmet.svg" alt="Mũ bảo hiểm" data-was-processed="true" />
                              <span className="link_title">Mũ bảo hiểm</span>
                            </span>
                          </li>
                          <li className={`tab-link ${tabActive === "protective_gear" ? 'has-content current' : ''}`} data-name="protective_gear" onClick={onClickSpecialTab}>
                            <span title="Đồ bảo hộ">
                              <img className="img-responsive lazyload loaded" src="images/homepage/bullet-proof-vest.svg" alt="Đồ bảo hộ" data-was-processed="true" />
                              <span className="link_title">Đồ bảo hộ</span>
                            </span>
                          </li>
                          <li className={`tab-link ${tabActive === "accessories" ? 'has-content current' : ''}`} data-name="accessories" onClick={onClickSpecialTab}>
                            <span title="Phụ kiện">
                              <img className="img-responsive lazyload loaded" src="images/homepage/glasses.svg" alt="Phụ kiện" data-was-processed="true" />
                              <span className="link_title">Phụ kiện</span>
                            </span>
                          </li>
                          <li className={`tab-link ${tabActive === "toy_bike" ? 'has-content current' : ''}`} data-name="toy_bike" onClick={onClickSpecialTab}>
                            <span title="Đồ chơi xe">
                              <img className="img-responsive lazyload loaded" src="images/homepage/tyre.svg" alt="Đồ chơi xe" data-was-processed="true" />
                              <span className="link_title">Đồ chơi xe</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="tab-content current mt-0 mb-0">
                          <div className="row">
                            {
                              dataSpecialInWeek[tabActive].map((value,index) => {
                                return(
                                  <div className="item col-lg-3 col-md-3 col-sm-3 col-xs-6" key={index}>
                                    <div className="col-item" >
                                      <div className="product-thumb">
                                        <Link href={`/detail/${value.slug}`} title={value.name}>
                                          <a className="thumb" title={value.name} id={`parent_cart_${value._id}`}>
                                            <ImageLazy layout='fill' className="lazyload loaded" src={getStrapiMedia(value.image[0])} alt={value.name} />
                                          </a>
                                        </Link>
                                        <div className="actions hidden-xs hidden-sm">
                                          <div action="/cart/add" method="post" className="variants">
                                            <input type="hidden" name="variantId" defaultValue={37700810} />
                                            <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng" onClick={() => AddToCart(value)}>
                                              Thêm vào giỏ hàng
                                            </button>
                                          </div>       
                                        </div>
                                      </div>
                                      <div className="product-info">
                                        <h3 className="title"> <Link href={`/detail/${value.slug}`} title={value.name}>{value.name}</Link> </h3>
                                        <div className="content">
                                          <div className="item-price">    
                                            <div className="price-box"> 
                                              <span className="special-price">{value.price}₫</span>
                                              {
                                                value.oldPrice !== null && <span className="old-price">{value.oldPrice}₫</span>
                                              }
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            }
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
                          Dịch vụ đổi trả của chúng tôi khi hàng hoá không đạt yêu cầu đều hoàn toàn miễn phí 1 đổi 1.
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
                          Sản phẩm của chúng tôi đều là những sản phẩm chất lượng cao và đảm bảo chính hãng.
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
                      {
                        accessories.map((value) => {
                          return(
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item" key={value._id}>
                              <div className="col-item">
                                <div className="product-thumb">
                                  <Link href={`/detail/${value.slug}`} className="thumb">
                                    <a title={value.name}><ImageLazy layout='fill' className="lazyload loaded" src={getStrapiMedia(value.image[0])} alt={value.name} /></a>
                                  </Link>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"><Link href={`/detail/${value.slug}`} ><a title={value.name}>{value.name}</a></Link></h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price">{value.price}₫</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
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
                      {
                        other_products.map((value) => {
                          return(
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 item" key={value._id}>
                              <div className="col-item">
                                <div className="product-thumb">
                                  <Link href={`/detail/${value.slug}`} className="thumb">
                                    <a title={value.name}><ImageLazy layout='fill' className="lazyload loaded" src={getStrapiMedia(value.image[0])} alt={value.name} /></a>
                                  </Link>
                                </div>
                                <div className="product-info">
                                  <h3 className="title"><Link href={`/detail/${value.slug}`} ><a title={value.name}>{value.name}</a></Link></h3>
                                  <div className="content">
                                    <div className="item-price">    
                                      <div className="price-box"> 
                                        <span className="special-price">{value.price}₫</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="awe-section-9">	
          <section className="section_blog_danhgia mb-5">
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
                            {
                              news.map((value) => {
                                return(
                                  <div className="item item-blog-index" style={{width: '100%', display: 'inline-block'}} key={value._id}>
                                    <div className="blog-img">
                                      <Link href={`/new/${value.slug}`}>
                                        <a title={value.name}><ImageLazy layout='responsive' width={100} height={65} src={getStrapiMedia(value.image)} alt={value.name} /></a>
                                      </Link>
                                    </div>
                                    <div className="blog-content">
                                      <h3><Link href={`/new/${value.slug}`}><a title={value.title} tabIndex={0}>{value.name}</a></Link></h3>
                                      <div className="justify des">{value.title}</div>
                                    </div>
                                  </div>
                                )
                              })
                            }
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
                                  <ImageLazy layout='fixed' width={120} height={120} className="img-responsive lazyload loaded" src="/images/homepage/hai.jpg" alt="Đỗ Viết Hải" />
                                </div>
                                <div className="name">
                                  Hải Đỗ
                                </div>
                                <div className="des">
                                  Sản phẩm chất lượng, tư vấn nhiệt tình. Chúc Hiếu Trần phát triển mạnh mẽ hơn nữa và sớm trở thành nơi cung cấp sản phẩm đồ bảo hộ tốt nhất Việt Nam, tôi tin chắc điều đó.
                                </div>
                              </div>
                            </div>
                            <div className="item slick-slide slick-current slick-active">
                              <div className="inner">
                                <div className="thumb">
                                  <ImageLazy layout='fixed' width={120} height={120} className="img-responsive lazyload loaded" src="/images/homepage/anh_tri_cho.jpg" alt="Nguyễn Minh Trí" />
                                </div>
                                <div className="name">
                                  Trí Nguyễn
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
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage,news, accessories,other_products,bestsell_products, featured_helmet, featured_protective_gear,featured_accessories,featured_toy_bike] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/news"),
    fetchAPI("/brands?slug=phu-kien"),
    fetchAPI("/brands?slug=san-pham-khac"),
    fetchAPI("/brands?slug=san-pham-ban-chay"),
    fetchAPI("/brands?slug=mu-bao-hiem-noi-bat-trong-tuan"),
    fetchAPI("/brands?slug=do-bao-ho-noi-bat-trong-tuan"),
    fetchAPI("/brands?slug=phu-kien-noi-bat-trong-tuan"),
    fetchAPI("/brands?slug=do-choi-xe-noi-bat-trong-tuan")
  ]);

  return {
    props: {
      homepage,news,
      accessories: accessories[0].products, 
      other_products: other_products[0].products, 
      bestsell_products: bestsell_products[0].products,
      featured_helmet: featured_helmet[0].products, 
      featured_protective_gear: featured_protective_gear[0].products, 
      featured_accessories: featured_accessories[0].products, 
      featured_toy_bike: featured_toy_bike[0].products
    },
    revalidate: 1,
  };
}

export default Home;
