import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import NewsletterSignup from '../components/NewsLetterSignup'


const MainNavigation = () => {

  
    return (
        <>
        <header className={classes.header}>

            <ul className={classes.list}>
                <li><NavLink to='/' end className={({ isActive }) => isActive ? classes.active : undefined}>Home Page</NavLink></li>
                <li><NavLink to='/events' className={({ isActive }) => isActive ? classes.active : undefined}>Event Page</NavLink></li>
                <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
                {/* <li><NavLink to='/events/new' className={({ isActive }) => isActive ? classes.active : undefined}>New Event Page</NavLink></li> */}

            </ul>
            <NewsletterSignup />
        </header>
       
        </>
    )
}

export default MainNavigation
