const sharp = require('sharp')
const Tournament = require('../models/tournament')
const fs = require('fs')

exports.getAllTournament = (req, res, next) => {
  Tournament.find()
    .then((Tournament) => {
      res.status(200).json(Tournament)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

exports.createTournament = async (req, res, next) => {
  if (req.file) {
    const filetypes = /jpeg|jpg|png|gif/
    const isValid = filetypes.test(req.file.mimetype)
    const tournamentObject = JSON.parse(req.body.tournament)
    if (tournamentObject.minTeam < 0) {
      return res.status(400).json({
        message: 'Vous ne pouvez pas entrer de chiffre négatif ',
      })
    }
    if (tournamentObject.maxTeam - tournamentObject.minTeam < 0) {
      return res.status(400).json({
        message:
          "Le nombre maximum d'équipe doit être supérieur ou égale au nombre minimum",
      })
    }
    if (!isValid) {
      return res.status(400).json({ message: "ceci n'est pas une image!" })
    } else {
      let compressName = `images/compress_${req.file.filename}`
      await sharp(req.file.path)
        .resize({ heigth: 200, width: 200 })
        .toFile(compressName)

      delete tournamentObject._id
      delete tournamentObject._userId

      const tournament = new Tournament({
        ...tournamentObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/${compressName}`,
      })

      tournament
        .save()
        .then(() => {
          res.status(201).json({ message: 'Objet enregistré !' })
        })
        .catch((error) => {
          res.status(400).json({ error })
        })

      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error(err)
        } else {
          // Suppression réussie !
        }
      })
    }
  } else {
    return res.status(400).json({ message: "il n'y a pas d'image" })
  }
}
