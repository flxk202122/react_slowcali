import React, { useEffect, useRef, useState } from 'react';
import './scss/header.scss';
import clsx from 'clsx';


function Header(props) {

    // const [toggleBtn, settoggleBtn] = useState(true);
    const [handOn, sethandOn] = useState(false);
    const [toggleBtn, settoggleBtn] = useState(false);

    const handleMouseOver = () => {
        sethandOn(true);
    };

    const handleMouseOut = () => {
        sethandOn(false);
    };



    return (
        <header id="hd"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={`position-relative ${!toggleBtn && handOn ? "active" : ""} ${toggleBtn ? "tabopen" : ""}`}>
            <div className='container d-flex align-items-center justify-content-between'>
                <h1><a href=""><span className='visually-hidden'>슬로우캘리 로고이미지</span></a></h1>
                <ul id="gnb" className='d-flex align-item-center justify-content-between'>
                    {
                        props.datasrc.gnb.map((el, idx) => {
                            return (
                                <li key={idx} className={clsx('position-relative', el.gnb_cls)}>
                                    <a href={el.gnb_href}>{el.gnb_nm}</a>
                                    <ul className='ul2d position-absolute'>
                                        {
                                            el.ultwo.map((eel, iidx) => {
                                                return (
                                                    <li>
                                                        <a href={eel.gnb_href}>{eel.gnb_nm}</a>
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
                    <button className='tab_btn' onClick={() => settoggleBtn(!toggleBtn)}>
                        <span className='visually-hidden'>메뉴창 열기</span>
                    </button>
                    <div className='tab_box position-absolute'>
                        <div className='container'>
                            <ul id="tab_list">
                                {
                                    props.datasrc.gnb.map((el, idx) => {
                                        return (
                                            <li key={idx} className={clsx('position-relative', el.gnb_cls)}>
                                                <a href={el.gnb_href}>{el.gnb_nm}</a>
                                                <div className='bg_box position-absolute' style={{
                                                    backgroundImage: `url(./img/${el.gnb_bg}.png)`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover'
                                                }}></div>
                                                <ul className='ul2d position-absolute'>
                                                    {
                                                        el.ultwo.map((eel, iidx) => {
                                                            return (
                                                                <li key={iidx}>
                                                                    <a href={eel.gnb_href}>{eel.gnb_nm}</a>
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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
