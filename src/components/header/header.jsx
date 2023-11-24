/* eslint-disable react/prop-types */
import images from '../../assets/images';
import './header_style.css';
import { Link, NavLink } from "react-router-dom"

const Header = () => { 
  return(
    <header className='header'>
      <Link to={'/'}  className="container-logo"><img className='logo' src={images.logo} alt="Sergio" /></Link>
      <input type="checkbox" className="side-menu" id="side-menu" />
      <label htmlFor="side-menu" className="hamb">
        <span className="hamb-line1"></span>
        <span className="hamb-line2"></span>
        <span className="hamb-line3"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <li><NavLink to='/'>Inicio</NavLink></li>
          <li><NavLink to='/projects'>Proyectos</NavLink></li>
          <li><NavLink to='/about'>Sobre Mí</NavLink></li>
          <li><NavLink to='/contact'>Contacto</NavLink></li>
        </ul>
      </nav> 
    </header>
  )
}
export default Header