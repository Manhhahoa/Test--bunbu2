import React, { useEffect, useRef } from 'react'
interface Props {
    img: string,
    clickedOutside: boolean,
    setClickedOutside: (e: boolean) => void

}
const HeaderImage = ({ img, clickedOutside, setClickedOutside }: Props) => {
    const selectElement = useRef<HTMLHeadingElement>(null);
    const handleClickInside = () => setClickedOutside(!clickedOutside);
    const handleClickOutside = (e: any) => {
        if (!selectElement.current?.contains(e.target)) {
            setClickedOutside(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });
    return (
        <img onClick={handleClickInside} src={img} alt="" />
    )
}

export default HeaderImage