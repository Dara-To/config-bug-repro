import React from "react"
import config from "../utils/config"
import useAuth from "../states/AuthContext"

const Index = () => {
  const { currentUser, isUserLoggedIn, loading } = useAuth()

  return (
    <div>
      <p>BASE_URL: {config.BASE_URL}</p>
      <p>BACKEND_URL: {config.BACKEND_URL}</p>
    </div>
  )
}

export default Index