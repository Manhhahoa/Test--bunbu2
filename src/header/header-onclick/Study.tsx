import { useEffect, useRef, useState } from 'react'
import { ListStudy } from "../DataHeader";
const Study = () => {
    const [checkDisplayStudy, setcheckDisplayStudy] = useState(false)
    const selectElement = useRef<HTMLHeadingElement>(null);
    const handleClickOutside = (e: any) => {
        if (!selectElement.current?.contains(e.target)) {
            setcheckDisplayStudy(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });
    return (
        <div>
            <button onClick={() => setcheckDisplayStudy(!checkDisplayStudy)} className='cursor-poiter' >Khóa học của tôi</button>
            {checkDisplayStudy && (
                <div className="list-study white-shadow">
                    <h4>Khóa học của tôi</h4>
                    {ListStudy.map((study) => {
                        return (
                            <div className="d-flex img-study">
                                <img src={study.imgsrc} alt="" />
                                <div>
                                    <h5>{study.name}</h5>
                                    <p>Học cách đây {study.timelearn} tháng trước</p>
                                    <div className="percent">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

        </div>
    )
}

export default Study