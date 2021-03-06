import React,{ useContext, useEffect, useState } from 'react'
import LinkConfig from "../link_config"
//Recoil
import {
  useSetRecoilState
} from 'recoil'
import { OpenCart, StatusMenubar } from '../../recoil/atom'
import { GlobalContext } from "../../pages/_app";
import { getStrapiMedia } from "../../lib/media";
import { useRouter } from 'next/router'


export default function Header() {
  const setCart = useSetRecoilState(OpenCart);
  const setMenubar = useSetRecoilState(StatusMenubar);
  const { logo } = useContext(GlobalContext);
  const [valueSearch, setValueSearch] = useState('')
  const [listCart, setListCart] = useState([])
  const router = useRouter()

  const onChangeValueSearch = (event) => {
    setValueSearch(event.target.value)
  }

  const onKeyDownSearch = (event) => {
    if (event.key === 'Enter') {router.push(`/search?query=${event.target.value}`)}
  }

  const onClickSearch = () => {
    router.push(`/search?query=${valueSearch}`)
  }
  
  useEffect(() => {
    var currentListCart = localStorage.getItem('listcart');
    if (currentListCart === null) {
        currentListCart = []
    } else {
        currentListCart = JSON.parse(currentListCart)
    }

    setListCart(currentListCart)
  }, [])
  
  return (
    <header className="header">
        <div className="header-wrapper hidden-xs hidden-sm">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-3 col-md-3 header-logo">
                <LinkConfig href="/">
                  <a title="Logo">
                    <img src={getStrapiMedia(logo[0])} alt="logo do bao ho"  style={{paddingRight: '25px'}}/>
                  </a>
                </LinkConfig>	
                
              </div>
              <div className="col-lg-9 col-md-9 header-content">
                <div className="header-topbar">
                  <div className="left">
                    Chào mừng bạn đến với đồ bảo hộ Hiếu Trần
                  </div>
                  <div className="right">
                    <div className="block-search">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 192.904 192.904" style={{enableBackground: 'new 0 0 192.904 192.904'}} xmlSpace="preserve">
                        <path d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0  C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078  c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193  C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187  C44.693,147.38,15,117.689,15,81.193z" />
                      </svg>
                      <div className="header_search search_form">
                        <div className="input-group search-bar search_form">		
                          <input type="search" name="query" placeholder="Tìm kiếm..." className="change_pl input-group-field st-default-search-input search-text" value={valueSearch} onChange={onChangeValueSearch} onKeyDown={onKeyDownSearch} />
                          <span className="input-group-btn">
                            <button className="btn icon-fallback-text" onClick={onClickSearch}>
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 192.904 192.904" style={{enableBackground: 'new 0 0 192.904 192.904'}} xmlSpace="preserve">
                                <path d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0  C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078  c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193  C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187  C44.693,147.38,15,117.689,15,81.193z" />
                              </svg>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-mid">
                  <div className="menu-header">
                    <div className="wrap_main hidden-xs hidden-sm">
                      <div className="bg-header-nav hidden-xs hidden-sm">
                        <div className="row-noGutter-2">
                          <nav className="header-nav">
                            <ul className="item_big">
                              <li className="nav-item active ">	
                                <LinkConfig href="/">
                                  <a className="a-img" title="Trang chủ">
                                    <span>Trang chủ</span>
                                    <span className="label_">
                                      <i className="label " />
                                    </span>
                                  </a>
                                </LinkConfig>			
                              </li>
                              <li className="nav-item ">
                                <LinkConfig href="/aboutUs">
                                  <a className="a-img" title="Giới thiệu">
                                    <span>Giới thiệu</span>
                                    <span className="label_">
                                      <i className="label " />
                                    </span>
                                  </a>
                                </LinkConfig>	
                              </li>
                              <li className="nav-item  has-mega">
                                <a className="a-img" title="Sản phẩm">
                                  <span>Sản phẩm</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 490.688 490.688" style={{enableBackground: 'new 0 0 490.688 490.688'}} xmlSpace="preserve">
                                    <path style={{fill: '#FFC107'}} d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262  c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667  c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262  L472.328,120.529z" />
                                    <path d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083  c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262  c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279  C250.748,372.281,248.039,373.408,245.213,373.415z" />
                                  </svg>
                                  <span className="label_">
                                    <i className="label " />
                                  </span>
                                </a>
                                <div className="mega-content">
                                  <div className="nav-block nav-block-center">
                                    <ul className="level0 row">
                                      <li className="level1 parent item col-lg-3 col-md-3 col-sm-3"><h2 className="h4"><LinkConfig href="/product/mu-bao-hiem"><a title="Mũ bảo hiểm"><span>Mũ bảo hiểm</span></a></LinkConfig></h2> 
                                        <ul className="level1">
                                          <li className="level2"><LinkConfig href="/product/ls-2"><a title="Mũ LS"><span>LS2</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/yohe"><a title="Mũ Yohe"><span>Yohe</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/ego"><a title="Mũ Ego"><span>Ego</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/bulldog"><a title="Mũ Bulldog"><span>Bulldog</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/zeus"><a title="Mũ Zeus"><span>Zeus</span></a></LinkConfig></li>
                                        </ul>
                                      </li>
                                      <li className="level1 parent item col-lg-3 col-md-3 col-sm-3"><h2 className="h4"><LinkConfig href="/product/do-bao-ho"><a title="Đồ bảo hộ"><span>Đồ bảo hộ</span></a></LinkConfig></h2> 
                                        <ul className="level1">
                                          <li className="level2"><LinkConfig href="/product/ao-bao-ho"><a title="Áo bảo hộ"><span>Áo bảo hộ</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/quan-bao-ho"><a title="Quần bảo hộ"><span>Quần bảo hộ</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/gang-bao-ho"><a title="Găng bảo hộ"><span>Găng bảo hộ</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/giay-bao-ho"><a title="Giày bảo hộ"><span>Giày bảo hộ</span></a></LinkConfig></li>
                                        </ul>
                                      </li>
                                      <li className="level1 parent item col-lg-3 col-md-3 col-sm-3"><h2 className="h4"><LinkConfig href="/product/phu-kien"><a title="Phụ kiện"><span>Phụ kiện</span></a></LinkConfig></h2> 
                                        <ul className="level1">
                                          <li className="level2"><LinkConfig href="/product/kinh-mu"><a title="Kính mũ"><span>Kính mũ</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/tai-nghe"><a title="Tai nghe"><span>Tai nghe</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/trum-dau"><a title="Trùm đầu"><span>Trùm đầu</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/duoi-gio"><a title="Đuôi gió"><span>Đuôi gió</span></a></LinkConfig></li>
                                          <li className="level2"><LinkConfig href="/product/balo"><a title="Balo"><span>Balo</span></a></LinkConfig></li>
                                        </ul>
                                      </li>
                                      <li className="level1 item col-lg-3 col-md-3 col-sm-3"><h2 className="h4"><LinkConfig href="/product/do-choi-xe"><a title="Đồ chơi xe"><span>Đồ chơi xe</span></a></LinkConfig></h2>
                                      </li><li className="level1 item col-lg-3 col-md-3 col-sm-3"><h2 className="h4"><LinkConfig href="/product/san-pham-khuyen-mai"><a title="Sản phẩm khuyến mãi"><span>Sản phẩm khuyến mãi</span></a></LinkConfig></h2>
                                      </li><li className="level1 item col-lg-3 col-md-3 col-sm-3"><h2 className="h4"><LinkConfig href="/product/san-pham-moi"><a title="Sản phẩm mới"><span>Sản phẩm mới</span></a></LinkConfig></h2>
                                      </li><li className="level1 item col-lg-3 col-md-3 col-sm-3"><h2 className="h4"><LinkConfig href="/product/san-pham-noi-bat"><a title="Sản phẩm nổi bật"><span>Sản phẩm nổi bật</span></a></LinkConfig></h2>
                                      </li></ul>
                                  </div>
                                </div>
                              </li>
                              <li className="nav-item ">		
                                <LinkConfig href="/new">
                                  <a className="a-img" title="Tin tức">
                                    <span>Tin tức</span>
                                    <span className="label_">
                                      <i className="label " />
                                    </span>
                                  </a>
                                </LinkConfig>		
                              </li>
                              <li className="nav-item ">	
                                <LinkConfig href="/contact">
                                  <a className="a-img" title="Liên hệ">
                                    <span>Liên hệ</span>
                                    <span className="label_">
                                      <i className="label " />
                                    </span>
                                  </a>
                                </LinkConfig>			
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-control">
                    <div className="top-cart-contain">
                      <div className="mini-cart text-xs-center">
                        <div className="heading-cart icon_shopping" id="cart_shopping">
                          <a title="Giỏ hàng" onClick={() => setCart(true)} >
                            <svg viewBox="0 0 19 23"> <path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" fill="#222" /> </svg>
                            <span className="cartCount count_item_pr">{listCart.length}</span>
                          </a>
                        </div> 	
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-header hidden-lg hidden-md clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-left hidden-xs hidden-sm">
                <div className="search-box">
                  <div className="header_search search_form">
                    <div className="input-group search-bar search_form">		
                      <input type="search" name="query" defaultValue placeholder="Tìm kiếm..." className="change_pl input-group-field st-default-search-input search-text" value={valueSearch} onChange={onChangeValueSearch} onKeyDown={onKeyDownSearch} />
                      <span className="input-group-btn">
                        <button className="btn icon-fallback-text" onClick={onClickSearch}>
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 192.904 192.904" style={{enableBackground: 'new 0 0 192.904 192.904'}} xmlSpace="preserve">
                            <path d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0  C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078  c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193  C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187  C44.693,147.38,15,117.689,15,81.193z" />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-xs-12 col-sm-12 logo">
                <a href="/" title="Logo">
                  <img src={getStrapiMedia(logo[0])} alt="logo do bao ho" />
                </a>
              </div>
              <div className="hidden-lg hidden-md col-sm-12 col-xs-12 search-box">
                <div className="menu-bar button-menu hidden-md hidden-lg f-left">
                  <a onClick={() => setMenubar(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 384 384" style={{enableBackground: 'new 0 0 384 384'}} xmlSpace="preserve">
                      <g>
                        <g>
                          <g>
                            <rect x={0} y="277.333" width={384} height="42.667" />
                            <rect x={0} y="170.667" width={384} height="42.667" />
                            <rect x={0} y={64} width={384} height="42.667" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="header_search search_form">
                  <form className="input-group search-bar search_form" >		
                    <input type="search" name="query" placeholder="Tìm kiếm..." className="change_pl input-group-field st-default-search-input search-text" value={valueSearch} onChange={onChangeValueSearch} onKeyDown={onKeyDownSearch} />
                    <span className="input-group-btn">
                      <button className="btn icon-fallback-text" onClick={onClickSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 192.904 192.904" style={{enableBackground: 'new 0 0 192.904 192.904'}} xmlSpace="preserve">
                          <path d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0  C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078  c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193  C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187  C44.693,147.38,15,117.689,15,81.193z" />
                        </svg>
                      </button>
                    </span>
                  </form>
                </div>
                <div className="top-cart-contain hidden-lg hidden-md">
                  <div className="mini-cart text-xs-center">
                    <div className="heading-cart">
                      <a title="Giỏ hàng" onClick={() => setCart(true)}>
                        <svg viewBox="0 0 19 23"> <path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" fill="#222" /> </svg>
                        <span className="cartCount count_item_pr" id="cart-total">{listCart.length}</span>
                      </a>
                    </div>	
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
