import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, navigation } from 'swiper/modules';

import './scss/store.scss';



export default function KakaoMap(props) {
  const [picMarker, setMarker] = useState(0);
  const [bigLocation, setLocation] = useState(0);

  const slideRef = useRef(null);


  const goNext = () => {
    if (slideRef.current && slideRef.current.swiper) {
      slideRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (slideRef.current && slideRef.current.swiper) {
      slideRef.current.swiper.slidePrev();
    }
  };

  //지도 지역별로 이동
  useEffect(() => {
    setMarker(0);
  }, [bigLocation])


  return (

    <section className="section_store position-relative overflow-hidden">
      <div className="ani_box position-relative text-center">
        <span className="ani_h position-relative">{
          props.datasrc.s1.split('|').map(el => {
            return (
              <>
                {el}
                <br></br>
              </>
            )
          })
        }
        </span>
        <span className="ani_p">{
          props.datasrc.s2.split('|').map(el => {
            return (
              <>
                {el}
                <br></br>
              </>
            )
          })
        }</span>
      </div>
      <div className="store_loof">
        <ul className="d-flex">
          {
            props.datasrc.store_list.map((el, idx) => (
              props.datasrc.store_list[idx].store.map((eel, iidx) => {
                return (
                  <li key={iidx}>
                    {eel.nm}점
                  </li>
                )
              })
            ))
          }
        </ul>
      </div>
      <div className="container">
        <h2 className="col-12">{props.datasrc.h2}</h2>
        <div className="d-lg-flex justify-content-between">
          <Map Map className="col-lg-5 col-12" center={{ lat: props.datasrc.store_list[bigLocation].store[picMarker].latitude, lng: props.datasrc.store_list[bigLocation].store[picMarker].longitude }} level={3}>
            {props.datasrc.store_list.map((el, idx) => (
              bigLocation === idx &&
              el.store.map((eel, iidx) => (
                <MapMarker key={iidx} position={{ lat: parseFloat(eel.latitude), lng: parseFloat(eel.longitude) }}>
                  <div className="pin">
                    {`[${el.map}]${eel.nm}점`}
                  </div>
                </MapMarker>
              ))
            ))}
          </Map>

          <div className="store_search position-relative col-lg-6 d-flex overflow-hidden flex-column">
            <div className="search_title d-flex align-items-center justify-content-between">
              <h3 className="col-4">매장 검색</h3>
              <div className="search_box position-relative">
                <form action="">
                  <input type="text" name="" placeholder="검색어를 입력하세요" />
                  <button className="search_btn"><span className="visually-hidden">검색버튼</span></button>
                </form>
              </div>
            </div>
            <div className="np_btn d-flex justify-content-between position-relative align-items-center">
              <button className="prev" onClick={goPrev}><span className="visually-hidden">앞으로가기</span></button>
              <Swiper className="myswiper align-items-center"
                modules={[Navigation]}
                slidesPerView={12}
                spaceBetween={0}
                loop={true}
                navigation={{
                  nextEl: '.next',
                  prevEl: '.prev',
                  clickable: true
                }}>
                {
                  props.datasrc.store_list.map((el, idx) => {
                    return (
                      <SwiperSlide className="myswiperlist" key={idx} onClick={() => {
                        setLocation(idx)

                      }}

                        ref={slideRef}> <Link className={`${bigLocation === idx ? "active" : ""}`}>{el.map}</Link></SwiperSlide>

                    )
                  })
                }
              </Swiper>
              <button className="next" onClick={goNext}><span className="visually-hidden">뒤로가기</span></button>
            </div>
            <div className="wrapper position-relative overflow-auto">
              <div className="np_box">
                {
                  props.datasrc.store_list.map((el, idx) => (
                    bigLocation === idx &&
                    props.datasrc.store_list[idx].store.map((eel, iidx) => {
                      return (
                        <div key={iidx} className="border-bottom p-2">
                          <Link className="d-flex align-items-center" onClick={() => { setMarker(iidx) }}>
                            <span className="img_box col-4 d-flex align-items-center  justify-content-around"><img src="./img/logo_blue.png" alt="슬로우캘리 이미지" /></span>
                            <div className="col-8 px-2">
                              <span className="store_nm">{`[${el.map}]${eel.nm}점`}</span>
                              <ul>
                                <li>
                                  <span>매장주소</span>
                                  <span>{eel.adress}</span>
                                </li>
                                <li>
                                  <span>전화번호</span>
                                  <span>{eel.number}</span>
                                </li>
                                <li>
                                  <span>영업시간</span>
                                  <span>{eel.open}</span>
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </div>
                      )
                    })
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  );
}