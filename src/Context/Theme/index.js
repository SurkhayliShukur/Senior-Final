import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("#FFFFFF")
    const fontColor = theme === "#FFFFFF" ? "#000000" : "#FFFFFF"
    const [color, setColor] = useState("#4098e6")

    const data = { theme, setTheme, fontColor, color, setColor }

    return <ThemeContext.Provider value={data}>
                {children}
            </ThemeContext.Provider>
}
