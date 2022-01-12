import { DefaultTheme } from 'styled-components'
import * as variables from './theme.variables'

const ThemeLight: DefaultTheme = {
  ...variables,
  isDark: false,
  colors: {
    background: '#fff',
    primary: '#000',
    text: '#000',
  },
}

export default ThemeLight
