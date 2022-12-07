import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

const Menu = () => {
  const auth = useAuth()  

    return (
    <nav>
      <ul>
        {routes.map(route =>{
          if (route.publicOnly && auth.user) return null
          if (route.private && !auth.user) return null
            return (
              <li key={route.text}>
              <NavLink 
                style={({isActive})=>({
                  color: isActive ? 'red': 'blue'})}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
            )
        })}
        {/* {routes.map(route => (
          <li key={route.text}>
            <NavLink 
              style={({isActive})=>({
                color: isActive ? 'red': 'blue'})}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))} */}
        {/* <li>
          <Link to={"/"}>HomePage</Link>
        </li>
        <li>
          <Link to={"/blog"}>BlogPage</Link>
        </li>
        <li>
          <Link to={"/profile"}>ProfilePage</Link>
        </li> */}
        {/* <li>
          <NavLink 
            style={({isActive})=>({
              color: isActive ? 'red': 'blue'})}
            to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink 
            style={({isActive})=>({
              color: isActive ? 'red': 'blue'})}
            to={"/blog"}>BlogPage</NavLink>
        </li>
        <li>
          <NavLink 
            style={({isActive})=>({
              color: isActive ? 'red': 'blue'})}
            to={"/profile"}>ProfilePage</NavLink>
        </li> */}
      </ul>
    </nav>
  )
}

const routes = []
routes.push({
  to:'/',
  text: 'Home',
  private: false
})
routes.push({
  to:'/blog',
  text: 'Blog',
  private: false
})
routes.push({
  to:'/profile',
  text: 'Profile',
  private: true
})
routes.push({
  to:'/login',
  text: 'Login',
  private: false,
  publicOnly: true
})
routes.push({
  to:'/logout',
  text: 'Logout',
  private: true
})

export {Menu}