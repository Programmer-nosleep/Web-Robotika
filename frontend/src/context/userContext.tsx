import React, { useState, createContext, useEffect } from "react";
import type { ReactNode } from 'react'

import axiosInstance from '@/helper/axios'
import { API_PATHS } from "@/helper/api";
// import { create } from "domain";

interface User {
  _id: string
  name: string
  email: string
  token: string
  role?: 'admin' | 'user'
}

interface UserContextType {
  user: User | null
  loading: boolean
  updated: (userData: User) => void
  clearUser: () => void
}


interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null> (null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (user)
      return

    const accessToken = localStorage.getItem('token')

    if (!accessToken) {
      setLoading(false)
      return
    }

    const fetchuser = async (): Promise<void> => {
      try {
        const response = await axiosInstance.get<User>(API_PATHS.AUTH.GET_PROFILE) 
      } catch (error: unknown) {
        if (error instanceof Error)
          console.log(`User not authenticated. ${error}`)        
        clearUser()
      } finally {
        setLoading(false)
      }
    }
  
    fetchuser()
  }, [user])

  const updated = (userData: User) => {
    setUser(userData)

    localStorage.setItem('token', userData.token)
    setLoading(false)
  }

  const clearUser = () => {
    setUser(null)
    localStorage.removeItem('token')
  }
  return (
    <UserContext.Provider value={{ user, loading, updated, clearUser }}>
      {children}
    </UserContext.Provider>
  )
}