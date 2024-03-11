import { Link, useLocation, useNavigate } from 'react-router-dom'

import './header.scss'

function Header({ user, setUser }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const disconnect = () => {
    localStorage.clear()
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="header-nav">
      <h1>
        <Link to="/"></Link>
      </h1>
      <ul>
        <li>
          <Link
            to="/nouveau-tournois"
            className={`${pathname === '/nouveau-tournois' ? 'activ' : null}`}
          >
            Créer mon tournois
          </Link>
        </li>
        <li>
          <Link
            to="/tournois"
            className={`${pathname === '/tournois' ? 'activ' : null}`}
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
          {!user ? (
            <Link
              id="log"
              className={`${pathname === '/login' ? 'activ' : null}`}
              to="login"
            >
              Se connecter
            </Link>
          ) : (
            <Link
              id="logout"
              className={`${pathname === '/login' ? 'activ' : null}`}
              to="/"
              onClick={disconnect}
            >
              Deconnexion
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Header
