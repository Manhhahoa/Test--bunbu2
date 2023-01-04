interface Props {
  img: string,
  name: string
}
const OneStudy = ({ img, name }: Props) => {
  return (
    <div>
      <div className="d-flex one-study">
        <img className="m-right-8" src={img} alt="" />
        <p className="fz-low9"> {name}</p>
      </div>
    </div>
  )
}

export default OneStudy
