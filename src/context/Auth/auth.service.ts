import Cookies from 'js-cookie'
import { AuthCredential, UpdatePassword, User, UserSignup } from './auth.types'
import api, { ApiResponse } from '../../lib/api'

function getCookie() {
  const csrfToken = Cookies.get('XSRF-TOKEN')
  if (csrfToken) return Promise.resolve(csrfToken)
  return api.get('csrf-cookie')
}

async function login(credential: AuthCredential): Promise<User> {
  await getCookie()
  const response = await api.post<ApiResponse<User>>('login', credential)

  return response.data.data
}

async function signUp(user: UserSignup): Promise<User> {
  await getCookie()
  const response = await api.post<ApiResponse<User>>('register', user)

  return response.data.data
}

async function logout(): Promise<unknown> {
  await getCookie()
  const response = await api.delete<ApiResponse>('logout')

  return response.data.data
}

async function getCurrentUser(): Promise<User> {
  const response = await api.get('/me')

  return response.data.data
}

async function updatePassword(password: UpdatePassword): Promise<User> {
  const response = await api.put('/me/changePassword', password)

  return response.data.data
}

export default {
  getCurrentUser,
  updatePassword,
  login,
  signUp,
  logout,
}
