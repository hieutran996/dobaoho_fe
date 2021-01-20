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

const Home = ({ stores, homepage,themes }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div id="wrapper" className="clearfix">
        <div className="ld-sellatwebsite">
          <div className="banner">
            <div className="container mb-5">
              <div className="row">
                <div className="col-xl-5 col-12 block-content">
                  <Fade top cascade>
                    <div>
                      <h1>
                        Thiết kế website bán hàng{' '}
                        <br className="d-none d-md-block" />
                        chuyên nghiệp
                      </h1>
                      <p className="font-light">
                        Tăng doanh thu bán hàng online với trang web bán hàng
                        <br className="d-none d-md-block" />
                        được lập chuẩn SEO, bắt mắt
                      </p>
                      <Link href="/contact">
                        <a className="btn-registration">
                          <Flip left cascade>
                            Liên hệ sử dụng
                          </Flip>
                        </a>                      
                      </Link>
                    </div>
                  </Fade>
                </div>
                <div className="col-xl-7 d-none d-xl-block block-img">
                  <div className="ladi-group mt-5">
                    <Flip  top>
                      <div id="IMAGE22" className="ladi-element ladi-animation">
                        <div className="ladi-image">
                          <div className="ladi-image-background" />
                        </div>
                      </div>
                    </Flip >
                    <Fade top>
                      <div id="IMAGE25" className="ladi-element ladi-animation">
                        <div className="ladi-image">
                          <div className="ladi-image-background" />
                        </div>
                      </div>
                    </Fade>
                    <Fade top>
                      <div id="IMAGE26" className="ladi-element ladi-animation">
                        <div className="ladi-image">
                          <div className="ladi-image-background" />
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-down">
              <i className="ti-arrow-down" aria-hidden="true" />
            </div>
          </div>
          <div className="benefit text-left ">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12 block-left">
                  <Fade left cascade duration={700}>
                    <div>
                      <h2>
                        4 lợi ích không thể phủ nhận{' '}
                        <br className="d-none d-lg-block" />
                        với chủ shop &amp; doanh nghiệp
                      </h2>
                      <div className="imageLazyBenefit img-desktop d-none d-lg-block">
                        <ImageLazy
                          src='/images/loi-ich-cua-thiet-ke-web-ban-hang.png'
                          alt="Lợi ích của thiết kế website bán hàng"
                          layout='fill'
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="col-lg-6 col-12 block-right">
                  <Fade right cascade duration={700}>
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="d-none d-lg-block">
                          <ImageLazy
                            src='/images/benefit-icon-1.png'
                            alt="Tiếp cận 61% người mua hàng trên website"
                            layout='fixed'
                            width={70}
                            height={70}
                          />
                        </div>
                        <h3>
                          Tiếp cận 61% người mua{' '}
                          <br className="d-none d-lg-block" />
                          hàng trên website
                        </h3>
                        <p>
                          Mặc dù xu hướng mua hàng trên sàn TMĐT, mạng xã hội
                          ngày càng cao, nhất là Facebook, Shopee và Lazada,
                          nhưng khách hàng vẫn tin tưởng lựa chọn website là nơi
                          mua sắm uy tín
                        </p>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="d-none d-lg-block">
                          <ImageLazy
                            src='/images/benefit-icon-2.png'
                            alt="Tăng hiệu quả hoạt động quảng cáo"
                            layout='fixed'
                            width={70}
                            height={70}
                          />
                        </div>         
                        <h3>
                          Tăng hiệu quả hoạt động{' '}
                          <br className="d-none d-lg-block" />
                          quảng cáo
                        </h3>
                        <p>
                          Nhờ tính ổn định và bảo mật, mọi hoạt động quảng cáo
                          trực tuyến đều lấy website làm trung tâm. Thiết kế
                          website chuyên nghiệp sẽ làm tăng hiệu quả SEO và
                          chuyển đổi quảng cáo
                        </p>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="d-none d-lg-block">
                          <ImageLazy
                            src='/images/benefit-icon-3.png'
                            alt="Xây dựng được uy tín và thương hiệu"
                            layout='fixed'
                            width={70}
                            height={70}
                          />
                        </div>
                        <h3>
                          Xây dựng được uy tín và{' '}
                          <br className="d-none d-lg-block" />
                          thương hiệu
                        </h3>
                        <p>
                          Tạo website bán hàng với giao diện chuyên nghiệp và
                          đẹp mắt, hỗ trợ mua sắm online tiện lợi sẽ khiến cho
                          khách hàng yêu quý, tin tưởng hơn vào sản phẩm và
                          thương hiệu của bạn
                        </p>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="d-none d-lg-block">
                          <ImageLazy
                            src='/images/benefit-icon-4.png'
                            alt="Hỗ trợ Chăm sóc khách hàng 24/7"
                            layout='fixed'
                            width={70}
                            height={70}
                          />
                        </div>
                        <h3>
                          Hỗ trợ Chăm sóc khách hàng{' '}
                          <br className="d-none d-lg-block" />
                          24/7
                        </h3>
                        <p>
                          Khách hàng có thể xem và đặt hàng bất cứ lúc nào trong
                          ngày, và bạn có thể tư vấn cho khách hàng 24/7 ngay
                          trên website. Từ đó, doanh thu của bạn sẽ tăng lên
                          nhanh chóng
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
                <Fade left>
                  <div className="block-img" style={{width: '100%'}}>
                    <div className="d-block d-lg-none fade show">
                      <ImageLazy
                        src='/images/loi-ich-cua-thiet-ke-web-ban-hang.png'
                        alt="Lợi ích của thiết kế website bán hàng"
                        layout='responsive'
                        width=""
                        height=""
                      />
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="supported">
            <div className="container">
              <Fade left>
                <h2>HT Web giúp bạn thiết kế website chuyên nghiệp</h2>
              </Fade>
              <Fade right>
                <p>
                  Không cần biết thiết kế hay lập trình bạn vẫn có thể tạo{' '}
                  <br className="d-none d-lg-block" />
                  website bán hàng với nhiều tiện ích hiện đại
                </p>
              </Fade>

              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="item-line active">
                    <Fade left cascade duration={700}>
                      <div>
                        <h3>
                          400+ giao diện Responsive đẹp mắt
                        </h3>
                        <p>Giao diện web của HT Web được đầu tư thiết kế tỉ mỉ và đa dạng, sẵn
                          sàng đáp ứng nhu cầu làm trang web bán hàng cho hơn 30
                          ngành nghề khác nhau. Đặc biệt, tất cả giao diện này
                          đều được ứng dụng công nghệ Responsive nên có thể hiển
                          thị tối ưu trên mọi thiết bị. Dù cho khách hàng của
                          bạn online bằng thiết bị gì, máy tính, máy tính bảng
                          hay điện thoại di động thì website đều hiển thị đẹp
                          mắt
                        </p>
                      </div>
                    </Fade>
                  </div>
                  <Fade bottom cascade duration={700}>
                    <div>
                      <div className="item-line">
                        <h4 data-id=".data-2">
                          Bảo mật tuyệt đối website với chứng chỉ SSL{' '}
                        </h4>
                      </div>
                      <div className="item-line">
                        <h4 data-id=".data-4">
                          Tích hợp báo cáo Google Analytics trên quản trị
                          website{' '}
                        </h4>
                      </div>
                      <div>
                        
                        <Link href="/contact">
                          <a className="btn-registration">
                            Liên hệ sử dụng
                          </a>                      
                        </Link>
                      </div>
                    </div>
                  </Fade>
                </div>
                <Fade right>
                  <div className="col-lg-6 col-12 block-image d-none d-lg-block" style={{zIndex: 1}}>
                    <div className="active data-1">
                      <ImageLazy
                        src='/images/thiet-ke-website-chuyen-nghiep-1.png'
                        alt="Lập website bán hàng"
                        layout='fill'
                      />
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="scroll-down">
                <i className="ti-arrow-down" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="seo-ads text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12 block-img">
                  <Fade left cascade duration={700}>
                    <div>
                      <p>
                        Làm sao để có đến hàng trăm đơn hàng{' '}
                        <br className="d-none d-lg-block" />
                        mỗi ngày từ website?
                      </p>
                      <h2>
                        HT Web giúp tối ưu hiệu{' '}
                        <br className="d-none d-lg-block" />
                        quả SEO và quảng cáo
                      </h2>
                      <div className="d-none d-lg-block seo_lazyload"> 
                        <ImageLazy
                          src='/images/thiet-ke-web-chuan-seo.png'
                          alt="Thiết kế website chuẩn SEO"
                          layout='fixed'
                          width={584}
                          height={521}
                        />
                      </div>  
                    </div>
                  </Fade>
                </div>
                <div className="col-lg-6 col-12 block-content">
                  <Fade right cascade duration={700}>
                    <div>
                      <div className="line-item">
                        <h3>Hỗ trợ tối ưu cho SEO</h3>
                        <p>
                          Với dịch vụ thiết kế web chuyên nghiệp của HT Web,
                          không cần phải là một chuyên gia SEO bạn vẫn có thể
                          đưa website của mình lên top 1 Google. HT Web giúp bạn
                          thiết kế web chuẩn SEO với cấu trúc website đã được
                          tối ưu thân thiện với công cụ tìm kiếmwebsite đã được
                          tối ưu thân thiện với công cụ tìm kiếm. Ngoài ra, bạn
                          có thể tùy chỉnh thẻ tiêu đề (Title), mô tả (Meta
                          Description) và URL trong website, thêm thẻ alt của
                          hình ảnh
                        </p>
                      </div>
                      <div className="line-item">
                        <h4>Tăng hiệu quả quảng cáo</h4>
                        <p>
                          Bên cạnh việc hỗ trợ quảng bá web tự nhiên thông qua
                          SEO, tạo web bán hàng với HT Web còn mang đến cho bạn
                          một trang đích tuyệt vời nhằm phát huy tốt nhất hiệu
                          quả quảng cáo trả phí như Google Adwords hay Facebook
                          Ads. Phương pháp này giúp website ngay lập tức tiếp
                          cận đến khách hàng tiềm năng, đồng thời hỗ trợ để các
                          chiến dịch quảng bá tự nhiên hiệu quả hơn
                        </p>
                      </div>
                      <div className="line-item">
                        <h4>Hỗ trợ quảng cáo mua sắm Google Shopping</h4>
                        <p>
                          Quảng cáo Google Shopping đang ngày càng khẳng định vị
                          thế với tỉ lệ click vào quảng cáo cao hơn 35% hình
                          thức quảng cáo thông thường. Với HT web, bạn có thể
                          đồng bộ sản phẩm trên website với Google Merchant
                          Center một cách nhanh chóng, đồng thời xem toàn bộ báo
                          cáo ngay trên trang quản trị HT Web mà không cần đăng
                          nhập vào hệ thống báo cáo phức tạp của Google
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
                <Fade left>
                  <div className="block-img">
                    <div className="d-block d-lg-none fade show">
                      <ImageLazy
                        src='/images/thiet-ke-web-chuan-seo.png'
                        alt="Thiết kế website chuẩn SEO"
                        layout='responsive'
                        width=""
                        height=""
                      />
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="technology text-center">
            <div className="container">
              <Flip left cascade>
                <div>
                  <p>Với công nghệ vượt trội và tính năng khác biệt</p>
                  <h2>
                    Thiết kế website bán hàng HT Web{' '}
                    <br className="d-none d-lg-block" />
                    giúp bán hàng 24/7
                  </h2>
                </div>
              </Flip>

              <div className="row">
                <div className="col-lg-7 col-12 block-content">
                  <Fade left cascade duration={700}>
                    <div>
                      <div className="line-item">
                        <h3>Tích hợp phần mềm chatlive</h3>
                        <p>
                          Mọi thắc mắc của khách hàng sẽ được trả lời nhanh
                          chóng, không những giúp bạn ghi điểm trong mắt khách
                          hàng mà còn tăng khả năng chốt đơn hàng. Tạo website
                          bán hàng HT Web đã được tích hợp sẵn sàng với các phần
                          mềm live chat hàng đầu như Zopim, Subiz..., giúp chủ
                          cửa hàng chat với khách hàng ngay trên website bất cứ
                          khi nào
                        </p>
                      </div>
                      <div className="line-item">
                        <h4>Quy trình đặt hàng tự động</h4>
                        <p>
                          Khách hàng của bạn có thể tiến hành đặt hàng trên web
                          bất cứ khi nào. Bởi vậy, lập trang web bán hàng với
                          quy trình đặt hàng hoàn toàn tự động sẽ giúp họ sở hữu
                          món đồ ưa thích chỉ sau một vài thao tác đơn giản mà
                          không cần phải tốn thời gian gọi điện hay nhắn tin cho
                          chủ shop
                        </p>
                      </div>
                      <div className="line-item">
                        <h4>
                          Tăng tỉ lệ hoàn thành đơn hàng với Abandoned Checkout
                        </h4>
                        <p>
                          Với tính năng Abandoned Checkout, HT Web sẽ giúp bạn
                          thu thập thông tin khách hàng ngay cả khi họ chưa hoàn
                          tất đơn hàng. Từ những thông tin này bạn có thể gửi
                          email marketing, coupons khuyến mại ...để "thúc giục"
                          khách hàng hoàn tất đơn đặt hàng
                        </p>
                      </div>
                      <div>
                        <Link href="/contact">
                          <a className="btn-registration">
                            Liên hệ sử dụng
                          </a>                      
                        </Link>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="col-lg-5 col-12 block-img">
                  <Fade right>
                    <ImageLazy
                      src='/images/tao-website-ban-hang.png'
                      alt="Tạo website bán hàng"
                      layout='responsive'
                      width={543}
                      height={708}
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div className="optimize text-center">
            <div className="container">
              <div className="scroll-down">
                <i className="ti-arrow-down" aria-hidden="true" />
              </div>
              <Flip bottom cascade>
                <div>
                  <p className="otp-link">Bạn đang kinh doanh lĩnh vực nào?</p>
                  <h2>HT Web mang đến giải pháp dành riêng cho bạn</h2>
                </div>
              </Flip>

              <div className="list_category">
                <Zoom top cascade duration={900}>
                  <div className="row">
                    {
                      stores.map((value,index) => {
                        return(
                          <div className="col-lg-2" key={index}>
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
                      })
                    }
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
          <div className="top-refer-website sellatweb text-center">
            <div className="container form_example_theme">
              <LightSpeed left>
                <h2>Các mẫu website đẹp do HT web cung cấp</h2>
              </LightSpeed>
              <div className="slide-referwebsite">
                <div className="swiper-container swiper-container-horizontal">
                    <Flip left cascade>
                        <div className="row">
                          {
                            themes.themes.map((value,index) => {
                              return(
                                <div className="swiper-slide swiper-slide-active col-md-6 col-lg-4 col-12" key={index}>
                                  <div className="item">
                                    <div className="website-item">
                                      <div className="item-infomation">
                                        <div className="item-thumbnail">
                                          <Link as={`/demo/${value.slug}`} href="/demo/[id]">
                                            <a
                                              rel="nofollow"
                                              title={value.name}
                                            >
                                              <div className="item-img">
                                                <ImageLazy
                                                  src={getStrapiMedia(value.image)}
                                                  alt={value.name}
                                                  layout='responsive'
                                                  width={584}
                                                  height={650}
                                                />
                                              </div>
                                            </a>
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="website-name">
                                        <Link as={`/demo/${value.slug}`} href="/demo/[id]">
                                          <a rel="nofollow" title={value.name}>
                                            Xem thử
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                    </Flip>
                  
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
              </div>
              <Link href="/store/giao-dien-moi">
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
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [stores, homepage, themes] = await Promise.all([
    fetchAPI("/stores?type_store=solution"),
    fetchAPI("/homepage"),
    fetchAPI("/stores?_publicationState=preview&published_at_null=true&slug=giao-dien-moi-trang-chu"),
  ]);

  return {
    props: { stores , homepage, themes: themes[0] },
    revalidate: 1,
  };
}

export default Home;
