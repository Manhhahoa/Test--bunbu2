import React from 'react';
import OneCoust from './OneCoust'
import { Coust } from '../../interface/coust_interface/CoustInterface';
type Props = {
    coust: Coust[]
}
const ProCoust = ({ coust }: Props) => {
    return (
        <div className='free-coust d-flex'>
            {
                coust.map((coust) => {
                    return <OneCoust img={coust.imgsrc} coustName={coust.name} id={coust.id} />
                })
            }
        </div>
    )
}

export default React.memo(ProCoust)
