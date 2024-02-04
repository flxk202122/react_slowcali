import React from 'react'
import { useForm } from 'react-hook-form'

import './scss/founded.scss'

function Founded(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className='founded position-relative overflow-hidden'>
            <div className="container position-relative">
                <div className='txt_box'>
                    <h2 className='visually-hidden'>창업문의</h2>
                    <p className='w-100 text-center'>{props.datasrc.founded_txt}</p>
                </div>
                <div className='founded_step'>
                    <ul className='d-flex row mx-0 justify-content-lg-between justify-content-around'>
                        {
                            props.datasrc.founded_list.map((el, idx) => {
                                return (
                                    <li key="idx" className='position-relative d-flex flex-lg-column  align-items-center justify-content-lg-center justify-content-around col-lg-2 col-12 mx-2 mb-lg-5 mb-2'>
                                        <span className='num_list position-absolute text-center'>{idx + 1}</span>
                                        <img className='col-lg-auto col-4' src={`./img/${el.founded_bg}`} alt="" />
                                        <p className='row text-lg-center col-lg-auto col-8'>
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
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
                            <fieldset className='position-absolute'>창업문의</fieldset>
                            <ul className='position-relative'>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>고객명</strong>
                                    <input className='col-8' type="text" {...register('wr_name')} />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>연락처</strong>
                                    <input className='col-8' type="text" {...register('wr_number')} />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>이메일</strong>
                                    <input className='col-8' type="text" {...register('wr_email')} />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>연락 가능 시간</strong>
                                    <input className='col-8' type="text" {...register('wr_time')} />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>창업희망지역</strong>
                                    <input className='col-8' type="text" {...register('wr_location')} />
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>점포보유유무</strong>
                                    <div className='col-4'>
                                        <label htmlFor="no_store" className='px-2'>없음</label>
                                        <input type="radio" id='no_store' {...register('store_yn', { value: 'no' })} />
                                    </div>
                                    <div className='col-4'>
                                        <label htmlFor="yes_store" className='px-2'>있음</label>
                                        <input type="radio" id='yes_store' {...register('store_yn', { value: 'yes' })} />
                                    </div>
                                </li>
                                <li className='d-flex position-relative'>
                                    <strong className='col-4'>상세문의 내용</strong>
                                    <textarea className='col-8' {...register('wr_details')} />
                                </li>
                            </ul>
                            <div className='btns position-relative d-flex align-items-center justify-content-between'>
                                <div className='btn_a col-5 justify-content-around d-flex'>
                                    <label htmlFor="ok_myadmin">개인정보 수집 및 이용동의</label>
                                    <input type="radio" id='ok_myadmin' {...register('ok_myadmin', { required: true })} />
                                </div>
                                <button type="submit" className='btn_b col-5'>제출하기</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className='together_form'>
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

                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default Founded
