import React, { useRef, useState } from "react"
import useClickOutSide from "../../hook/UseClickOutSite"
import ShowStudy from "./ShowStudy"

const InputSearch = () => {
    const [checkSearch, setCheckSearch] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const selectElement = useRef<HTMLDivElement>(null);
    const handleClickInsite = () => setCheckSearch(false)
    const ListStudy: { img: string, nameStudy: string }[] = [
        {
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
            nameStudy: 'khóa học 1'
        },
        {
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png',
            nameStudy: 'khóa học 2'
        },
        {
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png',
            nameStudy: 'khóa học 3'
        },

    ]
    useClickOutSide(selectElement, handleClickInsite)
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if (e.target.value !== '') {
            setCheckSearch(true)
        } else {
            setCheckSearch(false)
        }
    }
    return (
        <div ref={selectElement}>
            <div className="form-search">
                <div className="header-input ">
                    <div className="img-search"></div>
                    <div className="w-100">
                        <input className="input-header"
                            onFocus={() => { inputValue !== '' && setCheckSearch(true) }}
                            onChange={inputChange}
                            type="text"
                            placeholder="Tìm kiếm khóa học, bài viết, video..."
                        />
                    </div>
                </div>
                <div >
                    {
                        checkSearch && <ShowStudy value={inputValue} data={ListStudy} />
                    }
                </div>
            </div>


        </div>
    )
}

export default InputSearch
