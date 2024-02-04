import React, { useState, useEffect } from 'react';
import YouTube from "react-youtube"
import { Link } from 'react-router-dom';


import './scss/mainvisual.scss';


function Mainvisual(props) {

    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(true);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div id='videowrapper'>
            <div id="visual_logo" className={showAnimation ? 'active' : ''}>
                <div className='spin'>
                    <img className='food_logo' src="./img/logo_visual.png" alt="푸드 로고" />
                    <span><Link to='/Founded'>창업문의 바로가기</Link></span>
                </div>
            </div>
            <YouTube
                className='video'
                videoId="BY6p5JwJvVY" //동영상 주소
                opts={{
                    playerVars: {
                        autoplay: 1, //자동 재생 여부 
                        modestbranding: 0, //컨트롤 바에 유튜브 로고 표시 여부
                        loop: 1, //반복 재생
                        playlist: "BY6p5JwJvVY", //반복 재생으로 재생할 플레이 리스트
                        controls: 0,
                        disablekb: 1
                    },
                }
                }
                onReady={(e) => {
                    e.target.mute(); //소리 끔
                }}
            />
        </div >

    )
}

export default Mainvisual
