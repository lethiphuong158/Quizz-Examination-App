import { DefaultTheme } from 'styled-components'
import * as variables from './theme.variables'

const ThemeDark: DefaultTheme = {
  ...variables,
  isDark: true,
  colors: {
    background: '#000',
    primary: '#fff',
    text: '#fff',
  },
}
export default ThemeDark
