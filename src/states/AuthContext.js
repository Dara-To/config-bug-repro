import React, { createContext, useContext, useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

import config from '../utils/config'

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    currentUser: undefined,
    loading: true
  })

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config.firebase)
      console.log("Initializing Firebase instance")
    }

    firebase.auth().onAuthStateChanged(authUser => {
      console.log('onAuthStateChanged')

      if (authUser) {
        setAuthState({
          currentUser: authUser,
          isUserLoggedIn: true,
          loading: false
        })
      } else {
        setAuthState({
          currentUser: undefined,
          isUserLoggedIn: false,
          loading: false
        })
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ ...authState }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export default useAuth