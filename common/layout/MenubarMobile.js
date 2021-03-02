import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import LinkConfig from "../link_config"

//Recoil
import {
    useRecoilState
  } from 'recoil';
import {statusMenubar} from '../../recoil/atom';
import { Menu } from 'antd';
import { HomeOutlined,UsergroupAddOutlined, ShoppingOutlined, PhoneOutlined,SolutionOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1'];

function MenubarMobile() {
    const [openMenubar,setOpenMenubar] = useRecoilState(statusMenubar);

    const [openKeys, setOpenKeys] = React.useState(['']);

    const onOpenChange = keys => {
      const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
    return (
        <div>
            <div id="kt_quick_cart" className={`offcanvas offcanvas-left ${openMenubar && 'offcanvas-on'}`}>
                {/*begin::Header*/}
                <div className="offcanvas-header text-right pb-7 p-2" kt-hidden-height={46} style={{paddingTop: 15, paddingRight: 15}}>
                    <a className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_cart_close" onClick={() => setOpenMenubar(!openMenubar)}>
                        <CloseOutlined style={{ fontSize: '16px'}} />
                    </a>
                </div>
                {/*end::Header*/}
                {/*begin::Content*/}
                <div className="offcanvas-content">
                    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <LinkConfig href="/">
                                <a className="a-img" title="Trang chủ" onClick={() => setOpenMenubar(!openMenubar)}>
                                    <span>Trang chủ</span>
                                    <span className="label_">
                                    <i className="label " />
                                    </span>
                                </a>
                            </LinkConfig>	
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
                            <LinkConfig href="/about-us">
                                <a className="a-img" title="Giới thiệu" onClick={() => setOpenMenubar(!openMenubar)}>
                                    <span>Giới thiệu</span>
                                    <span className="label_">
                                    <i className="label " />
                                    </span>
                                </a>
                            </LinkConfig>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Sản Phẩm">
                            <SubMenu key="sub2" title="Mũ bảo hiểm">
                                <Menu.Item key="3" onClick={() => setOpenMenubar(!openMenubar)}>AGV</Menu.Item>
                                <Menu.Item key="4" onClick={() => setOpenMenubar(!openMenubar)}>LS2</Menu.Item>
                                <Menu.Item key="5" onClick={() => setOpenMenubar(!openMenubar)}>Yohe</Menu.Item>
                                <Menu.Item key="6" onClick={() => setOpenMenubar(!openMenubar)}>Ego</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title="Đồ bảo hộ">
                                <Menu.Item key="7" onClick={() => setOpenMenubar(!openMenubar)}>Áo bảo hộ</Menu.Item>
                                <Menu.Item key="8" onClick={() => setOpenMenubar(!openMenubar)}>Găng bảo hộ</Menu.Item>
                                <Menu.Item key="9" onClick={() => setOpenMenubar(!openMenubar)}>Giày bảo hộ</Menu.Item>
                                <Menu.Item key="10" onClick={() => setOpenMenubar(!openMenubar)}>Balo</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title="Phụ kiện">
                                <Menu.Item key="11" onClick={() => setOpenMenubar(!openMenubar)}>Kính mũ</Menu.Item>
                                <Menu.Item key="12" onClick={() => setOpenMenubar(!openMenubar)}>Tai nghe</Menu.Item>
                                <Menu.Item key="13" onClick={() => setOpenMenubar(!openMenubar)}>Trùm đầu</Menu.Item>
                                <Menu.Item key="14" onClick={() => setOpenMenubar(!openMenubar)}>Đuôi gió</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="15" onClick={() => setOpenMenubar(!openMenubar)}>Đồ chơi xe</Menu.Item>
                            <Menu.Item key="16" onClick={() => setOpenMenubar(!openMenubar)}>Sản phẩm khuyến mãi</Menu.Item>
                            <Menu.Item key="17" onClick={() => setOpenMenubar(!openMenubar)}>Sản phẩm mới</Menu.Item>
                            <Menu.Item key="18" onClick={() => setOpenMenubar(!openMenubar)}>Sản phẩm nổi bật</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<SolutionOutlined />}>
                            <LinkConfig href="/news">
                                <a className="a-img" title="Tin tức" onClick={() => setOpenMenubar(!openMenubar)}>
                                <span>Tin tức</span>
                                <span className="label_">
                                    <i className="label " />
                                </span>
                                </a>
                            </LinkConfig>	
                        </Menu.Item>
                        <Menu.Item key="10" icon={<PhoneOutlined />}>
                            <LinkConfig href="/contact">
                                <a className="a-img" title="Liên hệ" onClick={() => setOpenMenubar(!openMenubar)}>
                                <span>Liên hệ</span>
                                <span className="label_">
                                    <i className="label " />
                                </span>
                                </a>
                            </LinkConfig>
                        </Menu.Item>
                    </Menu>
                </div>
                {/*end::Content*/}
                </div>
                {openMenubar && <div class="offcanvas-overlay"  onClick={() => setOpenMenubar(!openMenubar)}></div>}
        </div>
    );
}

export default MenubarMobile;