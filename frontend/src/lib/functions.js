import axios from 'axios'

export function storeInLocalStorage(token, userId) {
  localStorage.setItem('token', token)
  localStorage.setItem('userId', userId)
}

export async function addTournament(data) {
  const userId = localStorage.getItem('userId')
  let courtsNumberSplit = data.courtsNumber.split(' ')
  let courtsNumber = []
  for (let courtNumber of courtsNumberSplit) {
    courtsNumber.push(courtNumber)
  }

  const tournament = {
    userId: userId,
    name: data.name,
    date: data.date,
    genre: data.genre,
    minTeam: data.minTeam,
    maxTeam: data.maxTeam,
    courtsNumber: courtsNumber,
    comment: data.comment,
  }

  const bodyFormData = new FormData()
  bodyFormData.append('tournament', JSON.stringify(tournament))
  bodyFormData.append('image', data.file[0])
  console.log('tournament', tournament)
  console.log('image', data.file[0])

  try {
    return await axios({
      method: 'POST',
      url: 'http://localhost:4000/api/tournaments',
      data: bodyFormData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  } catch (err) {
    console.error(err)
    return { error: true, message: err.message }
  }
}

export async function signup(data) {
  const user = {
    email: data.email,
    password: data.password,
  }

  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:4000/api/auth/signup',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(user),
    })
    if (!response) {
      console.log('Something went wrong during signup in: ', response)
    } else {
      alert('Vous avez bien créé votre compte')
    }
  } catch (err) {
    console.log(err)
    return { error: true, message: err.message }
  }
}

function formatTournaments(tournamentArray) {
  return tournamentArray.map((tournament) => {
    const newTournament = { ...tournament }
    // eslint-disable-next-line no-underscore-dangle
    newTournament.id = newTournament._id
    return newTournament
  })
}

export async function getTournaments() {
  try {
    const response = await axios({
      method: 'GET',
      url: `http://localhost:4000/api/tournaments`,
    })
    // eslint-disable-next-line array-callback-return
    const tournaments = formatTournaments(response.data)
    return tournaments
  } catch (err) {
    console.error(err)
    return []
  }
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item)
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null }
  try {
    const token = getFromLocalStorage('token')
    const userId = getFromLocalStorage('userId')
    if (!token) {
      return defaultReturnObject
    }
    return { authenticated: true, user: { userId, token } }
  } catch (err) {
    console.error('getAuthenticatedUser, Something Went Wrong', err)
    return defaultReturnObject
  }
}
