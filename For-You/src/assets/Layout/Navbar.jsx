import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='top-navbar'>
      <div className="top-items">
        <div className='download-app-title'>
            <p>Download the App for Visit it easily from your Phone to get Better Experience..</p>
            <button>Download</button>
        </div>
      </div>

      <div className="navigation-bar">
        <div className="logo">
          <Link to="/">
            <p>For-you</p>
          </Link>
        </div>
        <div className="right-navbar-items">
          <nav>
            <ul>
              <li><NavLink to={'/'}> Home</NavLink></li>
              <li><NavLink to={'/About'}>About</NavLink></li>
              <li><NavLink to={'/Investment'}>Investment</NavLink></li>
              <li><NavLink to={'/Team-members'}>Team</NavLink></li>
              <li><NavLink to={'/Contact'}>Contact</NavLink></li>
            </ul>
          </nav>
            <div className="account">
              <Link><button>Login</button></Link>
              <Link><button>Resigtration</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}
