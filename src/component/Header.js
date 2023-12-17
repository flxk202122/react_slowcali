import React from 'react';
import './scss/header.scss';


function Header(props) {
    return (
        <header id="hd">
            <div className='container d-flex align-item-center justify-content-between'>
                <h1><a href=""><span className='visually-hidden'>슬로우캘리 로고이미지</span></a></h1>
                <ul id="gnb" className='d-flex align-item-center justify-content-between'>
                    {
                        props.datasrc.gnb.map((el, idx) => {
                            return (
                                <li key={idx}>
                                    <a href="{el.gnb_href}">{el.gnb_nm}</a>
                                    <ul>
                                        {
                                            el.ultwo.map((eel, iidx) => {
                                                return (
                                                    <li>
                                                        <a href="{eel.gnb_href}">{eel.gnb_nm}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
                <div id="gnb_tab">
                    <button className='tab_btn'>
                        <span className='visually-hidden'>메뉴창 열기</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
