import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { addTournament } from '../../../lib/functions'

function TournamentForm() {
  const [genre, setGenre] = useState('')
  const onOptionChange = (e) => {
    setGenre(e.target.value)
  }

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm()

  const onSubmit = async (data, e) => {
    addTournament(data)
    console.log(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="div-form-tournament">
        <h2>Créer mon tournoi</h2>
        <label htmlFor="selectedSport">Selectionner le sport:</label>
        <select
          name="selectedSport"
          {...register('sport', {
            required: 'Vous devez selcetionner un sport',
          })}
        >
          <option value="Volley">Volley</option>
          <option value="Football">Football</option>
          <option value="Rugby">Rugby</option>
          <option value="Pétanque">Pétanque</option>
          <option value="Biière-Pong">Biière-Pong</option>
          <option value="Fléchette">Fléchette</option>
        </select>
        {errors.selectedSport && <span>{errors.selectedSport.message}</span>}

        <label htmlFor="name">Nom du tournois</label>
        <input
          name="name"
          id="name"
          type="text"
          {...register('name', { required: 'Vous devez renseigner un nom' })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <label htmlFor="selectedType">
          Selectionner le type d'evennement :
        </label>
        <select
          name="selectedType"
          {...register('typeEvent', {
            required: 'Vous devez selcetionner une option',
          })}
        >
          <option value="Publique">Publique</option>
          <option value="Privée">Privée</option>
        </select>
        {errors.selectedType && <span>{errors.selectedType.message}</span>}

        <label htmlFor="file">Affiche du tournoi</label>
        <input name="file" id="file" type="file" {...register('file')} />
        {errors.file && <span>{errors.file.message}</span>}

        <label htmlFor="date">Date du tournoi</label>
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
            value="masculin"
            id="male"
            checked={genre === 'masculin'}
            onClick={onOptionChange}
            {...register('genre', {
              required: 'Vous devez rensiegner un type de tournois',
            })}
          />
          <label htmlFor="male">Masculin</label>
          <input
            name="genre"
            type="radio"
            value="féminin"
            id="female"
            checked={genre === 'féminin'}
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
          <input
            name="genre"
            type="radio"
            value="open"
            id="open"
            checked={genre === 'open'}
            onClick={onOptionChange}
            {...register('genre', {
              required: 'Vous devez rensiegner un type de tournois',
            })}
          />
          <label htmlFor="mixte">Open</label>
        </p>
        {errors.genre && <span>{errors.genre.message}</span>}

        <label htmlFor="minTeam">Nombre minium d'équipes</label>
        <input
          name="minTeam"
          id="minTeam"
          type="number"
          min="0"
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
          min="0"
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

        <label htmlFor="mailContact">Contact mail</label>
        <input
          name="mailContact"
          id="mailContact"
          type="textarrea"
          placeholder="mail"
          {...register('mailContact')}
        />

        <label htmlFor="phoneContact">Contact téléphone</label>
        <input
          name="phoneContact"
          id="phoneContact"
          type="textarrea"
          placeholder="0000000000"
          {...register('phoneContact')}
        />

        <label htmlFor="comment">
          Commentaire et informations complémentaires
        </label>
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
