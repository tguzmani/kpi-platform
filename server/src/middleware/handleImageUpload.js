const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public')
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

const handleImageUpload = multer({ storage }).any()

module.exports = handleImageUpload
