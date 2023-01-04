import { useEffect, useRef, useState } from 'react'

const Notice = () => {
    const [checkDisplayNotice, setcheckDisplayNotice] = useState(false)
    const selectElement = useRef<HTMLHeadingElement>(null);
    const handleClickOutside = (e: any) => {
        if (!selectElement.current?.contains(e.target)) {
            setcheckDisplayNotice(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });
    return (
        <div>
            <img className='cursor-poiter' onClick={() => setcheckDisplayNotice(!checkDisplayNotice)} src="https://banner2.cleanpng.com/20190926/pcg/transparent-basic-icons-icon-bell-icon-notification-icon-5d8d57bac00ec7.2987967515695441227867.jpg" alt="" />
            {checkDisplayNotice && (
                <div className="notice white-shadow cursor-poiter">
                    <h4>Thong bao</h4>
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