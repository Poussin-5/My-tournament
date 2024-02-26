import { Link, useLocation } from 'react-router-dom'
/*import { useState } from 'react'*/
import './header.scss'

function Header() {
  const { pathname } = useLocation()
  /* const [log, setLog] = useState(false)

  /* let connected = window.localStorage.getItem('userId')

    if (connected != null) {
    let log = document.querySelector('#log')
    log.innerText = 'Deconnexion'
       log.addEventListener('click', () => {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userId')
    }) 
  } */

  return (
    <nav className="header-nav">
      <h1>
        <Link to="/"></Link>
      </h1>
      <ul>
        <li>
          <Link
            to="/new-tournament"
            className={`${pathname === '/new-tournament' ? 'activ' : null}`}
          >
            Créer mon tournois
          </Link>
        </li>
        <li>
          <Link
            to="/tournament"
            className={`${pathname === '/tournament' ? 'activ' : null}`}
          >
            Les tournois
          </Link>
        </li>
        <li>
          <Link
            to="/a-propos"
            className={`${pathname === '/a-propos' ? 'activ' : null}`}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            id="log"
            className={`${pathname === '/login' ? 'activ' : null}`}
            to="login"
          >
            Se connecter
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
