import OneCoust from './OneCoust'
import { Coust } from '../../interface/coust_interface/CoustInterface'
type Props = {
    coust: Coust[]
}
const FreeCoust = ({ coust }: Props) => {
    return (
        <div className='free-coust d-flex'>
            {coust &&
                coust.map((coust) => {
                    return <OneCoust img={coust.imgsrc} coustName={coust.name} id={coust.id} />
                })
            }
        </div>
    )
}

export default FreeCoust
