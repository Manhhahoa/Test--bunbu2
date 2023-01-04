import '.././header-search/ShowStudy.scss'
import OneStudy from './OneStudy'
interface Props {
    value: string,
    data: Array<any>
}
const ShowStudy = ({ value, data }: Props) => {
    return (
        <div className='pst-absolute show-study boder-us10 white-shadow'>
            <div className='d-flex'>
                <div className="img-search m-right-8 "></div>
                <p className='fz-low9 opacity-8'> Kết quả tìm kiếm cho "{value}"</p>
            </div>
            <div className='showmore-study d-flex'>
                <h4>KHÓA HỌC</h4>
                <p className='fz-low9 opacity-8'>Xem thêm</p>
            </div>
            <hr className='hr' />
            {
                data.map(value => {
                    return <OneStudy img={value.img} name={value.nameStudy} />
                })
            }
        </div>
    )
}

export default ShowStudy