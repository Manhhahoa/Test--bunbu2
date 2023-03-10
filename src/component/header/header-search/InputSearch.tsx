import React, { useEffect, useRef, useState } from "react"
import useClickOutSide from "../../../hook/UseClickOutSite"
import ShowStudy from "./ShowStudy"
import { Coust } from '../../../interface/coust_interface/CoustInterface'
import useDebounce from "../../../hook/Usedebound"
import { useAppSelector } from "../../../redux/Hook"
const InputSearch = () => {
    const [checkSearch, setCheckSearch] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const debouncedValue = useDebounce<string>(inputValue, 1000)
    const selectElement = useRef<HTMLDivElement>(null);
    const handleClickInsite = () => setCheckSearch(false)
    const [datastudy, setDatastudy] = useState<Coust[]>([])
    useClickOutSide(selectElement, handleClickInsite)
    const data = useAppSelector(state => state.coust)
    const getSearchCoust = (key: string) => {
        const result: Coust[] = data.filter((coust: Coust) => {
            return coust.name.toLowerCase().includes(key)
        })
        setDatastudy(result)
    }
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if (e.target.value !== '') {
            setCheckSearch(true)
        } else {
            setCheckSearch(false)
        }
    }
    useEffect(() => {
        getSearchCoust(debouncedValue)
    }, [debouncedValue])
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
                        checkSearch && <ShowStudy value={inputValue} data={datastudy} />
                    }
                </div>
            </div>


        </div>
    )
}

export default InputSearch
