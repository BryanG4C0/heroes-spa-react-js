import React from 'react'
import { AuthProvider } from './auth'
import { Outlet } from 'react-router-dom'

export const HeroesApp = () => {
  return (
    <AuthProvider>      
      <Outlet />
    </AuthProvider>    
  )
}