import React from 'react';

function Header() {
    return (
        <header id="hd">
            <div className='container d-flex align-item-center justify-content-between'>
                <h1><a href=""><span>슬로우캘리 로고이미지</span></a></h1>
                <ul id="gnb" className='d-flex align-item-center justify-content-between'>
                    <li><a href="">브랜드소개</a>
                        <ul>
                            <li><a href="">브랜드 탄생</a></li>
                            <li><a href="">브랜드 이야기</a></li>
                        </ul>
                    </li>
                    <li><a href="">메뉴</a>
                        <ul>
                            <li><a href="">포케</a></li>
                            <li><a href="">보울</a></li>
                            <li><a href="">그릴</a></li>
                            <li><a href="">사이드</a></li>
                            <li><a href="">칼로리</a></li>
                        </ul>
                    </li>
                    <li><a href="">매장</a></li>
                    <li><a href="">성공전략</a></li>
                    <li><a href="">창업문의</a></li>
                </ul>
                <div id="gnb_tab">
                    <button className='tab_btn'>
                        <span>메뉴창 열기</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
