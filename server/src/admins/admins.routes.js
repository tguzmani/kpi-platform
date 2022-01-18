const express = require('express')
const router = express.Router()
const adminsController = require('./admins.controller')

const { auth } = require('../middleware/auth')
const uploadImage = require('../middleware/uploadImage')

router.get('/profile', auth, adminsController.readProfile)

router.get('/logo', auth, adminsController.readLogo)
router.put('/logo', [auth, uploadImage], adminsController.updateLogo)

module.exports = router
