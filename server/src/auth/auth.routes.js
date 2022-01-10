const express = require('express')
const router = express.Router()
const authController = require('./auth.controller')

const { auth } = require('../middleware/auth')

router.post('/signIn', authController.signIn)
router.post('/signOut', auth, authController.signOut)

router.get('/secret', auth, (req, res) =>
  res.send(`Secret :O (id: ${req.userId})`)
)

module.exports = router
