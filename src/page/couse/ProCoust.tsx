import { useSelector } from 'react-redux'
import OneCoust from './OneCoust'
import { RootState } from '../.././redux/Store'
const FreeCoust = () => {
    const coust = useSelector((state: RootState) => state.coust)
    return (
        <div className='free-coust d-flex'>
            {
                coust.slice(4, 7).map((coust) => {
                    return <OneCoust img={coust.imgsrc} coustName={coust.name} />
                })
            }
        </div>
    )
}

export default FreeCoust