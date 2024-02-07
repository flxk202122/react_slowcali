import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "./scss/success.scss"
import "@fontsource/raleway";


function Success(props) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className='success position-relative overflow-hidden'>
            <div className="bg_box position-relative">
                <h2 className="position-absolute" >{props.datasrc.success_txt}</h2>
                <img className="main_bg position-relative" src={`./img/${props.datasrc.success_bg}`} alt="" />
                <div className="mycircle position-absolute">
                    <div className="rounded-text rotating">
                        <svg viewBox="0 0 200 200">
                            <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" strokeWidth="0"></path>
                            <g fontSize="13.1px">
                                <text textAnchor="start">
                                    <textPath className="coloring" href="#textPath" startOffset="0%">Real Fresh, Real Poke! Slow,Cali Real Fresh, Real Poke! Slow,Cali Real Fresh Slow,Cali</textPath>
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container position-relative">
                <div className="why" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom">
                    <div className="txt_box text-center">
                        <h3>{props.datasrc.success_list[2].success_nm}</h3>
                        <p>{props.datasrc.success_list[2].success_txt}</p>
                    </div>
                    <ul className="why_list d-flex row mx-0 justify-content-around align-items-stretch">
                        {
                            props.datasrc.success_list[2].success_content.map((el, idx) => {
                                return (
                                    <li key={idx} className="col-lg-3 col-5 mx-lg-0 my-lg-0 my-2">
                                        <div className="img_box text-center p-0">
                                            <img src={`./img/${el.content_bg}`} alt="" />
                                        </div>
                                        <div className="list_txt d-flex row justify-content-between">
                                            <strong className="py-2">{el.content_nm}</strong>
                                            <p>{el.content_txt}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="line_banner text-center">
                    <div className="txt_box py-5">
                        <h3>{props.datasrc.success_line.success_line_nm}</h3>
                        <p>{props.datasrc.success_line.success_line_txt}</p>
                    </div>
                </div>
                <div className="article d-lg-flex row">
                    <div className="txt_box text-center col-12">
                        <h3>{props.datasrc.success_list[1].success_nm}</h3>
                        <p>{props.datasrc.success_list[1].success_txt.split("|").map((el, idx) => {
                            return (
                                <>
                                    {el}
                                    <br></br>
                                </>
                            )
                        })}</p>
                    </div>
                    <ul className="article_list">
                        {
                            props.datasrc.success_list[1].success_content.map((el, idx) => {
                                return (
                                    <li key={idx} className="d-flex row mx-0 col-12 justify-content-lg-between justify-content-center align-items-center overflow-wrap" data-aos="fade-up"
                                        data-aos-offset="200"
                                        data-aos-delay="10"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="false"
                                        data-aos-once="false"
                                        data-aos-anchor-placement="top-bottom">
                                        <img className={`col-lg-5 order-lg-${el.content_first}`} src={`./img/${el.content_bg}`} alt="" />
                                        <div className={`txt_box col-lg-5 order-lg-${el.content_second}`}>
                                            <strong>{el.content_nm}</strong>
                                            <p>{el.content_txt.split("|").map((el, idx) => {
                                                return (
                                                    <>
                                                        {el}
                                                        <br></br>
                                                    </>
                                                )
                                            })}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="upup">
                    <div class="txt_box text-center">
                        <h3 className=""> {props.datasrc.success_list[0].success_nm}</h3>
                        <p>{props.datasrc.success_list[0].success_txt}</p>
                    </div>
                    <div className="img_box">
                        <img src={`./img/${props.datasrc.success_list[0].success_bg}`} alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Success
