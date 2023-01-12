import React, { useEffect, useRef, useState } from "react"
import { GetApi } from "../../axios/GetApi"
import useClickOutSide from "../../hook/UseClickOutSite"
import ShowStudy from "./ShowStudy"
import { Coust } from '../.././interface/coust_interface/CoustInterface'
import useDebounce from "../../hook/Usedebound"
const InputSearch = () => {
    const [checkSearch, setCheckSearch] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const debouncedValue = useDebounce<string>(inputValue, 1000)
    const selectElement = useRef<HTMLDivElement>(null);
    const handleClickInsite = () => setCheckSearch(false)
    const [datastudy, setDatastudy] = useState<Coust[]>()
    useClickOutSide(selectElement, handleClickInsite)
    const getSearchCoust = async (key: string) => {
        const data = await GetApi('/coust');
        const result: Coust[] = []
        data.map((coust: Coust) => {
            if (coust.name.toLowerCase().includes(key)) {
                result.push(coust)
            }
            return result;
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
        getSearchCoust(inputValue)
    }, [debouncedValue, inputValue])
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
                        checkSearch && datastudy && <ShowStudy value={inputValue} data={datastudy} />
                    }
                </div>
            </div>


        </div>
    )
}

export default InputSearch
