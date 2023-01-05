import Selectionbar from '../../selection_bar/Selectionbar'
import '../.././css/cssCoust/CoustList.scss'
import FreeCoust from './FreeCoust'
const CoustList = () => {
    return (
        <div>
            <Selectionbar></Selectionbar>
            <div className='coust'>
                <div className='coust-title'>
                    <h1>Khóa học</h1>
                    <p>Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu</p>
                </div>
                <div className='pro-coust'>
                    <h1>Khóa học Pro
                    </h1>
                    <FreeCoust />
                </div>
            </div>
        </div>
    )
}

export default CoustList
