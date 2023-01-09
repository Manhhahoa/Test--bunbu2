import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useClickOutSide from '../../hook/UseClickOutSite';
import { RootState } from '../../redux/Store';
const Profile = () => {
    const user = useSelector((state: RootState) => state.user)
    const nav = useNavigate()
    const [checkDisplayProfile, setcheckDisplayProfile] = useState(false)
    const selectElement = useRef<HTMLHeadingElement>(null);
    const handleClickInsite = () => setcheckDisplayProfile(false)
    useClickOutSide(selectElement, handleClickInsite)
    const logOut = () => {
        nav('/sign-in')
    }
    return (
        <div ref={selectElement} className='pst-relative'>
            <img className='cursor-poiter' onClick={() => setcheckDisplayProfile(!checkDisplayProfile)} src="https://files.fullstack.edu.vn/f8-prod/user_photos/193714/625a8db43f524.jpg" alt="" />
            {checkDisplayProfile && user.length >= 1 && (
                <div className="user-profile white-shadow cursor-poiter">
                    <div className="d-flex">
                        <img src={user[0].avatar} alt="" />
                        <div>
                            <h4> {user[0].name}</h4>
                            <p>{user[0].mail}</p>
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
                    <p onClick={logOut}>Đăng xuất</p>
                </div>
            )}
        </div>
    )
}

export default Profile
