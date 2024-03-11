import { useForm } from 'react-hook-form'
import { signup } from '../../../lib/functions'

function SignupForm() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm()

  const onSubmit = async (data, e) => {
    signup(data)
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="div-form-sigin">
        <h2>Créer votre compte</h2>
        <label htmlFor="email">Identifiant</label>
        <input name="email" id="email" type="text" {...register('email')} />
        {errors.id && <span>{errors.id.message}</span>}

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

export default SignupForm
