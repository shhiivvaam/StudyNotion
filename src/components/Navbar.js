import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

import logo from '../assets/Logo.svg'

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
    return (
        <div className='flex justify-evenly'>
            <Link to='/'>
                <img src={logo} alt='' width={160} height={32} loading='lazy'/>
            </Link>

            <nav>
                <ul className='flex gap-3'>
                    {
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    }
                    {
                        <li>
                        <Link to='/'>About</Link>
                        </li>
                    }
                    {
                        <li>
                            <Link to='/'>Contact</Link>
                        </li>
                    }
                </ul>
            </nav>

            {/* buttons -> Signup - Logout - Dashboard */}

            <div className='flex ml-5 mr-3 gap-3'>
                { !isLoggedIn &&
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to='/signup'>
                        <button>Signup</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to='/'>
                        <button
                        onClick={() => { setIsLoggedIn(false);
                                        toast.success("Logged Out") }}>
                            Logout
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to='/dashboard'>
                        <button>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar