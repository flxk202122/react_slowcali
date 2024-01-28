import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";

import './scss/store.scss';



export default function KakaoMap(props) {

  const [slideState, setSlideState] = useState(0);
  const [picMarker, setMarker] = useState(0);
  const slide_length = props.datasrc.store_list.map.length;
  const slideRef = useRef();

  const handleBannerRight = () => {
    if (slideState >= slide_length) {
      setSlideState(0)
    } else {
      setSlideState(slideState + 1);
    }
  }

  const handleBannerLeft = () => {
    if (slideState === 0) {
      setSlideState(slide_length);
    } else {
      setSlideState(slideState - 1);
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideState})`;
  }, [slideState])


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
          <Map Map className="col-5" center={{ lat: props.datasrc.store_list[0].store[0].latitude, lng: props.datasrc.store_list[0].store[0].longitude }} level={3}>
            {props.datasrc.store_list.map((el, idx) => (
              el.store.map((eel, iidx) => (
                <MapMarker key={iidx} position={{ lat: parseFloat(eel.latitude), lng: parseFloat(eel.longitude) }}>
                  <div className="pin">
                    슬로우캘리
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
              <button className="prev" onClick={handleBannerLeft}><span className="visually-hidden">앞으로가기</span></button>
              <div className="location_wrapper">
                <ul className="location_list d-flex" ref={slideRef}>
                  {
                    props.datasrc.store_list.map((el, idx) => {

                      return (

                        <li key={idx} > <Link>{el.map}</Link></li>

                      )
                    })
                  }
                </ul>
              </div>
              <button className="next" onClick={handleBannerRight}><span className="visually-hidden">뒤로가기</span></button>
            </div>
            <div className="wrapper position-relative overflow-auto">
              <div className="np_box">
                {
                  props.datasrc.store_list.map((el, idx) => (
                    props.datasrc.store_list[idx].store.map((eel, iidx) => {
                      return (
                        <div key={iidx} className="border-bottom p-2">
                          <Link className="d-flex align-items-center">
                            <span className="img_box col-4 d-flex align-items-center"><img src="./img/logo_blue.png" alt="슬로우캘리 이미지" /></span>
                            <div className="col-8 px-2" onClick={() => { setMarker(idx) }}>
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