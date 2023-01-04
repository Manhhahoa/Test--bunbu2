import '.././header-search/ShowStudy.scss'
import OneStudy from './OneStudy'
const ShowStudy = () => {
    return (
        <div className='pst-absolute showstudy boder-us10 white-shadow'>
            <div className='d-flex'>
                <div className="img-search m-right-8 "></div>
                <p className='fz-low9 opacity-8'> Kết quả tìm kiếm cho </p>
            </div>
            <div className='showmorestudy d-flex'>
                <h4>KHÓA HỌC</h4>
                <p className='fz-low9 opacity-8'>Xem thêm</p>
            </div>
            <hr className='hr' />
            <OneStudy />
        </div>
    )
}

export default ShowStudy