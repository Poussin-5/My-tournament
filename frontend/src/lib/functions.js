import axios from 'axios'

export async function addTournament(data) {
  //const userId = localStorage.getItem('userId')
  let courtsNumberSplit = data.courtsNumber.split(' ')
  let courtsNumber = []
  for (let courtNumber of courtsNumberSplit) {
    courtsNumber.push(courtNumber)
  }
  const tournament = {
    //userId: userId,
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
      method: 'post',
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
