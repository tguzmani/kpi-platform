const express = require('express')
const router = express.Router()
const sectionsController = require('./sections.controller')

const hasToken = require('../middleware/hasToken')
const isAdmin = require('../middleware/isAdmin')

router.get('/', [hasToken, isAdmin], sectionsController.readSectionsByAdmin)

module.exports = router
