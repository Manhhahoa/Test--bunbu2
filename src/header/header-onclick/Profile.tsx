import { useRef, useState } from 'react'
import useClickOutSide from '../../hook/UseClickOutSite';
import { User } from '../DataHeader';
const Profile = () => {
    const [checkDisplayProfile, setcheckDisplayProfile] = useState(false)
    const selectElement = useRef<HTMLHeadingElement>(null);
    const handleClickInsite = () => setcheckDisplayProfile(false)
    useClickOutSide(selectElement, handleClickInsite)
    return (
        <div ref={selectElement} className='pst-relative'>
            <img className='cursor-poiter' onClick={() => setcheckDisplayProfile(!checkDisplayProfile)} src="https://files.fullstack.edu.vn/f8-prod/user_photos/193714/625a8db43f524.jpg" alt="" />
            {checkDisplayProfile && (
                <div className="user-profile white-shadow cursor-poiter">
                    <div className="d-flex">
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
            )}
        </div>
    )
}

export default Profile
