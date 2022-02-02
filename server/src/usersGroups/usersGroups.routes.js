const express = require('express')
const router = express.Router()
const usersGroupsController = require('./usersGroups.controller')

const hasToken = require('../middleware/hasToken')
const isAdmin = require('../middleware/isAdmin')

router.get('/', [hasToken, isAdmin], usersGroupsController.readUsersGroups)

module.exports = router
