import React, { useEffect, useRef, useState } from 'react'
import './scss/brandbrand.scss';

function Brandbrand(props) {
    // tab
    const [showTab, setshowTab] = useState(0);
    //height
    const [tabHeight, setHeight] = useState(0);

    const myChildRef = useRef(null);


    useEffect(() => {
        const updateHeight = () => {
            const newTabHeight = myChildRef.current.clientHeight;
            setHeight(newTabHeight);
        }

        updateHeight();


        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };

    }, []);


    return (
        <>
            <section id='brand_brand'>
                <div className='container position-relative'>
                    <h2 className='visually-hidden'>브랜드</h2>
                    <div className='inner_box position-relative'>
                        <ul className='brand_tab_list d-flex align-items-center' style={{ height: `${tabHeight}px` }}>
                            {
                                props.datasrc.brand.map((el, idx) => {
                                    return (
                                        <li key={idx} className={`col-3 ${el.gnb_cls} ${showTab === idx ? "active" : ""}`} onClick={() => { setshowTab(idx) }}>


                                            <div className='txt_box position-relative d-flex align-items-center flex-wrap '>
                                                <h3>{el.brand_nm}</h3>
                                                <p>{el.brand_txt}</p>
                                            </div>
                                            {showTab === idx &&
                                                <div className='img_box position-absolute' ref={myChildRef}>
                                                    <img src={`./img/${el.brand_bg}`} alt="" />
                                                </div>

                                            }

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brandbrand
