import { Link } from 'react-router-dom';

import './scss/footer.scss';

function Footer(props) {


    return (
        <>
            <footer id='ft' className='position-relative'>
                <div className='container d-lg-flex justify-lg-content-between justify-content-center'>
                    <div className='d-lg-flex'>
                        <h2><Link to="/"><span className='visually-hidden'>슬로우캘리 로고이미지</span></Link></h2>
                        <div className='d-lg-flex'>
                            <p className='mx-2'>
                                주식회사 더슬로우 컴퍼니 | 대표:전현제 | 개인정보관리책임자:전현제 <br />
                                서울특별시마포구월드컵북로6길92, 5층 (동교동, 구성빌딩)<br />
                            </p>
                            <p className='mx-2'>
                                가맹문의: 1688-3098 | 사업자등록번호: 356-86-02171<br />
                                slow@slowcompany.co.kr
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        {
                            props.datasrc.ft_icon.map((el, idx) => {
                                return (
                                    <Link key={idx} to={`${el.ft_href}`}><i className={`icon_list ${el.ft_icon}`}><span className='visually-hidden'>{el.ft_txt}</span></i></Link>
                                )
                            })
                        }
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
