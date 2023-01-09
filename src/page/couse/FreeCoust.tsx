import OneCoust from './OneCoust'
type Coust = {
    imgsrc: string;
    name: string;
    timelearn: number;
}
type Props = {
    coust: Coust[]
}
const FreeCoust = ({ coust }: Props) => {
    return (
        <div className='free-coust d-flex'>
            {coust &&
                coust.map((coust) => {
                    return <OneCoust img={coust.imgsrc} coustName={coust.name} />
                })
            }
        </div>
    )
}

export default FreeCoust
