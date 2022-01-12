export type Breakpoints = string[]

export type MediaQueries = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

export type Spacing = number[]

export interface Colors {
  background: string
  primary: string
  text: string
}

export interface Theme {
  isDark: boolean
  colors: Colors
}
