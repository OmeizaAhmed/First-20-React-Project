
import StoreLocalInStorage from "./storeLocalInStorage"
import "./styles.css"


export default function LightDarkMode(){
  const  [theme, setTheme] = StoreLocalInStorage('dark-light', 'light')

  return(<div data-theme={theme} className="container">
    <p>Hello World</p>
    <button onClick={() => setTheme(theme === 'light' ? "dark" : "light")}>Change Theme</button>
  </div>)
}