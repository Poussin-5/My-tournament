import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { addTournament } from '../../../lib/functions'

function TournamentForm(tournament, validate) {
  const [genre, setGenre] = useState('')
  const onOptionChange = (e) => {
    setGenre(e.target.value)
  }

  const {
    register,
    formState: { errors },
    // reset,
    handleSubmit,
  } = useForm()

  const onSubmit = async (data, e) => {
    addTournament(data)
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="div-form-tournament">
        <h2>Crée mon tournois</h2>

        <label htmlFor="name">Nom du tournois</label>
        <input
          name="name"
          id="name"
          type="text"
          {...register('name', { required: 'Vous devez renseigner un nom' })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <label htmlFor="file">Affiche du tournois</label>
        <input name="file" id="file" type="file" {...register('file')} />
        {errors.file && <span>{errors.file.message}</span>}

        <label htmlFor="date">Date du tournois</label>
        <input
          name="date"
          id="date"
          type="date"
          {...register('date', {
            required: 'Vous devez selectionner une date',
          })}
        />
        {errors.date && <span>{errors.date.message}</span>}

        <p>
          Genre :
          <input
            name="genre"
            type="radio"
            value="male"
            id="male"
            checked={genre === 'male'}
            onClick={onOptionChange}
            {...register('genre', {
              required: 'Vous devez rensiegner un type de tournois',
            })}
          />
          <label htmlFor="male">Masculin</label>
          <input
            name="genre"
            type="radio"
            value="female"
            id="female"
            checked={genre === 'female'}
            onClick={onOptionChange}
            {...register('genre', {
              required: 'Vous devez rensiegner un type de tournois',
            })}
          />
          <label htmlFor="feminin">Féminin</label>
          <input
            name="genre"
            type="radio"
            value="mixte"
            id="mixte"
            checked={genre === 'mixte'}
            onClick={onOptionChange}
            {...register('genre', {
              required: 'Vous devez rensiegner un type de tournois',
            })}
          />
          <label htmlFor="mixte">Mixte</label>
        </p>
        {errors.genre && <span>{errors.genre.message}</span>}

        <label htmlFor="minTeam">Nombre minium d'équipes</label>
        <input
          name="minTeam"
          id="minTeam"
          type="number"
          {...register('minTeam', {
            required: "Vous devez renseigner un nombre minimale d'équipe",
          })}
        />
        {errors.minTeam && <span>{errors.minTeam.message}</span>}

        <label htmlFor="maxTeam">Nombre maximum d'équipes</label>
        <input
          name="maxTeam"
          id="maxTeam"
          type="number"
          {...register('maxTeam', {
            required: "Vous devez renseigner un nombre maximale d'équipe",
          })}
        />
        {errors.maxTeam && <span>{errors.maxTeam.message}</span>}

        <label htmlFor="courtsNumber">Numéro des terrains</label>
        <input
          name="courtsNumber"
          id="courtsNumber"
          type="textarrea"
          placeholder="Remplir uniquement avec des chiffres"
          {...register('courtsNumber')}
        />

        <label htmlFor="comment">Commentaire infos complémentaire</label>
        <input
          name="comment"
          id="comment"
          type="textarrea"
          placeholder="Buvette sur place, gymnase en cas de replis"
          {...register('comment')}
        />

        <button type="submit">Créer mon tournois</button>
      </div>
    </form>
  )
}

export default TournamentForm
