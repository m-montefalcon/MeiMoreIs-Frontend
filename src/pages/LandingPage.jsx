import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

const LandingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigateTo = useNavigate()

  useEffect(() => {
    const jwtCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)jwtToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    )
    const userData = localStorage.getItem('userData') // Get userData from localStorage

    if (jwtCookie || userData) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
      navigateTo('/login') // Redirect to login page if not authenticated
    }
  }, [navigateTo]) // Include navigateTo in the dependency array to avoid missing updates

  return isAuthenticated ? <HomePage /> : <LoginPage />
}

export default LandingPage
