import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home/home'
import Error from './pages/error/error'
import Header from './components/header/header'
//import reportWebVitals from '../src/components/header'

import CreateTournament from './pages/tournament/createTournament/createTournament'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'
import TournamentList from './pages/tournament/tournamentList/tournamentList'
import Tournament from './pages/tournament/tournament/tournament'
import { useUser } from './lib/customHooks'

function App() {
  const [user, setUser] = useState()
  const { connectedUser } = useUser()

  useEffect(() => {
    setUser(connectedUser)
  }, [connectedUser])
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/tournois" element={<TournamentList />} />
        <Route path="/nouveau-tournois" element={<CreateTournament />} />
        <Route path="/tournois/:idTournament" element={<Tournament />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
