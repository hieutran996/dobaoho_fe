import { useEffect, useState } from "react"
import { Skeleton,Breadcrumb } from 'antd'
import Link from "next/link"
import { useRouter } from 'next/router'
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media"

const Search = () => {
  const router = useRouter()
  const [state, setState] = useState({
    crrProducts: [],
    loading: true
  })

  useEffect(() => {
    if (router.query.query === "") return
    setState({
      crrProducts: [],
      loading: true
    })
    async function fetchDataSearch() {
      let response = await fetchAPI(`/products?name_contains=${encodeURIComponent(router.query.query)}`)
      setState({
        crrProducts: response,
        loading: false
      })
    }
    fetchDataSearch()
  }, [router])

  const sortData = (value) => {
    let crrProducts = state.crrProducts
    switch (value) {
      case 'price-asc':
        crrProducts.sort((a, b) => parseInt(a.price.replace(',','')) - parseInt(b.price.replace(',','')));
        break;
      case 'price-desc':
        crrProducts.sort((a, b) => parseInt(b.price.replace(',','')) - parseInt(a.price.replace(',','')));
        break;
      case 'alpha-asc':
        crrProducts.sort((a, b) => {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
        break;
      case 'alpha-desc':
        crrProducts.sort((a, b) => {
          if(a.name > b.name) { return -1; }
          if(a.name < b.name) { return 1; }
          return 0;
        });
        break;
    }
    setState({
      ...state,
      crrProducts
    })
  }
  
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
                  Tìm kiếm
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>  
      <div className="container main-collection margin-bottom-20">
        <div className="row">
          <section className="main_container collection col-lg-9 col-md-9 col-sm-12 col-lg-push-3 col-md-push-3">
            <div className="category-products products">
              <div className="sortPagiBar clearfix hidden-xs">
                <div className="sort-cate-left">
                  <h3>Xếp theo:</h3>
                  <ul>
                    <li className="btn-quick-sort alpha-asc">
                      <a onClick={() => sortData('alpha-asc')}  title="Tên A-Z"><i />Tên A-Z</a>
                    </li>
                    <li className="btn-quick-sort alpha-desc">
                      <a onClick={() => sortData('alpha-desc')}  title="Tên Z-A"><i />Tên Z-A</a>
                    </li>
                    <li className="btn-quick-sort price-asc">
                      <a onClick={() => sortData('price-asc')}  title="Giá thấp đến cao"><i />Giá thấp đến cao</a>
                    </li>
                    <li className="btn-quick-sort price-desc">
                      <a onClick={() => sortData('price-desc')}  title="Giá cao xuống thấp"><i />Giá cao xuống thấp</a>
                    </li>
                  </ul>
                </div>
              </div>
              <section className="products-view-grid collection_reponsive">
                {
                  router.query.query === ""
                  ?
                    <div className="page-title">
                      <h1>Vui lòng nhập từ khóa để tìm kiếm sản phẩm</h1>
                    </div>
                  :
                  <>
                    <div className="page-title">
                      <h1>{state.loading ? 'Đang tìm kiếm kết quả...' : `Có ${state.crrProducts.length} kết quả tìm kiếm phù hợp`}</h1>
                    </div>
                    <div className="row">
                      {
                        state.crrProducts.map((value,index) => {
                          return(
                            <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 product-col" key={index}>
                              <div className="item_product_main ">
                                <div className="col-item">
                                  <div className="product-thumb">
                                    <Link href={`/detail/${value.slug}`}>
                                      <a className="thumb" title={value.name}>
                                        <img className="lazyload loaded" src={getStrapiMedia(value.image[0])} alt={value.name} />
                                      </a>
                                    </Link>
                                    
                                    <div className="actions hidden-xs hidden-sm">
                                      <button className="button btn-cart add_to_cart" title="Thêm vào giỏ hàng">
                                        Thêm vào giỏ hàng
                                      </button>        
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="title">
                                      <Link href={`/detail/${value.slug}`}>
                                        <a title={value.name}>
                                          {value.name}
                                        </a>
                                      </Link>
                                    </h3>
                                    <div className="content">
                                      <div className="item-price">    
                                        <div className="price-box"> 
                                          <span className="special-price"> 
                                            {value.price}₫
                                          </span> 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="thumbs-list">
                                    {
                                      value.image.map((val,i) => {
                                        return(
                                          <div className="thumbs-list-item" key={i}>
                                            <img className="lazyload loaded" src={getStrapiMedia(val)} alt={value.name} />
                                          </div>
                                        )
                                      })
                                    }
                                    
                                  </div>
                                </div>	
                              </div>
                            </div>	
                          )
                        })
                      }			
                    </div>
                    {
                      state.loading 
                      &&
                      <div className="row list-items favorite-themes">
                        {
                          [1,2,3,4].map((value) => {
                            return(
                              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 product-col" key={value}>
                                <div className="item_product_main ">
                                  <div className="col-item">
                                    <div className="product-thumb">
                                      <Skeleton.Avatar active shape='square'/>
                                    </div>
                                    <div className="product-info">
                                      <Skeleton active paragraph={{ rows: 1, width: '100%' }} />
                                    </div>
                                  </div>	
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    }
                  </>
                }
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
                              <input type="checkbox" id="filter-duoi-100-000d" />
                              <i className="fa" />
                              Giá dưới 100.000đ
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-100-000d-200-000d">
                              <input type="checkbox" id="filter-100-000d-200-000d" />
                              <i className="fa" />
                              100.000đ - 200.000đ							
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-200-000d-500-000d">
                              <input type="checkbox" id="filter-200-000d-500-000d" />
                              <i className="fa" />
                              200.000đ - 500.000đ							
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-500-000d-1000000d">
                              <input type="checkbox" id="filter-500-000d-1000000d" />
                              <i className="fa" />
                              500.000đ - 1.000.000đ							
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-1000000d-2000000d">
                              <input type="checkbox" id="filter-1000000d-2000000d" />
                              <i className="fa" />
                              1.000.000đ - 2.000.000đ							
                            </label>
                          </span>
                        </li>	
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-tren2000000d">
                              <input type="checkbox" id="filter-tren2000000d" />
                              <i className="fa" />
                              Giá trên 2.000.000đ
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
      </div>
    </div>
  );
};

export default Search;
