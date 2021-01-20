import React,{ useContext } from 'react'
import  LinkConfig from "../link_config"
//Recoil
import {
  useSetRecoilState
} from 'recoil'
import { statusMenubar } from '../../recoil/atom'
import { GlobalContext } from "../../pages/_app";
import { getStrapiMedia } from "../../lib/media";

export default function Header() {
  const setStatus = useSetRecoilState(statusMenubar);
  const { favicon } = useContext(GlobalContext);
  const imageUrl = getStrapiMedia(favicon);


  return (
    <div id="header" className="index WEB active-child header">
      <div className="main-header d-flex align-items-center flex-wrap d-xl-none">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-8 d-flex align-items-center">
              <a id="logo" className="main-logo d-xl-block d-none" href="/">
                <img src={imageUrl} alt="HTweb logo" className="fade show" />
              </a>
              <a className="main-logo d-block d-xl-none" href="/">
                <img src={imageUrl} alt="HTweb logo" className="fade show" />
              </a>
            </div>
            <div className="col-xl-10 col-4 d-flex justify-content-end">
              <span aria-label="button" onClick={() => setStatus(true)} className="d-inline-block d-xl-none btn-menu">
                <i className="ti-menu" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="extra-header d-xl-block sticky d-none">
        <div className="container d-xl-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center">
            <a href="/">
              <img src={imageUrl} alt="HT Web" />
            </a>
          </div>
          <div className="menu justify-content-between">
            <ul className="d-xl-flex align-items-center">
              <li>
                <LinkConfig href="/">
                  <a>
                    Trang chủ
                  </a>
                </LinkConfig>
              </li>
              <li>
                <LinkConfig href="/store">
                  <a>
                   Kho giao diện
                  </a>
                </LinkConfig>
              </li>
              <li>
                <LinkConfig href="/price">
                  <a>
                    Bảng giá
                  </a>
                </LinkConfig>
              </li>
              <li>
                <LinkConfig href="/contact">
                  <a>
                  Liên hệ
                  </a>
                </LinkConfig>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
