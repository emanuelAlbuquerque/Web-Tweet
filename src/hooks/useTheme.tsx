import {useContext, createContext, useState, useEffect, ReactNode} from 'react'

const ThemeContext = createContext<any>('');

interface ThemeProps{
  children: ReactNode;
}

export default function ThemeContextProvider({children}: ThemeProps){
  const [theme, setTheme] = useState(localStorage.getItem("theme") !== 'dark' ? 'light' : 'dark')//O valor inicial vai ser o que está no localStorage

  useEffect(() => {
    const root = window.document.documentElement //Pega o elemento root

    const removeTheme = theme === "dark" ? "light" : "dark" //Remove a classe do root para adicionar a outra

    root.classList.add(theme)//Adiciona a classe do thema
    root.classList.remove(removeTheme)//Remove a classe do thema
    localStorage.setItem("theme", theme)//Salva no localStorage
  }, [theme])

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  return useContext(ThemeContext)
}