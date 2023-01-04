import { useRef, useState } from 'react'
import { ListStudy } from "../DataHeader";
import useClickOutSide from '../../hook/UseClickOutSite';
const Study = () => {
    const [checkDisplayStudy, setcheckDisplayStudy] = useState(false)
    const selectElement = useRef<HTMLHeadingElement>(null);
    const handleClickInsite = () => setcheckDisplayStudy(false)
    useClickOutSide(selectElement, handleClickInsite)
    return (
        <div ref={selectElement} className="pst-relative">
            <button onClick={() => setcheckDisplayStudy(!checkDisplayStudy)} className='cursor-poiter' >Khóa học của tôi</button>
            {checkDisplayStudy && (
                <div className="list-study white-shadow">
                    <h4 className='fw-500'>Khóa học của tôi</h4>
                    {ListStudy.map((study) => {
                        return (
                            <div className="d-flex img-study">
                                <img src={study.imgsrc} alt="" />
                                <div>
                                    <h5 className='fw-500'>{study.name}</h5>
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