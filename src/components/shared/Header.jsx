import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                {/* La diferencia entre Link y 'a' es que Link renderiza la pagina en cambio 'a' la vuelve a recargar completamente */}
                <li><Link to='/'>e-commerce</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header