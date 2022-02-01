const express = require('express')
const router = express.Router()
const usersController = require('./users.controller')
const usersAuthController = require('./users.auth.controller')

const hasToken = require('../middleware/hasToken')
const isAdmin = require('../middleware/isAdmin')
const isUser = require('../middleware/isUser')

router.get('/profile', [hasToken, isUser], usersController.readProfile)

// Admin
router.get('/', [hasToken, isAdmin], usersController.readUsersByAdminId)
router.get('/', [hasToken, isAdmin], usersController.readUsersByAdminId)
router.post('/', [hasToken, isAdmin], usersController.createUserByAdmin)
router.put('/:userId', [hasToken, isAdmin], usersController.updateUser)

// Auth
router.post('/signIn', usersAuthController.signIn)
router.post('/signOut', usersAuthController.signOut)

router.get('/secret', [hasToken, isUser], (req, res) =>
  res.send(`SUCCESS: User private route (id: ${req.userId})`)
)

module.exports = router
