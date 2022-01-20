const express = require('express')
const router = express.Router()
const workspacesController = require('./workspaces.controller')

const hasToken = require('../middleware/hasToken')
const isAdmin = require('../middleware/isAdmin')

router.get('/', [hasToken, isAdmin], workspacesController.readWorkspacesByAdmin)

module.exports = router
