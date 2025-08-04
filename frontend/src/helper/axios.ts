import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

import { BASE_URL } from './api'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
}) 

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = localStorage.getItem('token')

    if (accessToken && config.headers) 
      config.headers.Authorization = `Bearer ${accessToken}`

    return config
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error) 
  }
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response
  },
  (error: AxiosError): Promise<never> => {
    if (error.response)
    {
      const status = error.response.status

      switch(status) {
        case 401:
          window.location.href = '/'
          break
        case 500:
          console.log(`Server an error. Please try again..`)
          break;
        default:
          console.log("cannot have access denied.")
      }
    } else if (error.code === 'ECONNABORTED') {
      console.error("Request timeout. Please try again..")
    }

    return Promise.reject(error)
  }
)

export default axiosInstance