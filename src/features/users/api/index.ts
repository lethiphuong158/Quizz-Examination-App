import api, { ApiResponse } from '../../../lib/api'
import { User } from '../../../context/Auth/auth.types'

const getUsers = async (routeName: string): Promise<User> => {
  const response = await api.get(`/admin/${routeName}`)

  return response.data.data
}

const addUser = async (user: User): Promise<User> => {
  const response = await api.post<ApiResponse<User>>('/admin/users', user)

  return response.data.data
}

const updateUser = async (user: User): Promise<User> => {
  const response = await api.put<ApiResponse<User>>(`/admin/users/${user.id}`, user)

  return response.data.data
}

const deleteUser = async (userId: number): Promise<User> => {
  const response = await api.delete<ApiResponse<User>>(`admin/users/${userId}`)

  return response.data.data
}

const userService = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
}

export default userService
