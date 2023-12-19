import React from 'react';
import './scss/header.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Header(props) {
    // return (
    //     <Navbar id="hd" className={clsx('active')} as="header">
    //         <Container className='d-flex align-items-center justify-content-between'>
    //             <Navbar.Brand as="h1">
    //                 <a href="/">
    //                     <span className="visually-hidden">슬로우캘리 로고이미지</span>
    //                 </a>
    //             </Navbar.Brand>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="d-flex align-item-center justify-content-between" as="ul" id='gnb'>
    //                     {props.datasrc.gnb.map((el, idx) => (
    //                         <NavDropdown
    //                             as='li'
    //                             title={el.gnb_nm}
    //                             id={`nav-dropdown-${idx}`}
    //                             key={idx}
    //                             className={clsx('position-relative', el.gnb_cls)}
    //                         >
    //                             {el.ultwo.map((eel, iidx) => (
    //                                 <NavDropdown.Item Ihref={eel.gnb_href} key={iidx}>
    //                                     {eel.gnb_nm}
    //                                 </NavDropdown.Item>
    //                             ))}
    //                         </NavDropdown>
    //                     ))}
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Container>
    //     </Navbar>
    // );

    return (
        <header id="hd" className='active'>
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
                    <button className='tab_btn'>
                        <span className='visually-hidden'>메뉴창 열기</span>
                    </button>
                    <div className='tab_box position-absolute d-none'>
                        <ul id="tab_list">
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
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
