import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='top-navbar'>
      <div className="top-items">

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
              <li><Link to={'/'}> Home</Link></li>
              <li><Link to={'/About'}>About</Link></li>
              <li><Link to={'/Investment'}>Investment</Link></li>
              <li><Link to={'/Team-members'}>Team</Link></li>
              <li><Link to={'/Contact'}>Contact</Link></li>
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
