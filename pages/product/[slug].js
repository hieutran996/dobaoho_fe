import { useEffect, useState } from "react"
import { Spin,Skeleton,Breadcrumb } from 'antd'
import Link from "next/link"

const limit = 8

const Theme = () => {

  const [state, setState] = useState({
    crrThemes: [],
    activePage: 1,
    loading: true
  })

  // const seo = {
  //   metaTitle: seoPage !== null && seoPage.name,
  //   metaDescription: seoPage !== null && seoPage.slug,
  //   shareImage: seoPage !== null && seoPage.image_store,
  //   checkSeo: true,
  // };

  // useEffect(() => {
  //   setState({
  //     loading: true,
  //     crrThemes: [],
  //     activePage: 1
  //   })
  //   setTimeout(() => {
  //     PaginationPage(1)
  //   }, 600);
  // }, [props_themes])
  
  // const PaginationPage = (activePageIndex) => {
  //   const offset = (activePageIndex - 1) * limit;
  //   const crrValueThemes = props_themes.slice(0, offset + limit);
  //   setState({
  //     loading: false,
  //     crrThemes: crrValueThemes,
  //     activePage: activePageIndex
  //   })
  // };

  const getMoreTheme = () => {
    setState({
      ...state,
      loading: true
    })
    setTimeout(() => {
      PaginationPage(state.activePage + 1)
    }, 600);
  }

  // const sortData = (value) => {    
  //   switch (value) {
  //     case 'price-asc':
  //       props_themes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  //       break;
  //     case 'price-desc':
  //       props_themes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  //       break;
  //     case 'alpha-asc':
  //       props_themes.sort((a, b) => {
  //         if(a.name < b.name) { return -1; }
  //         if(a.name > b.name) { return 1; }
  //         return 0;
  //       });
  //       break;
  //     case 'alpha-desc':
  //       props_themes.sort((a, b) => {
  //         if(a.name > b.name) { return -1; }
  //         if(a.name < b.name) { return 1; }
  //         return 0;
  //       });
  //       break;
  //   }
  
  //   setState({
  //     loading: true,
  //     crrThemes: [],
  //     activePage: 1
  //   })
  //   setTimeout(() => {
  //     PaginationPage(1)
  //   }, 600);
  // }
  

  return (
    <div id="product">
      <section className="bread-crumb">
        <span className="crumb-border" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 a-left">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/">Trang chủ</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link href="/store">
                    <a>Sản phẩm</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  {/* {seoPage !== null && seoPage.name} */}
                  Máy nén khí
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>  
      <div className="container main-collection margin-bottom-20">
        <div className="row">
          <section className="main_container collection col-lg-9 col-md-9 col-sm-12 col-lg-push-3 col-md-push-3">
            <div className="page-title margin-bottom-xs-20 hidden">
              <h1>Dụng cụ điện</h1>
            </div>
            <div className="category-products products">
              <div className="sortPagiBar clearfix hidden-xs">
                <div className="sort-cate-left">
                  <h3>Xếp theo:</h3>
                  <ul>
                    <li className="btn-quick-sort default">
                      <a href="javascript:;" onclick="sortby('default')" title="Mặc định"><i />Mặc định</a>
                    </li>
                    <li className="btn-quick-sort alpha-asc">
                      <a href="javascript:;" onclick="sortby('alpha-asc')" title="Tên A-Z"><i />Tên A-Z</a>
                    </li>
                    <li className="btn-quick-sort alpha-desc">
                      <a href="javascript:;" onclick="sortby('alpha-desc')" title="Tên Z-A"><i />Tên Z-A</a>
                    </li>
                    <li className="btn-quick-sort position-desc">
                      <a href="javascript:;" onclick="sortby('created-desc')" title="Hàng mới"><i />Hàng mới</a>
                    </li>
                    <li className="btn-quick-sort price-asc">
                      <a href="javascript:;" onclick="sortby('price-asc')" title="Giá thấp đến cao"><i />Giá thấp đến cao</a>
                    </li>
                    <li className="btn-quick-sort price-desc">
                      <a href="javascript:;" onclick="sortby('price-desc')" title="Giá cao xuống thấp"><i />Giá cao xuống thấp</a>
                    </li>
                  </ul>
                </div>
              </div>
              <section className="products-view-grid collection_reponsive">
                <div className="row">		
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 product-col">
                    <div className="item_product_main ">
                      <div className="col-item">
                        <div className="product-thumb">
                          <a href="/than-may-khoan-dong-luc-dung-pin-18v-dewalt-dcd996n-kr-khong-choi-than" className="thumb" title="Thân máy khoan động lực dùng pin 18V Dewalt DCD996N-KR (không chổi than)">
                            <img className="lazyload loaded" src="images/sp7_1.png" data-src="https://bizweb.dktcdn.net/100/408/894/products/sp7.png?v=1603967585000" alt="Thân máy khoan động lực dùng pin 18V Dewalt DCD996N-KR (không chổi than)" data-was-processed="true" />
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
                            <img className="lazyload loaded" src="images/sp7.png" data-src="//bizweb.dktcdn.net/thumb/small/100/408/894/products/sp7.png?v=1603967585000" data-img="//bizweb.dktcdn.net/thumb/large/100/408/894/products/sp7.png?v=1603967585000" alt="Thân máy khoan động lực dùng pin 18V Dewalt DCD996N-KR (không chổi than)" data-was-processed="true" />
                          </div>
                        </div>
                      </div>	
                    </div>
                  </div>		
                </div>
              </section>
            </div>
          </section>
          <div className="dqdt-sidebar sidebar left-content col-xs-12 col-lg-3 col-md-3 col-sm-12 col-lg-pull-9 col-md-pull-9 margin-top-10">
            <div className="aside-filter clearfix">
              <div className="aside-title">
                <h2 className="title-head margin-top-0"><span>Bộ lọc sản phẩm</span></h2>
              </div>
              <div className="filter-container">	
                <div className="content-item">
                  <aside className="aside-item filter-price clearfix">
                    <div className="module-title">
                      <h2 className="title-head margin-top-0"><span>Lọc giá</span></h2>
                    </div>
                    <div className="aside-content filter-group">
                      <ul>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-duoi-100-000d">
                              <input type="checkbox" id="filter-duoi-100-000d"  data-group="Khoảng giá" data-field="price_min" data-text="Dưới 100.000đ" defaultValue="(<100000)" data-operator="OR" />
                              <i className="fa" />
                              Giá dưới 100.000đ
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-100-000d-200-000d">
                              <input type="checkbox" id="filter-100-000d-200-000d"  data-group="Khoảng giá" data-field="price_min" data-text="100.000đ - 200.000đ" defaultValue="(>=100000 AND <=200000)" data-operator="OR" />
                              <i className="fa" />
                              100.000đ - 200.000đ							
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-200-000d-500-000d">
                              <input type="checkbox" id="filter-200-000d-500-000d" onchange="toggleFilter(this)" data-group="Khoảng giá" data-field="price_min" data-text="200.000đ - 500.000đ" defaultValue="(>=200000 AND <=500000)" data-operator="OR" />
                              <i className="fa" />
                              200.000đ - 500.000đ							
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-500-000d-1000000d">
                              <input type="checkbox" id="filter-500-000d-1000000d" onchange="toggleFilter(this)" data-group="Khoảng giá" data-field="price_min" data-text="500.000đ - 1000000đ" defaultValue="(>=500000 AND <=1000000)" data-operator="OR" />
                              <i className="fa" />
                              500.000đ - 1000000đ							
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-1000000d-2000000d">
                              <input type="checkbox" id="filter-1000000d-2000000d" onchange="toggleFilter(this)" data-group="Khoảng giá" data-field="price_min" data-text="1000000đ - 2000000đ" defaultValue="(>1000000 AND <2000000)" data-operator="OR" />
                              <i className="fa" />
                              1000000đ - 2000000đ							
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-tren2000000d">
                              <input type="checkbox" id="filter-tren2000000d" onchange="toggleFilter(this)" data-group="Khoảng giá" data-field="price_min" data-text="Trên 2000000đ" defaultValue="(>2000000)" data-operator="OR" />
                              <i className="fa" />
                              Giá trên 2000000đ
                            </label>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </aside>
                  <aside className="aside-item filter-tag-style-1 clearfix">
                    <div className="module-title">
                      <h2 className="title-head margin-top-0"><span>Màu sắc</span></h2>
                    </div>
                    <div className="aside-content filter-group clearfix">
                      <ul style={{overflow: 'visible'}}>
                        <li className="filter-item color filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-den">
                              <input type="checkbox" id="filter-den" onchange="toggleFilter(this)" data-group="tag1" data-field="tags" data-text="Đen" defaultValue="(Đen)" data-operator="OR" />
                              <i className="fa den" style={{backgroundColor: '#000'}} />
                              Đen
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item color filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-do">
                              <input type="checkbox" id="filter-do" onchange="toggleFilter(this)" data-group="tag1" data-field="tags" data-text="Đỏ" defaultValue="(Đỏ)" data-operator="OR" />
                              <i className="fa do" style={{backgroundColor: '#FF0000'}} />
                              Đỏ
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item color filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-trang">
                              <input type="checkbox" id="filter-trang" onchange="toggleFilter(this)" data-group="tag1" data-field="tags" data-text="Trắng" defaultValue="(Trắng)" data-operator="OR" />
                              <i className="fa trang" style={{backgroundColor: '#fff', border: '1px solid #ebebeb'}} />
                              Trắng
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item color filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-da-cam">
                              <input type="checkbox" id="filter-da-cam" onchange="toggleFilter(this)" data-group="tag1" data-field="tags" data-text="Da Cam" defaultValue="(Da Cam)" data-operator="OR" />
                              <i className="fa da-cam" style={{backgroundColor: '#FF4000'}} />
                              Da Cam
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item color filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-hong">
                              <input type="checkbox" id="filter-hong" onchange="toggleFilter(this)" data-group="tag1" data-field="tags" data-text="Hồng" defaultValue="(Hồng)" data-operator="OR" />
                              <i className="fa hong" style={{backgroundColor: '#FA58AC'}} />
                              Hồng
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item color filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-vang">
                              <input type="checkbox" id="filter-vang" onchange="toggleFilter(this)" data-group="tag1" data-field="tags" data-text="Vàng" defaultValue="(Vàng)" data-operator="OR" />
                              <i className="fa vang" style={{backgroundColor: '#F4FA58'}} />
                              Vàng
                            </label>
                          </span>
                        </li>	
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="open-filters" className="open-filters hidden-lg hidden-md">
          <span className="fter">
          </span>
        </div>
      </div>
    </div>
  );
};


export default Theme;
