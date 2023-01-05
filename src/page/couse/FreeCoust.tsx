import OneCoust from './OneCoust'

const FreeCoust = () => {
    const ListCouseFree = [
        {
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
            nameCoust: ''
        },
        {
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
            nameCoust: ''
        }
    ]
    return (
        <div>
            {
                ListCouseFree.map((coust) => {
                    return <OneCoust img={coust.img} coustName={coust.nameCoust} />
                })
            }
        </div>
    )
}

export default FreeCoust
