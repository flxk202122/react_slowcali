import React from 'react'
import { Link } from 'react-router-dom'

import './scss/menu.scss';

function Menu(props) {
    return (
        <section id='menu'>
            <div className='container position-relative'>
                <h2 className='visually-hidden'>{props.datasrc.h2}</h2>
                <ul className='subject_list d-flex justify-content-center'>
                    {
                        props.datasrc.subject_list.map((el, idx) => {
                            return (
                                <li className='position-relative' key={idx}>{el.nm}</li >
                            )
                        })
                    }
                </ul >
            </div >
            <div className='bg_box position-relative'>
                {
                    props.datasrc.subject_list.map((el, idx) => {
                        return (
                            <img key={idx} src={`./img/menu/${el.bg}`} alt="" />
                        )
                    })
                }
            </div>
            <div className='container position-relative'>
                <div className='top_box d-none'>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <ul className='kal_list d-flex position-relative'>
                    {
                        props.datasrc.menu_list.map((el, idx) => {
                            return (
                                <li key={idx} className='col-3'><Link to={el.href}>{el.nm}</Link>
                                    <ul className='box'>
                                        {
                                            el.menu_content.map((eel, iidx) => {
                                                return (
                                                    <li key={iidx}><Link>{eel.menu_nm}</Link>
                                                        <div className='d-none'>
                                                            <img src={`./img/menu/${eel.menu_bg}`} alt="" />
                                                        </div>
                                                        <ul className='kal_box'>
                                                            <li className='d-flex justify-content-between'>
                                                                <span>총g</span>
                                                                <span>{eel.menu_all}</span>
                                                            </li>
                                                            <li className='d-flex justify-content-between'>
                                                                <span>열량&#40;Kcal&#41;</span>
                                                                <span>{eel.menu_kcal}</span>
                                                            </li>
                                                            <li className='d-flex justify-content-between'>
                                                                <span>탄수화물&#40;g&#41;</span>
                                                                <span>{eel.menu_tan}</span>
                                                            </li>
                                                            <li className='d-flex justify-content-between'>
                                                                <span>단백질&#40;g&#41;</span>
                                                                <span>{eel.menu_dan}</span>
                                                            </li>
                                                            <li className='d-flex justify-content-between'>
                                                                <span>지방&#40;g&#41;</span>
                                                                <span>{eel.menu_zi}</span>
                                                            </li>
                                                            <li className='d-flex justify-content-between'>
                                                                <span>나트륨&#40;g&#41;</span>
                                                                <span>{eel.menu_na}</span>
                                                            </li>
                                                            <li className='d-flex justify-content-between'>
                                                                <span>당&#40;g&#41;</span>
                                                                <span>{eel.menu_dang}</span>
                                                            </li>
                                                        </ul>
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
            </div >
        </section >
    )
}

export default Menu
