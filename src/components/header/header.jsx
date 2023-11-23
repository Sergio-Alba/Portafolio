/* eslint-disable react/prop-types */
import { NavLink , Link } from 'react-router-dom'
import './header_style.css'


function Header({logo}){
  return (
    <header className='header'>
      <NavLink to={'/'}  className="logo">{logo}</NavLink>
      <nav>
        <ul>
          <Link to='/'><li>Inicio</li></Link>
          <Link to='/projects'><li>Proyectos</li></Link>
          <Link to='/about'><li>Sobre Mí</li></Link>
          <Link to='/contact'><li>Contacto</li></Link>
        </ul>
      </nav>
    </header>

  )
}
export default Header