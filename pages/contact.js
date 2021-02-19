import { Breadcrumb } from 'antd'
import Link from "next/link"
import Layout from "../components/layout";

const Contact = () => {
  return (
        <Layout>
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
                            Liên hệ
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                </div>
                </div>
            </section>  
            <section className="margin-bottom-20">
                <div className="wrap_">
                <div className="section_maps">
                    <div className="container">
                    <div className="template-contact clearfix">
                        <div className="contact ">
                        <div className="row mb-5">
                            <form acceptCharset="utf-8" action="/contact" id="contact" method="post">
                            <input name="FormType" type="hidden" defaultValue="contact" />
                            <input name="utf8" type="hidden" defaultValue="true" /><input type="hidden" id="Token-2798a35f0fa14984af9191dcfa09c8ae" name="Token" defaultValue="03AGdBq24Brt1_rSET_02reTsUOAUEcVTB_yXX6NDEdUZFHfJUaeQSAT8ODWdtWqmIdSDuxixz_85fQYS2ljqiIr1GyEm9N-7WByK3Yd4HgkTkIxilwu05vMZcoWq9p83A2ym3pGz_lROJOSqtlnAZV1ceBj-i6J7YNM0AJPR6sfzf8jQPo9mcfuI01iEiNLqzpCPLnmB3wk0GHCmWwJ7vWOh-Zun90t6EjjGiJgFf-uGwC_qv1q5TSp9PyHPRRsfV8617npW9hR5tERpdWFEYU6L11sH5H_XEhkqCKOwHyH9wOcv3rWLRVWvoirs5p84C80kf_z_Ko6h2XFY_P2GgLpWBdnGSsvE9bNjAneHqeMMCldF1aBxzMpnINHEEIdO3OdgCX4g4bIWJ1JTAno6qFj4ExnkCj-zkerD5iJQDUE-nW9GrHMWZi_E53x-hDSiIuTOEz3SWGDjX0yCt4WZZLx0qIGNoC3-o3g" />
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="t_contact">
                                <h1>Đồ bảo hộ Hiếu Trần</h1>
                                <ul className="margin-bottom-15">
                                    <li>
                                    <span className="title_li">
                                        <b>Địa chỉ:</b> 244 Dương Đình Hội, Quận 9, Thành phố Hồ Chí Minh
                                    </span>
                                    </li>
                                    <li>
                                    <span className="title_li">
                                        <b>Điện thoại:</b> <a href="tel:0397181095" title="Điện thoại">0397181095</a>
                                    </span>
                                    </li>
                                    <li>
                                    <span className="title_li">
                                        <b>Email:</b> <a href="mailto:hieudev96@gmail.com" title="Email">hieudev96@gmail.com</a>
                                    </span>
                                    </li>
                                </ul>
                                </div>
                                <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h2>Liên hệ với chúng tôi</h2>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" placeholder="Họ và tên" className="input-control" required  name="name" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required id="email2" className="input-control"  name="email" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea name="content" placeholder="Nội dung" required className="input-control" cols={5} rows={4} />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top-15">
                                    <button type="submit" className="button_custome_35">Gửi liên hệ của bạn</button> 
                                </div>
                                </div>
                            </div>
                            </form>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="google-map margin-bottom-30">
                                <div className="maps_iframe">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7860361838357!2d106.77987401513148!3d10.827679692286742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526fd517f0ecd%3A0xabb6cc3c8456331b!2zMjQ0IETGsMahbmcgxJDDrG5oIEjhu5lpLCBUxINuZyBOaMahbiBQaMO6IEIsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1613721694443!5m2!1sen!2s" height={400} style={{border: 0}} className="col-xs-12 p-0" allowFullScreen aria-hidden="false" tabIndex={0} />
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
        </Layout>
    );
};

export default Contact;
