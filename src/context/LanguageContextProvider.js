import React, {createContext, useState} from 'react'

export const LanguageContext = createContext('')

function LanguageContextProvider({children}) {
    const [language, toggleLanguage] = useState('nl');
    const toggleLang = () => {
        if (language === 'nl') {
            toggleLanguage('es');
        } else {
            toggleLanguage('nl');
        }
    }
    return (
        <LanguageContext.Provider value={{
            toggleLang,
            activeLanguage: language
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
