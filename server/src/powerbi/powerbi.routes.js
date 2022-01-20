const express = require('express')
const router = express.Router()
const powerbiController = require('./powerbi.controller')

const hasToken = require('../middleware/hasToken')

router.get('/token', hasToken, powerbiController.getAccessToken)
router.post('/reportData', hasToken, powerbiController.getReportData)

module.exports = router
