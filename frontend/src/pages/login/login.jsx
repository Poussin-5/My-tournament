import LoginForm from '../../components/forms/login-form/loginForm'
import { Link } from 'react-router-dom'

function Login({ setUser }) {
  return (
    <div>
      <LoginForm setUser={setUser} />
      <Link to="/signup">Créer mon compte</Link>
    </div>
  )
}

export default Login
