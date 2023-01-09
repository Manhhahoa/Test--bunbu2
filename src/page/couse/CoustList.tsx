import '../.././css/cssCoust/CoustList.scss'
import FreeCoust from './FreeCoust'
import ProCoust from './ProCoust'
const CoustList = () => {
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
                    <ProCoust />
                    <h1>Khoá học miễn phí</h1>
                    <FreeCoust />
                </div>
            </div>
            <button >xoa</button>
        </div>
    )
}

export default CoustList
