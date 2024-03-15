import { useForm } from 'react-hook-form'
//import { login } from '../../../lib/functions'
import { useUser } from '../../../lib/customHooks'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { storeInLocalStorage } from '../../../lib/functions'

function LoginForm({ setUser }) {
  const navigate = useNavigate()
  const { user, authenticated } = useUser()

  async function login(data) {
    const user = {
      email: data.email,
      password: data.password,
    }

    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:4000/api/auth/login',
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(user),
      })
      if (!response?.data?.token) {
        console.log('Something went wrong during signing in: ', response)
      } else {
        setUser(response.data)
        storeInLocalStorage(response.data.token, response.data.userId)
        navigate('/')
      }
    } catch (err) {
      console.log(err)
      return { error: true, message: err.message }
    }
  }

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm()

  const onSubmit = async (data, e) => {
    login(data)
    console.log(data)
    reset()
    if (user || authenticated) {
      navigate('/tournois')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="div-form-sigin">
        <h2>Se connecter</h2>
        <label htmlFor="email">Identifiant</label>
        <input
          name="email"
          id="email"
          type="text"
          {...register('email', {
            required: 'Vous devez renseigner une adresse e-mail valide',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Votre e-mail n'est pas valide",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Mot de passe</label>
        <input
          name="password"
          id="password"
          type="password"
          {...register('password')}
        />

        <button type="submit">Se connecter</button>
      </div>
    </form>
  )
}

export default LoginForm
