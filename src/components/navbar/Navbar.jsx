import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href="#home">Accueil</a></p>
    <p><a href="#whatchamalhat">Portfolio</a></p>
    <p><a href="#wchamalhat">A propos</a></p>
    <p><a href="#features">Contactez-nous</a></p>
    <p><a href="#blog">Blog</a></p>
  </>
)
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='chamalhat__navbar'>
      <div className='chamalhat__navbar-links'>
        <div className='chamalhat__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className = 'chamalhat__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='chamalhat__navbar-sign'>
        <p>Se connecter</p>
        <button type= "button">S'inscrire</button>
      </div>
      <div className='chamalhat__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color= "#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color= "#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='chamalhat__navbar-menu_container scale-up-center'>
            <div className='chamalhat__navbar-menu_container-links'>
            <Menu />
            <div className='chamalhat__navbar-sign'>
          <p>Se connecter</p>
          <button type= "button">S'inscrire</button>
          </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar