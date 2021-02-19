import React,{ useContext } from 'react'
import { GlobalContext } from "../../pages/_app";
import { getStrapiMedia } from "../../lib/media";

export default function Footer() {
  const { logo } = useContext(GlobalContext);

  return (
    <footer className="footer clearfix lazyload" data-was-processed="true">
        <div className="middle-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3  footer-click ">
                <a href="/" title="ND Tool">
                  <img src={getStrapiMedia(logo[1])} alt="logo do bao ho" />
                </a>
                <div className="des_footer">
                  Hiếu Trần chuyên cung cấp mũ bảo hiểm fullface, mũ Yohe, mũ LS2, mũ 3/4. Ngoài ra còn có phụ kiện găng tay, đồ bảo hộ biker chuyên nghiệp. Với sự am hiểu sâu sắc tư vấn sản phẩm phù hợp cho khách hàng.
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 footer-click">
                <h4 className="cliked">Hướng dẫn</h4>
                <ul className="toggle-mn">
                  <li><a className="ef" href="/huong-dan-mua-hang" title="Hướng dẫn mua hàng">Hướng dẫn mua hàng</a></li>
                  <li><a className="ef" href="/huong-dan-thanh-toan" title="Hướng dẫn thanh toán">Hướng dẫn thanh toán</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 footer-click">
                <h4 className="cliked">Chính sách</h4>
                <ul className="toggle-mn">
                  <li><a className="ef" href="/thanh-toan" title="Thanh toán">Thanh toán</a></li>
                  <li><a className="ef" href="/chinh-sach-doi-tra" title="Chính sách đổi trả">Chính sách đổi trả</a></li>
                  <li><a className="ef" href="/giao-hang" title="Giao hàng">Giao hàng</a></li>
                  <li><a className="ef" href="/quy-che-hoat-dong" title="Quy chế hoạt động">Quy chế hoạt động</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 footer-click">
                <div className="foo-contact">
                  <h4>Liên hệ</h4>
                  <ul>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                        <g>
                          <g>
                            <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z" />
                          </g>
                        </g>
                      </svg>
                      <span>244 Dương Đình Hội, Quận 9, Thành phố Hồ Chí Minh</span></li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 513.64 513.64"  xmlSpace="preserve">
                        <g>
                          <g>
                            <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                          </g>
                        </g>
                      </svg>
                      <a href="tel:0397181095" title="Điện thoại">0397181095</a></li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                        <g>
                          <path d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646     c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719     C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z" />
                          <path d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885     c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542     C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333     v-268.25C512,132.927,509.583,129.146,505.813,127.406z" />
                        </g>
                      </svg>
                      <a href="mailto:hieudev96@gmail.com" title="Email">hieudev96@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div id="copyright" className="fot_copyright">
              @ Bản quyền thuộc về <a href="https://www.facebook.com/Hyeu.Nyto/" target="_blank">Hiếu Trần</a> 
            </div>
            <ul className="social-media">
              <li>
                <a href="https://www.facebook.com/Hyeu.Nyto/" target="_blank" title="facebook" className="facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 96.124 96.123" xmlSpace="preserve"> <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#EBE7E7" /> </svg>
                </a>
              </li>
              <li><a href="https://www.instagram.com/tr_hyeu/" target="_blank" title="instagram" className="instagram">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0" /><path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0" /><path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" /></svg>
                </a></li>
              <li><a href="/#" title="youtube" className="youtube">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"> <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80 c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904 C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728 c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816 c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096 C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z" /> </svg>
                </a></li>
              <li><a href="/# " title="twitter" className="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" width="25px" height="25px"> <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#EBE7E7" /> </svg>
                </a></li>
            </ul>
          </div>
        </div>
      </footer>
  );
}
