import axios from 'axios'

export const ResponseMessage = {
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const

type MessageKey = keyof typeof ResponseMessage

export type MessageType = typeof ResponseMessage[MessageKey]

export interface ApiResponse<T = any> {
  type: MessageType
  message: string
  data: T
  status?: number
}

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TEXT_API_URL,
  withCredentials: true,
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data && response.data.type === ResponseMessage.ERROR) {
      return Promise.reject(response.data)
    }
    return response
  },
  (error) => {
    let { message } = error
    let status
    if (error.response) {
      message = error.response.data.message
      status = error.response.status
    }
    const err: ApiResponse = {
      data: error,
      message,
      type: ResponseMessage.ERROR,
      status,
    }
    return Promise.reject(err)
  },
)

export const fetchLocale = async (locale: string): Promise<Record<string, any>> => {
  const response = await fetch(`/locales/${locale}.json`)
  return response.json()
}

export default axiosClient
