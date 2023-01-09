type Props = {
    img: string,
    coustName: string,
}
const OneCoust = ({ img, coustName }: Props) => {
    return (
        <div className="one-coust">
            <div className="coust-img">
                <img className="boder-us10" src={img} alt="" />
                <button className="d-none fw-500">Xem khóa học</button>
            </div>
            <h4 className="fw-500">{coustName}</h4>
        </div>
    )
}

export default OneCoust
