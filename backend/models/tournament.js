const mongoose = require('mongoose')

const tournamentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  sport: { type: String, required: true },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  date: { type: Date, required: true },
  genre: { type: String, required: true },
  minTeam: { type: Number },
  maxTeam: { type: Number },
  courtsNumber: [{ type: Number }],
  mailContact: { type: String },
  phoneContact: { type: String },
  comment: { type: String },
  eventType: { type: String },
})

module.exports = mongoose.model('Tournament', tournamentSchema)
