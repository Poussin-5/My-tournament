//import './touranmentList.scss'

import { Link } from 'react-router-dom'
import TournamentItem from '../../../components/tournament/tournamentCard/tournamentCard'
import { useState, useEffect } from 'react'
import { getTournaments } from '../../../lib/functions'

function TournamentList() {
  const [tournaments, setTournaments] = useState(null)
  const [loading, setLoading] = useState(true)
  const displayTournaments = () =>
    tournaments ? (
      tournaments.map((tournament) => (
        <TournamentItem size={2} tournament={tournament} key={tournament.id} />
      ))
    ) : (
      <h1>Vide</h1>
    )

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

  return (
    <div className="div-tournament">
      <section>{loading ? <h1>Chargement</h1> : displayTournaments()}</section>
      <Link to="/nouveau-tournois">Créez mon tournois</Link>
    </div>
  )
}

export default TournamentList
