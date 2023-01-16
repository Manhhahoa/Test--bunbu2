import './ShowStudy.scss'
import OneStudy from './OneStudy'
import { Coust } from '../../../interface/coust_interface/CoustInterface'

type Props = {
    value: string,
    data: Coust[]
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
            {data.length > 0 ?
                data.map(value => {
                    return <OneStudy img={value.imgsrc} name={value.name} />
                }) : <div>
                    Không có kết quả phù hợp
                </div>
            }
        </div>
    )
}

export default ShowStudy
