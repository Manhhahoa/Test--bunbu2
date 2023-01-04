import { useRef, useState } from 'react'
import useClickOutSide from '../../hook/UseClickOutSite';

const Notice = () => {
    const [checkDisplayNotice, setcheckDisplayNotice] = useState(false)
    const selectElement = useRef<HTMLHeadingElement>(null);
    const handleClickInsite = () => setcheckDisplayNotice(false)
    useClickOutSide(selectElement, handleClickInsite)
    return (
        <div ref={selectElement} className='pst-relative' >
            <img className='cursor-poiter' onClick={() => setcheckDisplayNotice(!checkDisplayNotice)} src="https://banner2.cleanpng.com/20190926/pcg/transparent-basic-icons-icon-bell-icon-notification-icon-5d8d57bac00ec7.2987967515695441227867.jpg" alt="" />
            {checkDisplayNotice && (
                <div className="notice white-shadow cursor-poiter">
                    <h4 className='fw-500'>Thông báo</h4>
                    <div className="d-flex">
                        <img
                            src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                            alt=""
                        />
                        <div>
                            Chào mừng đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi
                            mục tiêu tới cùng bạn nhé ❤️
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Notice