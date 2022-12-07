import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'

const LoginPage = () => {
    const auth = useAuth()
    const [userName, setUserName] = React.useState('')

    const login = (e)=>{
        e.preventDefault()
        console.log(userName);
        auth.login({userName})
    }

    if (auth.user) {
        return <Navigate to="/profile" />
    }

  return (
    <>
        <h1>Login</h1>
        <form onSubmit={login}>
            <label>Escribe tu nombre de usuario</label>
            <input 
                type="text" 
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    </>
  )
}

export {LoginPage}