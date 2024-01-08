import React, { useRef, useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import './scss/brandstory.scss'
import 'swiper/css';
import 'swiper/css/pagination';


function Brandstory(props) {
    return (
        <section id="brand_story" className='position-relative'>
            <div className='container'>
                <h2>브랜드 스토리</h2>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    navigation
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                >

                    {
                        props.datasrc.about.map((el, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className='inner_box d-flex align-items-center'>
                                        <div className='img_box'>
                                            <img src={`./img/${el.about_bg}`} alt="" />
                                        </div>
                                        <p>
                                            <span className='position-absolute'>ABOUT</span>
                                            {el.about_txt}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>

        </section >
    )
}

export default Brandstory
