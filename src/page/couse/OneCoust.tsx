import { useRef, useState } from "react"
import { deleteOneCoust, putCoust } from "../../axios/GetApi"
import { Modal } from 'antd';
import { useAppDispatch } from "../../redux/Hook";
type Props = {
    img: string,
    coustName: string,
    id: string,
}
const OneCoust = ({ img, coustName, id }: Props) => {
    const refname = useRef<any>(null)
    const refimg = useRef<any>(null)
    const reftime = useRef<any>(null)
    const [idCoust, setIdCoust] = useState('')
    const dispatch = useAppDispatch()
    const clickDeleteCoust = (id: string) => {
        dispatch(deleteOneCoust(id))
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        const data = {
            name: refname.current.value,
            imgsrc: refimg.current.value,
            timelearn: reftime.current.value
        }
        refname.current.value = '';
        refimg.current.value = '';
        reftime.current.value = ''
        dispatch(putCoust(idCoust, data));
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const UpdatOneCoust = (id: string) => {
        setIdCoust(id)
        setIsModalOpen(true)
    }
    return (
        <>
            <div className="one-coust">
                <div className="coust-img">
                    <img className="boder-us10" src={img} alt="" />
                    <button className="d-none fw-500">Xem khóa học</button>
                    <span onClick={() => { clickDeleteCoust(id) }} className="d-none">X</span>
                    <p onClick={() => { UpdatOneCoust(id) }} className="d-none" >Sửa</p>
                </div>
                <h4 className="fw-500">{coustName}</h4>
            </div>
            <Modal className='modal-bar ' title="UPDATE COUST" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input ref={refname} type="text" placeholder='Nhập tên khóa học' />
                <input ref={refimg} type="text" placeholder='Nhập link ảnh' />
                <input ref={reftime} type="text" placeholder='Nhập thời gian học' />
            </Modal>
        </>
    )
}

export default OneCoust
