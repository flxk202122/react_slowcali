import React from 'react'

import './scss/founded.scss'

function Founded(props) {
    return (
        <section className='founded position-relative overflow-hidden'>
            <div className="container position-relative">
                <div className='txt_box'>
                    <h2 className='visually-hidden'>창업문의</h2>
                    <p className='w-100 text-center'>{props.datasrc.founded_txt}</p>
                </div>
                <div className='founded_step'>
                    <ul className='row mx-0 justify-content-between'>
                        {
                            props.datasrc.founded_list.map((el, idx) => {
                                return (
                                    <li key="idx" className='position-relative d-flex flex-column  align-items-center justify-content-center col-2 mx-3 mb-5'>
                                        <span className='num_list position-absolute text-center'>{idx + 1}</span>
                                        <img src={`./img/${el.founded_bg}`} alt="" />
                                        <p className='d-flex row text-center'>
                                            <span className='list_nm'>{el.founded_nm}</span>
                                            <span>{el.founded_txt}</span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='together'>
                <div className='container position-relative'>
                    <div className='txt_box text-center'>
                        <h3>TOGRTHER</h3>
                        <span>슬로우캘리와 함께하세요.</span>
                    </div>
                    <div className='together_form'>
                        <form action="" className=''>
                            <fieldset className='position-absolute'>창업문의</fieldset>
                            <ul className='position-relative'>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>고객명</strong>
                                    <input className='col-8' type="text" name='wr_name' />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>연락처</strong>
                                    <input className='col-8' type="text" name='wr_number' />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>이메일</strong>
                                    <input className='col-8' type="text" name='wr_email' />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>연락 가능 시간</strong>
                                    <input className='col-8' type="text" name='wr_time' />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>창업희망지역</strong>
                                    <input className='col-8' type="text" name='wr_loaction' />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>점포보유유무</strong>
                                    <div className='col-4'>
                                        <label htmlFor="no_store" className='px-2'>없음</label>
                                        <input className='' type="radio" name='' id='no_store' />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="yes_store" className='px-2'>있음</label>
                                        <input className='' type="radio" name='' id='yes_store' />
                                    </div>
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>상세문의 내용</strong>
                                    <input className='col-8' type="textarea" />
                                </li>
                            </ul>
                        </form>
                        <div className='btns position-relative d-flex  align-items-center justify-content-between'>
                            <div className='btn_a col-5 justify-content-around d-flex'>
                                <label htmlFor="ok_myadmin">개인정보 수집 및 이용동의</label>
                                <input type="radio" name='' id='ok_myadmin' />
                            </div>
                            <button className='btn_b col-5'>
                                제출하기
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Founded
