import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import dateFormat from 'dateformat'

function TournamentCard({ tournament, size }) {
  const date = dateFormat(tournament.date, 'dd-mm-yyyy')

  let title
  switch (size) {
    case 2:
      title = <h2>{tournament.name}</h2>
      break
    case 3:
      title = <h3>{tournament.name}</h3>
      break
    default:
      title = <h2>{tournament.name}</h2>
      break
  }

  return (
    <Link to={`/tournois/${tournament.id}`}>
      <article>
        <img src={tournament.imageUrl} alt={tournament.name} />
        <div>
          {title}
          <p>date : {date}</p>
          <p>type : {tournament.genre}</p>
          <p> {tournament.comment}</p>
        </div>
      </article>
    </Link>
  )
}

TournamentCard.propTypes = {
  size: PropTypes.number.isRequired,
  tournament: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    genre: PropTypes.string,
    comment: PropTypes.string,
    courtsNumber: PropTypes.arrayOf(PropTypes.number),
    maxTeam: PropTypes.number,
    minTeam: PropTypes.number,
    imageUrl: PropTypes.string,
  }),
}

export default TournamentCard
