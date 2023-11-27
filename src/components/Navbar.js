import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/Logo.svg'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>
                <img src={logo} alt='' width={160} height={32} loading='lazy'/>
            </Link>

            <nav>
                <ul>
                    {
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    }
                    {
                        <li>
                        <Link to='/about'>About</Link>
                        </li>
                    }
                    {
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar