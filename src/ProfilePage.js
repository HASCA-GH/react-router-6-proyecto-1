import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'

const ProfilePage = () => {
  const auth = useAuth()


  return (
    <>
      <h1>Perfil</h1>
      <p>Welcome, {auth.user.userName} </p>
    </>
  )
}

export {ProfilePage}