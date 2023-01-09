import OneCoust from './OneCoust'
type Coust = {
    imgsrc: string;
    name: string;
    timelearn: number;
}
type Props = {
    coust: Coust[]
}
const ProCoust = ({ coust }: Props) => {
    return (
        <div className='free-coust d-flex'>
            {
                coust.map((coust) => {
                    return <OneCoust img={coust.imgsrc} coustName={coust.name} />
                })
            }
        </div>
    )
}

export default ProCoust
