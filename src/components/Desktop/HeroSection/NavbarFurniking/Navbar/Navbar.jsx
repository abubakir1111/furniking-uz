import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import NavbarApi from './Navbar';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-box">
        {NavbarApi.map((AllCollectionsNavbar) =>
          <Link key={AllCollectionsNavbar.id} className='navbar-box-link'>{AllCollectionsNavbar.navbarText}</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar