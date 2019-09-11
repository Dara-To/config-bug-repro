import React from 'react'
import { AuthProvider } from './src/states/AuthContext'

export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    {element}
  </AuthProvider>
)