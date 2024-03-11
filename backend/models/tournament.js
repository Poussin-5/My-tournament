const mongoose = require('mongoose')

const tournamentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  date: { type: Date, required: true },
  genre: { type: String, required: true },
  minTeam: { type: Number, required: true },
  maxTeam: { type: Number, required: true },
  courtsNumber: [{ type: Number }],
  comment: { type: String },
})

module.exports = mongoose.model('Tournament', tournamentSchema)
