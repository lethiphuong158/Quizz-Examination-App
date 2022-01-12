import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider as SCThemeProvider, useTheme } from 'styled-components'
import ThemeDark from './theme.dark'
import ThemeLight from './theme.light'
import { getUserSettingsBy, updateUserSettings } from '../../features/userSettings/userSettings'

interface ThemeContextAPI {
  isDark: boolean
  toggleTheme: () => void
}

const initialState: ThemeContextAPI = {
  isDark: false,
  toggleTheme: () => null,
}

export const ThemeContext = createContext<ThemeContextAPI>(initialState)

const ThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => getUserSettingsBy('isDark') as boolean)

  const toggleTheme = () => {
    setIsDark((prevState) => {
      updateUserSettings('isDark', !prevState)
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? ThemeDark : ThemeLight}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useAppTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const theme = useTheme()
  return { isDark, toggleTheme, theme }
}

export default ThemeProvider
