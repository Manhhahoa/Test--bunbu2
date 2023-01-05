import React from 'react'
type Props = {
    img: string,
    coustName: string,
}
const OneCoust = ({ img, coustName }: Props) => {
    return (
        <div>
            <img src={img} alt="" />
        </div>
    )
}

export default OneCoust
