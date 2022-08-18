import React, { useState } from 'react'
import '../App.css';
import { sidebarData } from './SidebarData';
import { Link } from 'react-router-dom'
import './Hamburger.css'

const HamburgerComponent = () => {

    const [sidebar, setSidebar] = useState(false);


    const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
        <div className='hamburger' onClick={showSidebar}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        </div>

        {/* CREATING THE NAV ITSELF */}

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <div className='navbar-close'>
                        <span className='bar-close-left'></span>
                        <span className='bar-close-right'></span>
                    </div>
                </li>

                {sidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.classname}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </>
  )
}

export default HamburgerComponent