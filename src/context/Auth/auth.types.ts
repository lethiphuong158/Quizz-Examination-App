import { ApiResponse } from '../../lib/api'

export interface User {
  id?: number
  name: string
  email: string
  birthday: Date | string
  role?: number
  requireChangePassword?: number
}

export interface UserSignup extends User {
  password?: string
  passwordConfirmation?: string
}

export interface AuthCredential {
  email: string
  password: string
  rememberMe: boolean
}

export interface UpdatePassword {
  password: string
  newPassword: string
  newPasswordConfirmation: string
}

export interface AuthProviderState {
  user?: User
  loading: boolean
  error?: ApiResponse | null
}

export interface AuthContextAPI extends AuthProviderState {
  login: (credential: AuthCredential) => void
  signUp: (userSignup: UserSignup) => void
  logout: (redirectTo?: string) => void
  updatePassword: (password: UpdatePassword) => void
}
