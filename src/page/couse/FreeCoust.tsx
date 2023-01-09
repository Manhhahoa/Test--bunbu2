import { useSelector } from 'react-redux'
import OneCoust from './OneCoust'
import { RootState } from '../.././redux/Store'
const FreeCoust = () => {
    const coust = useSelector((state: RootState) => state.coust)
    return (
        <div>
            {
                coust.slice(0, 3).map((coust) => {
                    return <OneCoust img={coust.imgsrc} coustName={coust.name} />
                })
            }
        </div>
    )
}

export default FreeCoust
