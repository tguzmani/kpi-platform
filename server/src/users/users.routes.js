const express = require('express')
const router = express.Router()
const usersController = require('./users.controller')

const { auth } = require('../middleware/auth')

router.get('/', auth, usersController.readUsersByAdminId)
router.post('/', auth, usersController.createUserByAdmin)
router.put('/:userId', auth, usersController.updateUser)

module.exports = router
