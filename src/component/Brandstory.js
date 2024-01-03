import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import './scss/brandstory.scss'
import 'swiper/css';


function Brandstory(props) {
    return (
        <section id="brand_story">
            <div className='container'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <h2>dd</h2>

                    {/* {
                        props.datasrc.about.map((el, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <h3>{el.about_txt}</h3>
                                    <img src={`./img/${el.about_bg}`} alt="" />
                                </SwiperSlide>
                            )
                        })

                    } */}

                </Swiper>

            </div>

        </section >
    )
}

export default Brandstory
