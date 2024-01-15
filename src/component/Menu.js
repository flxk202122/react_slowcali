import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'

//스타일 컴포넌트 관리
//menu_tab_btn
import BtnLi from './stylecompinent/Mystlyecom';


import './scss/menu.scss';

function Menu(props) {

	const [menuTab, setmenuTab] = useState(0);
	const [subTab, setsubTab] = useState(0);



	return (
		<section id='menu'>
			<div className='container position-relative'>
				<h2 className='visually-hidden'>{props.datasrc.h2}</h2>
				<ul className='subject_list d-flex justify-content-center'>
					{props.datasrc.subject_list.map((el, idx) => (
						<BtnLi
							key={idx}
						>
							<Link to='' onClick={() => {
								setmenuTab(idx);
							}}>{el.nm}</Link>
						</BtnLi>
					))}
				</ul>
			</div >
			<div className='bg_box'>
				{
					props.datasrc.subject_list.map((el, idx) => {
						return (
							<img key={idx} src={`./img/menu/${el.bg}`} className={`${menuTab === idx ? "active" : ""}`} alt="" />
						)
					})

				}
			</div>
			<div className='container position-relative'>
				<div className='top_box'>
					<h3>Topping</h3>
					<ul className='d-flex'>
						{
							props.datasrc.topping_list.map((el, idx) => {
								return (
									<li key={idx}><Link to=''>{el.nm}</Link>
										<img src={`./img/menu/${el.bg}`} alt="" />
									</li>
								)
							})
						}
					</ul>
				</div>
				<div>
					<h3 className=''>MENU</h3>
					<ul className='tab_list d-flex justify-content-center'>
						{
							props.datasrc.menu_list.map((el, idx) => {
								return (
									<BtnLi key={idx}><Link to={el.href} onClick={() => {
										setsubTab(idx);
									}}>{el.nm}</Link></BtnLi>
								)
							})
						}
					</ul>
					<ul className='kal_list'>
						{
							props.datasrc.menu_list.map((el, idx) => {
								return (
									<li key={idx} className={`${subTab === idx ? "active" : ""}`} >
										<ul className='box d-md-flex justify-content-center'>
											{
												el.menu_content.map((eel, iidx) => {
													return (
														<li key={iidx} className='position-relative row col-md-4 '>
															<Link className='col-12 d-flex justify-content-center align-items-center'>{eel.menu_nm}</Link>
															<div className='menu_box col-6 col-md-12 align-items-center'>
																<img className='w-100' src={`./img/menu/${eel.menu_bg}`} alt="" />
															</div>
															<ul className='kal_box col-6 col-md-12'>
																<li className='d-flex justify-content-between'>
																	<span>총g</span>
																	<span>{eel.menu_all}</span>
																</li>
																<li className='d-flex justify-content-between'>
																	<span>열량&#40;Kcal&#41;</span>
																	<span>{eel.menu_kcal}</span>
																</li>
																<li className='d-flex justify-content-between'>
																	<span>탄수화물&#40;g&#41;</span>
																	<span>{eel.menu_tan}</span>
																</li>
																<li className='d-flex justify-content-between'>
																	<span>단백질&#40;g&#41;</span>
																	<span>{eel.menu_dan}</span>
																</li>
																<li className='d-flex justify-content-between'>
																	<span>지방&#40;g&#41;</span>
																	<span>{eel.menu_zi}</span>
																</li>
																<li className='d-flex justify-content-between'>
																	<span>나트륨&#40;g&#41;</span>
																	<span>{eel.menu_na}</span>
																</li>
																<li className='d-flex justify-content-between'>
																	<span>당&#40;g&#41;</span>
																	<span>{eel.menu_dang}</span>
																</li>
															</ul>
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
				</div>
			</div >
		</section >
	)
}

export default Menu
