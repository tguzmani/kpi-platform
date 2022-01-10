const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public')
  },

  filename: (req, file, callback) => {
    const fileExtension = file.mimetype.replace('image/', '')

    console.log('file', file)
    callback(null, `${req.userId}-${file.originalname}-logo.${fileExtension}`)
  },
})

const upload = multer({ storage }).any()

module.exports = upload
