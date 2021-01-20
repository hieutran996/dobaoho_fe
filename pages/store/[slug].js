import { useEffect, useState } from "react"
import Link from "next/link"
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
//image
import ImageLazy from 'next/image'
//ant
import { Spin,Skeleton,Breadcrumb } from 'antd'
import MenuToolBar from '../../common/layout/MenuToolBar'

const limit = 8

const Theme = ({ props_themes,seoPage,list_store }) => {
  if (props_themes.length === 0) {
    return (
      <Layout footer={false}>
        <div className="page-container">
          <div className="themes-list">
            <div className="index-title login-box">
              <div className="container">
                <h1>Hiện tại chưa có website nào...</h1>
                <p className="desc">Vui lòng quay lại sau</p>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link href="/">Trang chủ</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link href="/store">
                      <a>Kho giao diện</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {seoPage !== null && seoPage.name}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
            <MenuToolBar list_store={list_store} />
          </div>
        </div>
      </Layout>
    )
  }

  const [state, setState] = useState({
    crrThemes: [],
    activePage: 1,
    loading: true
  })

  const seo = {
    metaTitle: seoPage !== null && seoPage.name,
    metaDescription: seoPage !== null && seoPage.slug,
    shareImage: seoPage !== null && seoPage.image_store,
    checkSeo: true,
  };

  useEffect(() => {
    setState({
      loading: true,
      crrThemes: [],
      activePage: 1
    })
    setTimeout(() => {
      PaginationPage(1)
    }, 600);
  }, [props_themes])
  
  const PaginationPage = (activePageIndex) => {
    const offset = (activePageIndex - 1) * limit;
    const crrValueThemes = props_themes.slice(0, offset + limit);
    setState({
      loading: false,
      crrThemes: crrValueThemes,
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
        props_themes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-desc':
        props_themes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'alpha-asc':
        props_themes.sort((a, b) => {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
        break;
      case 'alpha-desc':
        props_themes.sort((a, b) => {
          if(a.name > b.name) { return -1; }
          if(a.name < b.name) { return 1; }
          return 0;
        });
        break;
    }
  
    setState({
      loading: true,
      crrThemes: [],
      activePage: 1
    })
    setTimeout(() => {
      PaginationPage(1)
    }, 600);
  }
  

  return (
    <Layout footer={(props_themes.length < 5) ? false : true}>
      {
        seoPage !== null
        &&
        <Seo seo={seo} />
      }
      <div className="page-container">
        <div className="themes-list">
          <div className="index-title login-box">
            <div className="container">
              <h1>{seoPage !== null ? `Danh sách ${seoPage.name}` : 'Danh sách tất cả giao diện'}</h1>
              <p className="desc">Khám phá những template mới nhất</p>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/">Trang chủ</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link href="/store">
                    <a>Kho giao diện</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  {seoPage !== null && seoPage.name}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <MenuToolBar list_store={list_store} sortData={sortData}/>
          <div className="container index-container mt-5">
            <div className="row list-items favorite-themes">
              {
                state.crrThemes.map((value,index) => {
                  return(
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
                      <div className="theme-item responsive">
                        <div className="theme-image">
                          <ImageLazy
                            src={getStrapiMedia(value.image)}
                            alt={value.name}
                            layout='fill' 
                          />
                          <div className="theme-action">
                            <div className="button">
                              <Link as={`/demo/${value.slug}`} href="/demo/[slug]">
                                <a className="view-demo btn-registration">
                                  Xem thử
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="theme-info">
                          <h3>
                            <Link as={`/demo/${value.slug}`} href="/demo/[slug]">
                              <a className="title">
                                {value.name}
                              </a>
                            </Link>
                          </h3>
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
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={value}>
                        <div className="theme-item responsive">
                          <div className="theme-image">
                            <Skeleton.Avatar active shape='square'/>
                          </div>
                          <div className="theme-info">
                            <Skeleton active paragraph={{ rows: 1, width: '100%' }} />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            }
            {
              state.crrThemes.length < props_themes.length
              &&
              <div className="text-center button_see_more">
                <Spin tip="Loading..." size="large" spinning={state.loading}></Spin>
                <button className={"view-more-theme btn-registration" + (state.loading ? ' d-none' : '')} onClick={getMoreTheme}>Xem thêm giao diện</button>
              </div>
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const stores = await fetchAPI("/stores");
  stores.push({
    "slug":"tat-ca"
  })
  return {
    paths: stores.map((store) => ({
      params: {
        slug: store.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const list_store = await fetchAPI(`/stores`);
  const stores_theme = await (params.slug !== 'tat-ca' ? fetchAPI(`/stores?slug=${params.slug}`) : fetchAPI(`/themes`));
  var listThemes = []
  var seoPage = null
  if (params.slug === 'tat-ca') {
    listThemes = stores_theme
  } else {
    listThemes = stores_theme[0].themes
    seoPage = stores_theme[0]
  }
  return {
    props: { props_themes: listThemes, seoPage ,list_store},
    revalidate: 1,
  };
}

export default Theme;
