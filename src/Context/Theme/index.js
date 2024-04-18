import React, { createContext, useState,useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("#FFFFFF")
    // const fontColor = theme === "#FFFFFF" ? "#000000" : "#FFFFFF"
    const [fontColor, setFontColor] = useState("#000000");
    const [color, setColor] = useState("#4098e6")

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            setFontColor(storedTheme === "#FFFFFF" ? "#000000" : "#FFFFFF");
        }

        const storedColor = localStorage.getItem('color');
        if (storedColor) {
            setColor(storedColor);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('theme', theme);
        localStorage.setItem('color', color);
        setFontColor(theme === "#FFFFFF" ? "#000000" : "#FFFFFF");
    }, [theme, color]);


    const data = { theme, setTheme, fontColor, color, setColor }

    return <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
}
