import { useEffect, useRef, useState } from "react"
import useClickOutSide from "../../hook/UseClickOutSite"
import ShowStudy from "./ShowStudy"

const InputSearch = () => {
    const [checkSearch, setCheckSearch] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const selectElement = useRef<HTMLHeadingElement>(null);
    const handleClickInsite = () => setCheckSearch(false)
    const ListStudy: Array<any> = [
        {
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
            nameStudy: 'khóa học 1'
        },
        {
            img: 'https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png',
            nameStudy: 'khóa học 2'
        }
    ]
    useClickOutSide(selectElement, handleClickInsite)
    const inputChange = (e: any) => {
        setInputValue(e.target.value)
        if (e.target.value !== '') {
            setCheckSearch(true)
        } else {
            setCheckSearch(false)
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
        }, 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [inputValue])
    return (
        <div ref={selectElement} onClick={() => {
            if (inputValue !== '') { setCheckSearch(true) }
        }}>
            <div className="form-search">
                <div className="header-input ">
                    <div className="img-search"></div>
                    <div className="w-100">
                        <input className="input-header"
                            onChange={(e) => { inputChange(e) }}
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
