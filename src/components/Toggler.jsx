import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from 'react-icons/fa';

export function Toggler () {
    return (
        <ThemeContext.Consumer>
            {({theme, setTheme})=> {
                return <span className="material-symbols-outlined" onClick=
                {()=>{theme=== 'light'? setTheme('dark'): setTheme('light')}}>
                {theme === 'dark'? <FaSun/> : <FaMoon/>}
                
                </span>
            }}
        </ThemeContext.Consumer>
    )
}