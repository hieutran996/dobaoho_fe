import Link from "next/link"
import ImageLazy from 'next/image'
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media";
import Layout from "../../components/layout"
import Seo from "../../components/seo";
//animation
import Flip from 'react-reveal/Flip'

const Price = ({ list_store }) => {
  const seo = {
    metaTitle: 'Bảng giá HT Web - Chuyên thiết kế website',
    metaDescription: 'Bảng giá HT Web - Chuyên thiết kế website',
    checkSeo: true,
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <div className="price-sapoweb index-container mb-5">
        <div className="banner text-center ">
          <div className="container">
            <h1>Bảng báo giá thiết kế website trọn gói</h1>
            <p>Sở hữu một website chuẩn SEO với đầy đủ tính năng bán hàng online</p>
          </div>
        </div>
        <div className="packages not-border text-center ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-12">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="item">
                      <i className="icon sapo-web-omni" />
                      <h2>Gói Clone</h2>
                      <p>Chúng tôi nhận Clone tất cả các Website và Landing Page theo yêu cầu của quý khách hàng</p>
                      <div className="price d-flex flex-wrap justify-content-center align-items-center">
                        <div>
                          <p className="price-regular">1.500.000<sup>đ+</sup></p>
                        </div>
                      </div>
                      <div className="action">
                        <Link href="/contact">
                          <a className="btn-registration">
                            Liên hệ
                          </a>                      
                        </Link>
                      </div>
                      <div className="incontent">
                        <h4>Dịch vụ Clone Web</h4>
                        <ul>
                          <li>Seo cơ bản</li>
                          <li>Giao diện responsive</li>
                          <li>Hỗ trợ 24/7</li>
                          <li className="no-icon" />
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="item web">
                      <div className="top-item">
                        <p>gói cơ bản</p>
                        <span>Giảm 10% khi thanh toán trước 50%</span>
                      </div>
                      <i className="icon sapo-web-basic" />
                      <h2>Gói Cơ Bản</h2>
                      <p>Bán hàng Online với website</p>
                      <div className="price d-flex flex-wrap justify-content-center align-items-center">
                        <div className="w-100">
                          <p className="price-regular">3.000.000<sup>đ+</sup></p>
                        </div>
                      </div>
                      <div className="action">
                        <Link href="/contact">
                          <a className="btn-registration">
                            Liên hệ
                          </a>                      
                        </Link>                      
                      </div>
                      <div className="incontent">
                        <h4>Website bán hàng ưu việt</h4>
                        <ul>
                          <li>Tối ưu SEO</li>
                          <li>Giao diện responsive</li>
                          <li>Tích hợp chat Facebook Messenger</li>
                          <li>Tích hợp nút gọi trên điện thoại</li>
                          <li>Hỗ trợ 24/7</li>
                          <li className="no-icon" />
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="item">
                      <i className="icon sapo-web-pro" />
                      <h2>Gói Nâng Cao</h2>
                      <div className="price d-flex flex-wrap justify-content-center align-items-center">
                        <div>
                          <p className="price-regular">Liên hệ báo giá</p>
                        </div>
                      </div>
                      <div className="action">
                        <Link href="/contact">
                          <a className="btn-registration">
                            Liên hệ
                          </a>                      
                        </Link>
                      </div>
                      <div className="incontent">
                        <h4>Web hoàn thiện</h4>
                        <ul>
                          <li>Tối ưu SEO đa kênh</li>
                          <li>Giao diện Admin thân thiện</li>
                          <li>Giao diện Responsive</li>
                          <li>Tích hợp chat Facebook Messenger</li>
                          <li>Tích hợp nút gọi trên điện thoại</li>
                          <li>Phát triển tính năng theo yêu cầu</li>
                          <li>Các chức năng tìm kiếm thông minh</li>
                          <li>Cài đặt Google Analytic</li>
                          <li>Hỗ trợ 24/7</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center favorite-themes mb-5">
          <div className="container">
            <h2 className="text-center">Tham khảo các website đẹp của khách hàng chúng tôi</h2>
            <p>Hơn 67.000 khách hàng tin tưởng và thiết kế web bán hàng với HT Web</p>
            <div className="row justify-content-center mt-5">
              <div className="col-xl-10">
                  <Flip left cascade>
                    <div className="row">
                    {
                      list_store.themes.map((val,i) => {
                        if (i > 5) return 
                        return(
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={i}>
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
                    </div>
                  </Flip >
                  <Link href="/store/top-giao-dien">
                    <a rel="nofollow" className="btn-registration">
                      <Flip left cascade>
                        Xem thêm giao diện
                      </Flip>
                    </a>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const [list_store] = await Promise.all([
    fetchAPI(`/stores?slug=top-giao-dien`)
  ]);
  return {
    props: { list_store: list_store[0]  },
    revalidate: 1,
  };
}

export default Price;
