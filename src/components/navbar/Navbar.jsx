import React from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className='chamalhat__navbar'>
      <div className='chamalhat__navbar-links'>
        <div className='chamalhat__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar