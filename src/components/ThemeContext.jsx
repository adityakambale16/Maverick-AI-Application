import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

function reducerFun(theme, action){
    switch(action.type){
        case "THEME_TOGGLE" : {
            return theme === 'light' ? 'dark' : 'light'
        }

        default:
            return theme
    }
}

const ThemeProvider = ({children}) => {
    const[theme, dispatch] = useReducer(reducerFun, 'light')
    return(
        <ThemeContext.Provider value={{theme, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider