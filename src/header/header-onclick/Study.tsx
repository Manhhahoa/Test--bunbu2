import { useRef, useState } from 'react'
import { GetApi } from '../../axios/GetApi';
import useClickOutSide from '../../hook/UseClickOutSite';
const Study = () => {
    type Coust = {
        imgsrc: string;
        name: string;
        timelearn: number;
    }
    const [checkDisplayStudy, setcheckDisplayStudy] = useState(false)
    const [loading, setLoading] = useState(false)
    const selectElement = useRef<HTMLDivElement>(null);
    const handleClickInsite = () => setcheckDisplayStudy(false)
    useClickOutSide(selectElement, handleClickInsite)
    const [coust, setCoust] = useState<Coust[]>()
    const myCoust = async () => {
        setcheckDisplayStudy(!checkDisplayStudy)
        if (!checkDisplayStudy) {
            setLoading(true)
            setCoust(await GetApi('/coust'))
            setLoading(false)
        }

    }
    return (
        <div ref={selectElement} className="pst-relative">
            <button onClick={myCoust} className='cursor-poiter' >Khóa học của tôi</button>
            {checkDisplayStudy && (
                <div className="list-study white-shadow">
                    <h4 className='fw-500'>Khóa học của tôi</h4>
                    {coust && coust.slice(0, 4).map((study) => {
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
                    {loading &&
                        <div className='d-flex-colum'>
                            <img className='loading-img' src='https://img.idesign.vn/2018/10/23/id-loading-1.gif' alt='' />
                        </div>}
                </div>
            )}

        </div>
    )
}

export default Study
