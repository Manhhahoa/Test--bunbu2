import { useState } from 'react'
import './Header.scss'
import ListStudy from './ListStudy'
import User from './Profile'
const Header = () => {
    const [checkDisplay, setcheckDisplay] = useState(false)
    const [checkDisplayNotice, setcheckDisplayNotice] = useState(false);
    const [checkDisplayProfile, setcheckDisplayProfile] = useState(false);
    return (
        <div>
            <div className='header'>
                <div className='header-image d-flex'>
                    <img src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" />
                    <h4>Học Lập Trình Để Đi Làm</h4>
                </div>
                <div className='form-search'>
                    <div className='header-input '>
                        <div className='img-search'>
                        </div>
                        <div className='w-100'>
                            <input type="text" placeholder='Tìm kiếm khóa học, bài viết, video...' />
                        </div>
                    </div>
                </div>
                <div className='header-signin d-flex'>
                    <button className='cursor-poiter' onClick={() => {
                        setcheckDisplayNotice(false)
                        setcheckDisplayProfile(false)
                        setcheckDisplay(!checkDisplay)
                    }}>Khóa học của tôi</button>
                    <div>
                        <img className='cursor-poiter' onClick={() => {
                            setcheckDisplayProfile(false)
                            setcheckDisplay(false)
                            setcheckDisplayNotice(!checkDisplayNotice)
                        }} src="https://banner2.cleanpng.com/20190926/pcg/transparent-basic-icons-icon-bell-icon-notification-icon-5d8d57bac00ec7.2987967515695441227867.jpg" alt="" />
                    </div>
                    <img className='cursor-poiter' onClick={() => {
                        setcheckDisplay(false)
                        setcheckDisplayNotice(false)
                        setcheckDisplayProfile(!checkDisplayProfile)
                    }} src="https://files.fullstack.edu.vn/f8-prod/user_photos/193714/625a8db43f524.jpg" alt="" />
                </div>
                {checkDisplay &&
                    <div className='list-study white-shadow'>
                        <h4 >Khóa học của tôi</h4>
                        {
                            ListStudy.map(study => {
                                return <div className='d-flex img-study'>
                                    <img src={study.imgsrc} alt="" />
                                    <div>
                                        <h5>{study.name}</h5>
                                        <p>Học cách đây {study.timelearn} tháng trước</p>
                                        <div className='percent'>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                }
                {
                    checkDisplayNotice &&
                    <div className='notice white-shadow cursor-poiter'>
                        <h4>Thong bao</h4>
                        <div className='d-flex'>
                            <img src="https://fullstack.edu.vn/assets/images/f8_avatar.png" alt="" />
                            <div>Chào mừng  đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️</div>
                        </div>
                    </div>
                }
                {
                    checkDisplayProfile &&
                    <div className='user-profile white-shadow cursor-poiter'>
                        <div className='d-flex'>
                            <img src={User.img} alt="" />
                            <div>
                                <h4> {User.name}</h4>
                                <p>{User.mail}</p>
                            </div>
                        </div>
                        <hr />
                        <p>Trang cá nhân</p>
                        <hr />
                        <p>Viết Blog</p>
                        <p>Bài viết của tôi</p>
                        <hr />
                        <p>Bài viết đã lưu</p>
                        <hr />
                        <p>Cài đặt</p>
                        <p>Đăng xuất</p>

                    </div>
                }

            </div>
        </div>
    )
}

export default Header