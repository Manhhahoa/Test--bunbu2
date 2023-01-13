import React from 'react';
import '../.././css/cssCoust/CoustList.scss'
import FreeCoust from './FreeCoust'
import ProCoust from './ProCoust'
import { useAppSelector } from '../../redux/Hook';
const CoustList = () => {
    const coust = useAppSelector(state => state.coust)
    return (
        <div>

            <div className='coust'>
                <div className='coust-title'>
                    <h1>Khóa học</h1>
                    <p>Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu</p>
                </div>
                <div className='pro-coust'>
                    <h1>Khóa học Pro
                    </h1>
                    {coust && <ProCoust coust={coust.slice(4, 7)} />}
                    <h1>Khoá học miễn phí</h1>
                    {coust && <FreeCoust coust={coust.slice(0, 4)} />}
                </div>
            </div>
        </div>
    )
}

export default React.memo(CoustList)
