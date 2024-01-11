import React, { useEffect, useState } from 'react';
import './scss/brandbrand.scss';

function Brandbrand(props) {
    const [showTab, setshowTab] = useState(0);
    const [isPaused, setPaused] = useState(false);

    const brandArr = props.datasrc.brand;

    console.log(brandArr);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isPaused) {
                let count = (showTab + 1) % brandArr.length;
                setshowTab(count);
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, [showTab, isPaused, brandArr]);

    const tabClick = (index) => {
        setPaused(true);
        setshowTab(index);

        setTimeout(() => {
            setPaused(false);
        }, 4000);
    }

    return (
        <section id='brand_brand'>
            <div className='container-md position-relative px-0'>
                <h2 className='visually-hidden'>브랜드</h2>
                <div className='inner_box position-relative'>
                    <ul className='brand_tab_list d-md-flex w-100'>
                        {props.datasrc.brand.map((el, idx) => (
                            <li
                                key={idx}
                                className={`col-md-3 ${el.gnb_cls} ${showTab === idx ? "active" : ""}`}
                                onClick={() => tabClick(idx)}
                            >
                                <div className='txt_box position-relative'>
                                    <h3>{el.brand_nm}</h3>
                                    <p>{el.brand_txt}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className='brand_img_list'>
                        {props.datasrc.brand.map((el, idx) => (
                            <li
                                key={idx}
                                className={`img_box ${el.gnb_cls} ${showTab === idx ? "active" : ""}`}
                            >
                                <img src={`./img/${el.brand_bg}`} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Brandbrand;
