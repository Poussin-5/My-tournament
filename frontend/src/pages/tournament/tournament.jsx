//import './touranment.scss'

import { Link } from 'react-router-dom'

function Tournament() {
  return (
    <div className="div-tournament">
      <Link to="/new-tournament">Créez mon tournois</Link>
    </div>
  )
}

export default Tournament
