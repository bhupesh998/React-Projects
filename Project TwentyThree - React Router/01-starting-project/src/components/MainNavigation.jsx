import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'


// to support link that should show us wheather they led to currently active page or not rewact router dom has an
// alternative to the link componet the NavLink component
// it has a special property if you use a className property on it that className takes a function
// this function should return the classname that should be added to anchor tag, that function also automatically receives the object from which we can take multiple propertries
// one of which is isActive, it will be true if the link led to currently active route else false

// in application home and products both routes were active even when we are on home because home route start with / so both routes were getting considered
// so we use end property - this link will only be considered active if currently active route ends with this path on which it is used
const MainNavigation = () => {
  return (
   <header className={classes.header}>
    <nav>
        <ul className={classes.list}>
                <li><NavLink  to="/" className={({isActive})=> isActive? classes.active : undefined} end>Home</NavLink></li>
                <li><NavLink to="/products" className={({isActive})=> isActive? classes.active : undefined } end>Products</NavLink></li>
                <li><NavLink  to="" className={({isActive})=> isActive? classes.active : undefined} end>Home with Relative Path</NavLink></li>
                <li><NavLink to="products" className={({isActive})=> isActive? classes.active : undefined } end>Products with Relative Path</NavLink></li>
        </ul>
    </nav>
   </header>
  )
}

export default MainNavigation
