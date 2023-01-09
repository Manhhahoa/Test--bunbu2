import { useRef, useState } from 'react'
import useClickOutSide from '../../hook/UseClickOutSite';
import { useSelector } from 'react-redux'
import { RootState } from '../.././redux/Store'
const Study = () => {
    const [checkDisplayStudy, setcheckDisplayStudy] = useState(false)
    const selectElement = useRef<HTMLDivElement>(null);
    const handleClickInsite = () => setcheckDisplayStudy(false)
    const coust = useSelector((state: RootState) => state.coust)
    useClickOutSide(selectElement, handleClickInsite)
    return (
        <div ref={selectElement} className="pst-relative">
            <button onClick={() => setcheckDisplayStudy(!checkDisplayStudy)} className='cursor-poiter' >Khóa học của tôi</button>
            {checkDisplayStudy && (
                <div className="list-study white-shadow">
                    <h4 className='fw-500'>Khóa học của tôi</h4>
                    {coust.slice(0, 4).map((study) => {
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
