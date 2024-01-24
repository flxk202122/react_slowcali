import { Map } from "react-kakao-maps-sdk";

import { Link } from 'react-router-dom';


import './scss/store.scss';

export default function KakaoMap(props) {
	return (
		<section className="section_store">
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
			<div className="">
				<ul>
					<li></li>
				</ul>
			</div>
			<div className="container">
				<h2 className="col-12">{props.datasrc.h2}</h2>
				<div className="d-flex">
					<Map className="col-6"
						center={{

							lat: 33.450701,
							lng: 126.570667,
						}}
						style={{

							width: "50%",
							height: "450px",
						}}
						level={3}
					/>
					<div className="col-6">
						<div>
							<h3>매장 검색</h3>
							<div className="search-box">
								<form action="">
									<input type="text" name="" placeholder="검색어를 입력하세요" />
									<button><span>검색버튼</span></button>
								</form>
							</div>
						</div>
						<div>
							<span>앞으로가기</span>
							<span>뒤로가기</span>
						</div>
						<ul>
							{
								props.datasrc.store_list.map((el, idx) => {
									return (
										<li key={idx}><Link>{el.map}</Link>
											<ul>
												{
													el.store.map((eel, iidx) => {
														return (
															<li key={iidx}>
																<Link>
																	<span><img src="" alt="슬로우캘리 이미지" /></span>
																	<div>
																		<span>{`[${el.map}]${eel.nm}점`}</span>
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

				</div>

			</div>
		</section >
	);
}