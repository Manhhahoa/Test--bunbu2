import React from 'react'
import './Header.scss'
const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-image d-flex'>
                <img src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" />
                <h4>Học Lập Trình Để Đi Làm</h4>
            </div>
            <div className='Form-search'>
                <div className='Header-input '>
                    <div className='img-search'>
                    </div>
                    <div className='w-100'>
                        <input type="text" placeholder='Tìm kiếm khóa học, bài viết, video...' />
                    </div>
                </div>
            </div>
            <div className='Header-signin'>
                <button>Đăng nhập</button>
            </div>
        </div>
    )
}

export default Header