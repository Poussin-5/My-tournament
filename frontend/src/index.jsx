import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home/home'
import Error from './pages/error/error'
import Header from '../src/components/header'
//import reportWebVitals from '../src/components/header'
import Tournament from './pages/tournament/tournament'
import CreateTournament from './pages/tournament/createTournament/createTournament'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/new-tournament" element={<CreateTournament />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
