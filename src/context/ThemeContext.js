"use client"

const { createContext, useState } = require("react")


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("light");

    const toggle = () => {
        setMode(prev => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )

}