import Link from "next/link"
// import Image from 'next/image'
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media";
import Layout from "../../components/layout"
import Image from "../../components/image";
import Seo from "../../components/seo"
import ImageLazy from 'next/image'
//animation
import Zoom from 'react-reveal/Zoom';
import { Carousel } from 'antd';


const Store = ({ list_store }) => {
  const list_top = list_store.find(element => element.slug === 'top-giao-dien');
  const list_new = list_store.find(element => element.slug === 'giao-dien-moi');
  const seo = {
    metaTitle: "Kho giao diện web chuẩn SEO",
    metaDescription: "Tổng hợp những theme web chuẩn SEO và đẹp nhất với các ngành nghề khác nhau...",
    checkSeo: true,
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <div className="index-container">
        <div className="banner">
          <div className="index-title login-box">
            <div className="container">
              <h1>400+ template website <br className="d-block d-md-none" />bán hàng cực đẹp</h1>
              <p>Giao diện web được thiết kế chuyên nghiệp, chuẩn SEO &amp; phù hợp với mọi ngành nghề</p>
            </div>
          </div>
          <div className="feature-themes">
            <div className="container">
              <div className="slide-feature">
                <div className="swiper-container swiper-container-horizontal">
                  <div className="swiper-wrapper"><div className="swiper-slide feature-item swiper-slide-duplicate swiper-slide-duplicate-active" >
                      <Carousel effect="fade" autoplay autoplaySpeed={3000} dots={false}>
                        {
                          list_top.themes.map((val,i) => {
                            return(
                              <div key={i}>
                                <div className="row">
                                  <div className="col-lg-8 col-md-7 col-xs-12 feature-image">
                                    <div className="image-desktop">
                                      <Link as={`/demo/${val.slug}`} href="/demo/[slug]">
                                        <a  className="action-preview-theme" >
                                          <Image
                                            image={val.image}
                                            alt={val.name}
                                            layout='fill' 
                                          />
                                        </a>
                                      </Link>
                                    </div>
                                    <div className="image-mobile d-none d-md-block">
                                      <Link as={`/demo/${val.slug}`} href="/demo/[slug]">
                                        <a className="action-preview-theme">
                                          <Image
                                              image={val.image}
                                              alt={val.name}
                                              layout='fill' 
                                            />
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-5 col-12 feature-info">
                                    <div className="title mb-4">
                                      Giao diện website
                                      <span>{val.name}</span>
                                    </div>
                                    <div className="button">
                                      <Link as={`/demo/${val.slug}`} href="/demo/[slug]">
                                        <a className="preview action-preview-theme btn-registration">Xem thử</a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="favorite-themes">
          <div className="container">
            <h2>Top giao diện web</h2>
            <p className="desc">Những mẫu website được nhiều người dùng nhất</p>
              <Link href="/store/top-giao-dien">
                <a className="more-theme" title="Xem thêm">Xem thêm</a>
              </Link>
            <div className="row">
              {
                list_top.themes.map((val,i) => {
                  if (i > 7) return 
                  return(
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
                      <div className="theme-item responsive">
                        <div className="theme-image">
                          <ImageLazy
                            src={getStrapiMedia(val.image)}
                            alt={val.name}
                            layout='fill' 
                          />
                          <div className="theme-action">
                            <div className="button">
                              <Link as={`/demo/${val.slug}`} href="/demo/[slug]">
                                <a className="view-demo action-preview-theme btn-registration">
                                  Xem thử
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="theme-info">
                          <h3>
                            <Link as={`/demo/${val.slug}`} href="/demo/[slug]">
                              <a className="title">
                                {val.name}
                              </a>
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className="text-center more-button d-block d-md-none">
                <Link href="/store/top-giao-dien">
                  <a className="more-collection btn-registration">
                    Xem thêm
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="themes-list">
          <div className="container">
            <h2>Giao diện web mới</h2>
            <p className="desc">Khám phá những template website bán hàng mới nhất</p>
            <Link href="/store/giao-dien-moi">
              <a className="more-theme" title="Xem thêm">Xem thêm</a>
            </Link>
            <div className="row list-items">
              {
                list_new.themes.map((val,i) => {
                  if (i > 7) return 
                  return(
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
                      <div className="theme-item responsive">
                        <div className="theme-image">
                          <ImageLazy
                            src={getStrapiMedia(val.image)}
                            alt={val.name}
                            layout='fill'
                          />
                          <div className="theme-action">
                            <div className="button">
                              <Link as={`/demo/${val.slug}`} href="/demo/[id]">
                                <a className="view-demo action-preview-theme btn-registration">
                                  Xem thử
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="theme-info">
                          <h3>
                            <Link as={`/demo/${val.slug}`} href="/demo/[id]">
                              <a className="title">
                                {val.name}
                              </a>
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className="text-center more-button d-block d-md-none"> 
                <Link as={`/store/giao-dien-moi`} href="/store/[id]">
                  <a className="more-collection btn-registration">
                    Xem thêm
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="optimize text-center">
          <div className="container">
            <h2>Mẫu website theo <br className="d-block d-md-none" />ngành hàng</h2>
            <p className="otp-link">Khám phá những mẫu website đẹp, phù hợp với ngành hàng của bạn</p>
            <div className="list_category">
                <Zoom top cascade duration={900}>
                  <div className="row">
                    {
                      list_store.map((value,index) => {
                        if (value.type_store === "solution") {
                          return(
                            <div className="col-lg-2 col-md-4 col-6" key={index}>
                              <Link as={`/store/${value.slug}`} href="/store/[id]">
                                <a rel="nofollow">
                                  <ImageLazy
                                    src={getStrapiMedia(value.image_store)}
                                    alt={value.name}
                                    layout='fill'
                                    style={{
                                      borderRadius: "30%",
                                      height: 100,
                                      width: 100,
                                      marginBottom: 10
                                    }}
                                  />
                                  <span>{value.name}</span>
                                </a>
                              </Link>
                            </div>
                          ) 
                        }
                      })
                    }
                  </div>
                </Zoom>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const [list_store] = await Promise.all([
    fetchAPI(`/stores`)
  ]);
  return {
    props: { list_store  },
    revalidate: 1,
  };
}

export default Store;
