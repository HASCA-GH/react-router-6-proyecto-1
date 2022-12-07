import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.text}>
            <NavLink 
              style={({isActive})=>({
                color: isActive ? 'red': 'blue'})}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
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
})
routes.push({
  to:'/blog',
  text: 'Blog',
})
routes.push({
  to:'/profile',
  text: 'Profile',
})
routes.push({
  to:'/login',
  text: 'Login',
})
routes.push({
  to:'/logout',
  text: 'Logout',
})

export {Menu}