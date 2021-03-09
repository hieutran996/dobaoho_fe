import { useEffect, useState } from "react"
import { Spin,Skeleton,Breadcrumb,Radio } from 'antd'
import Link from "next/link"
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media"
import Seo from "../../components/seo"

const limit = 8

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
  marginBottom: '5px',
  fontWeight: 'normal'
};

const Products = ({brand,product}) => {
  const [state, setState] = useState({
    crrProducts: [],
    activePage: 1,
    loading: true,
    valueSortPrice: 1,
  })

  const seo = {
    metaTitle: brand.name,
    metaDescription: brand.slug,
    checkSeo: true,
  };

  useEffect(() => {
    setState({
      loading: true,
      crrProducts: [],
      activePage: 1
    })
    setTimeout(() => {
      PaginationPage(1)
    }, 600);
  }, [product])
  
  const PaginationPage = (activePageIndex) => {
    const offset = (activePageIndex - 1) * limit;
    const crrValue = product.slice(0, offset + limit);
    setState({
      loading: false,
      crrProducts: crrValue,
      activePage: activePageIndex
    })
  };

  const getMoreTheme = () => {
    setState({
      ...state,
      loading: true
    })
    setTimeout(() => {
      PaginationPage(state.activePage + 1)
    }, 600);
  }

  const sortData = (value) => {    
    switch (value) {
      case 'price-asc':
        product.sort((a, b) => parseInt(a.price.replace(',','')) - parseInt(b.price.replace(',','')));
        break;
      case 'price-desc':
        product.sort((a, b) => parseInt(b.price.replace(',','')) - parseInt(a.price.replace(',','')));
        break;
      case 'alpha-asc':
        product.sort((a, b) => {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
        break;
      case 'alpha-desc':
        product.sort((a, b) => {
          if(a.name > b.name) { return -1; }
          if(a.name < b.name) { return 1; }
          return 0;
        });
        break;
    }
  
    setState({
      ...state,
      loading: true,
      crrProducts: [],
      activePage: 1
    })
    setTimeout(() => {
      PaginationPage(1)
    }, 600);
  }

  const onChangeSortPrice = e => {
    setState({
      ...state,
      valueSortPrice: e.target.value,
    })
  };

  return (
    <div id="product">
      <Seo seo={seo} />
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
                  <Link href="/product">Sản phẩm</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  {brand.name}
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
              {
                state.crrProducts.length < product.length
                &&
                <div className="text-center button_see_more mt-5">
                  <Spin tip="Loading..." size="large" spinning={state.loading}></Spin>
                  <button type="button" className={`btn btn-primary text-weight-bold ${state.loading && 'd-none'}`} onClick={getMoreTheme}>Xem thêm giao diện</button>
                </div>
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
                      <Radio.Group onChange={onChangeSortPrice} value={state.valueSortPrice}>
                        <Radio style={radioStyle} value={1}>
                          Giá dưới 100.000đ
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                          100.000đ - 500.000đ
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                          500.000đ - 1.000.000đ
                        </Radio>
                        <Radio style={radioStyle} value={4}>
                          1.000.000đ - 2.000.000đ
                        </Radio>
                        <Radio style={radioStyle} value={5}>
                          Giá trên 2.000.000đ
                        </Radio>
                      </Radio.Group>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="open-filters" className="open-filters hidden-lg hidden-md">
          <span className="fter">
          </span>
        </div> */}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const brands = await fetchAPI("/brands");
  return {
    paths: brands.map((brand) => ({
      params: {
        slug: brand.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const brand = await fetchAPI(`/brands?slug=${params.slug}`);
  return {
    props: { brand: brand[0], product: brand[0].products  },
    revalidate: 1,
  };
}


export default Products;
