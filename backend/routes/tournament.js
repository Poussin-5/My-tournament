const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const tournamentCtrl = require('../controllers/tournament')

router.get('/', tournamentCtrl.getAllTournament)
router.post('/', auth, multer, tournamentCtrl.createTournament)

module.exports = router
