import React, { useContext } from 'react'
import { ReactComponent as FlagNL } from '../assets/netherlands.svg';
import { ReactComponent as FlagES } from '../assets/spain.svg';
import { LanguageContext } from "../context/LanguageContextProvider";

const LanguageSwitch = () => {
    const { toggleLang, activeLanguage } = useContext(LanguageContext);
    console.log(activeLanguage)

    return (
        <button type='button' onClick={toggleLang}>{activeLanguage==='nl' ? <FlagES/> : <FlagNL/>}</button>
    )
}

export default LanguageSwitch
