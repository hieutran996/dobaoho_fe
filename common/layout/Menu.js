import React,{useContext} from 'react'
import  LinkConfig from "../link_config"
//Recoil
import {
    useRecoilState
  } from 'recoil';
import {statusMenubar} from '../../recoil/atom';
import { GlobalContext } from "../../pages/_app";
import { getStrapiMedia } from "../../lib/media";


export default function Menu() {
    const [status,setStatus] = useRecoilState(statusMenubar);
    const { favicon } = useContext(GlobalContext);
    const imageUrl = getStrapiMedia(favicon);
    return (
        <div className={`menu-mobile WEB${status && ' show'}`}>
            <div className="logo-mobile">
                <a href="/">
                    <img src={imageUrl} alt="HTweb logo" />
                </a>
                <span aria-label="Intermdiate JavaScript" onClick={() => setStatus(false)} className="btn-close-menu">
                    <i className="ti-close" />
                </span>
            </div>
            <div className="box-scroll">
                <ul className="nav">
                    <li>
                        <LinkConfig href="/">
                            <a onClick={() => setStatus(false)}>
                                Trang chủ
                            </a>
                        </LinkConfig>
                    </li>
                    <li>
                        <LinkConfig href="/store">
                            <a onClick={() => setStatus(false)}>
                                Kho giao diện
                            </a>
                        </LinkConfig>
                    </li>
                    <li>
                        <LinkConfig href="/price">
                            <a onClick={() => setStatus(false)}>
                                Bảng giá
                            </a>
                        </LinkConfig>
                    </li>
                    <li>
                        <LinkConfig href="/contact">
                            <a onClick={() => setStatus(false)}>
                                Liên hệ
                            </a>
                        </LinkConfig>
                    </li>
                </ul>
            </div>
        </div>
    )
}
