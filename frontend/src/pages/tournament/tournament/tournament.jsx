import TournamentShow from '../../../components/tournament/tournamentShow/tournamentShow'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Error from '../../error/error'
import { getTournaments } from '../../../lib/functions'

function Tournament() {
  const { idTournament } = useParams()

  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getTournamentsList() {
      const data = await getTournaments()
      if (data) {
        setTournaments(data)
        setLoading(false)
      }
    }
    getTournamentsList()
  }, [])

  const foundId = tournaments.find(
    (tournament) => tournament.id === idTournament
  )

  if (!foundId) {
    return <Error />
  }
  return (
    <div key={foundId.id}>
      {loading ? <h1>Chargement</h1> : <TournamentShow />}
    </div>
  )
}

export default Tournament
