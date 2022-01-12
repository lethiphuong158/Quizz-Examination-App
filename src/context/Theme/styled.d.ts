// import original module declarations
import 'styled-components'
import { Breakpoints, Colors, MediaQueries } from './theme.type'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: boolean
    colors: Colors
    breakpoints: Breakpoints
    mediaQueries: MediaQueries
  }
}
