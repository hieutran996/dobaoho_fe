import React, {useRef} from 'react'
//animation
import Fade from 'react-reveal/Fade'
//api
import {CallData} from '../../components/sendMail/contact'
//ant
import { Spin } from 'antd';
import { message } from 'antd';

import { useState } from "react";


export default function Footer() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const contentRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        let name = nameRef.current.value
        let email = emailRef.current.value
        let phone = phoneRef.current.value
        let content = contentRef.current.value
        var result = await CallData({name, email, phone, content})
        if (result) {
            success()
        } else {
            error()
        }
        setLoading(false)
    }

    const success = () => {
        message.success({
            content: 'Gửi yêu cầu thành công',
            className: 'custom-class',
            style: {
              marginTop: '20vh',
            },
        });
    };
    
    const error = () => {
        message.success({
            content: 'Gửi yêu cầu thất bại',
            className: 'custom-class',
            style: {
              marginTop: '20vh',
            },
        });
    };
  

    return (
        <div className="footer-menu">
            <div className="container">
                <div className="form">
                <Fade left>
                    <div className="contact-info">
                    <h3 className="title">Hãy liên hệ với chúng tôi</h3>
                    <p className="text">
                        Để được trải nghiệm những tính năng tuyệt vời mà HT web mang lại
                    </p>
                    <div className="info">
                        <div className="information">
                        <i className="icon icon_location"></i>
                        <a href="https://www.google.com/maps/place/T%C4%83ng+Nh%C6%A1n+Ph%C3%BA+B,+District+9,+Ho+Chi+Minh+City,+Vietnam/@10.8298778,106.7788497,15z/data=!3m1!4b1!4m5!3m4!1s0x3175271ddaa1b16f:0x3e72d9c1d0d7a5f7!8m2!3d10.8307175!4d106.7853922" target="_blank" rel="noopener">Tăng Nhơn Phú B, Quận 9, HCM</a>
                        </div>
                        <div className="information">
                        <i className="icon icon_email"></i>
                        <a href="mailto:hieudev96@gmail.com">hieudev96@gmail.com</a>
                        </div>
                        <div className="information">
                        <i className="icon icon_phone"></i>
                        <a href="tel:0397181095">0397 181 095</a>
                        </div>
                        <div className="information">
                        <i className="icon icon_link"></i>
                        <a href="https://www.facebook.com/htwebchuyenthietketrangweb" target="_blank" rel="noopener">Facebook</a>
                        </div>
                    </div>
                    </div>
                </Fade>
                <Fade right>
                <div className="contact-form">
                    <span className="circle one" />
                    <span className="circle two" />
                    <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="name"></label>
                        <input type="text" aria-label="Name" className="input" ref={nameRef} placeholder="Họ và tên" required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email"></label>
                        <input type="email" aria-label="Mail" className="input" ref={emailRef} placeholder="Email" required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone"></label>
                        <input type="text" pattern="[0-9]+" aria-label="Phone" maxLength={15} minLength={8} className="input" ref={phoneRef}  placeholder="Số điện thoại" required/>
                    </div>
                    <div className="input-container textarea">
                        <label htmlFor="content"></label>
                        <textarea  className="input" aria-label="Content" ref={contentRef} placeholder="Nội dung"/>
                    </div>
                    <button type="submit" className="btn btn_sendmail" disabled={loading}>{loading ? <Spin  size="small" spinning={true} /> : 'Gửi'}</button>
                    </form>
                </div>
                </Fade>
                </div>
            </div>
        </div>
    );
}

