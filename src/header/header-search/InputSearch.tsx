import { useEffect, useState } from "react"
import ShowStudy from "./ShowStudy"

const InputSearch = () => {
    const [checkSearch, setCheckSearch] = useState(false)
    const InputChange = (e: any) => {
        if (e.target.value !== '') {
            setCheckSearch(true)
        } else {
            setCheckSearch(false)
        }
    }
    const WindowClick = (e: any) => {
        if (e.target.closest('.showstudy') || e.target.closest('.input-header')) {
            setCheckSearch(true)
        } else {
            setCheckSearch(false)
        }
    }
    useEffect(function () {
        window.addEventListener('click', (e) => WindowClick(e))
        return () => {
            window.removeEventListener('click', WindowClick, false);
        }
    }, [])
    return (
        <div>
            <div className="form-search">
                <div className="header-input ">
                    <div className="img-search"></div>
                    <div className="w-100">
                        <input className="input-header"
                            onChange={(e) => { InputChange(e) }}
                            type="text"
                            placeholder="Tìm kiếm khóa học, bài viết, video..."
                        />
                    </div>
                </div>
            </div>
            {
                checkSearch && <ShowStudy />
            }

        </div>
    )
}

export default InputSearch
