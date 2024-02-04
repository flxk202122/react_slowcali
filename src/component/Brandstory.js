import React, { useRef, useState } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import './scss/brandstory.scss'
import 'swiper/css';
import 'swiper/css/pagination';


function Brandstory(props) {
    return (
        <section id="brand_story" className='position-relative'>
            <div className='container'>
                <h2>브랜드 스토리</h2>
                <Swiper className='myswiper'
                    modules={[Autoplay, Pagination]}
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={1}
                    loop={true}

                >

                    {
                        props.datasrc.about.map((el, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className='inner_box d-lg-flex align-items-center'>
                                        <div className='img_box'>
                                            <img src={`./img/${el.about_bg}`} alt="" />
                                        </div>
                                        <div>
                                            <span>ABOUT</span>
                                            <p>
                                                {el.about_txt}
                                            </p>
                                        </div>
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
