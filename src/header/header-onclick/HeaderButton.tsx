import React, { useEffect, useRef } from 'react'
interface Props {
    text: string,
    clickedOutside: boolean,
    setClickedOutside: (e: boolean) => void;
}
const HeaderButton = ({ text, setClickedOutside, clickedOutside }: Props) => {
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
        <button onClick={handleClickInside}>
            {text}
        </button>
    )
}

export default HeaderButton