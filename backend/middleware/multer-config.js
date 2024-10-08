const multer = require('multer')

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, callback) => {
    const name = file.originalname

    const extension = MIME_TYPES[file.mimetype]
    const newName = name + Date.now() + '.' + extension

    callback(null, newName)
  },
})

module.exports = multer({ storage: storage }).single('image')
