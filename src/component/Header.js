import React, { useEffect, useRef, useState } from 'react';
import './scss/header.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';



function Header(props) {

	const [handOn, sethandOn] = useState(false);
	const [toggleBtn, settoggleBtn] = useState(false);
	const [showTab, setshowTab] = useState(0);



	const handleMouseOver = () => {
		sethandOn(true);
	};

	const handleMouseOut = () => {
		sethandOn(false);
	};




	return (
		<header id="hd"
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className={`position-relative ${!toggleBtn && handOn ? "active" : ""} ${toggleBtn ? "tabopen" : ""}`}>
			<div className='container d-flex align-items-center justify-content-between'>
				<h1><Link to="/"><span className='visually-hidden'>슬로우캘리 로고이미지</span></Link></h1>
				<ul id="gnb" className='d-flex align-items-center justify-content-between'>
					{
						props.datasrc.gnb.map((el, idx) => {
							return (
								<li key={idx} className={clsx('position-relative d-none d-lg-block', el.gnb_cls)}>
									<Link to={`/${el.gnb_href}`}>{el.gnb_nm}</Link>
									<ul className='ul2d position-absolute'>
										{
											el.ultwo.map((eel, iidx) => {
												return (
													<li key={iidx}>
														<Link to={`/${eel.gnb_href}`}>{eel.gnb_nm}</Link>
													</li>
												)
											})
										}
									</ul>
								</li>
							)
						})
					}
				</ul>
				<div id="gnb_tab">
					<button className='tab_btn' onClick={() => settoggleBtn(!toggleBtn)}>
						<span className='visually-hidden'>메뉴창 열기</span>
					</button>
					<div className='tab_box position-absolute'>
						<div className='container position-relative'>
							<ul id="tab_list">
								{
									props.datasrc.gnb.map((el, idx) => {
										return (
											<li key={idx} className={`${el.gnb_cls} ${showTab === idx ? "active" : ""}`} onClick={() => { setshowTab(idx) }}>
												<Link to="/">{el.gnb_nm}</Link>
												{showTab === idx &&
													<ul className="ul2d position-absolute">
														{
															el.ultwo.map((eel, iidx) => {
																return (
																	<li key={iidx}>
																		<Link to="/">{eel.gnb_nm}</Link>
																	</li>
																)
															})
														}
													</ul>
												}
												{showTab === idx &&
													<div className='bg_box position-absolute d-none d-md-block' style={{
														backgroundImage: `url(./img/${el.gnb_bg})`,
														backgroundRepeat: 'no-repeat',
														backgroundSize: 'cover',
														backgroundPosition: 'center'
													}}>
													</div>
												}
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
