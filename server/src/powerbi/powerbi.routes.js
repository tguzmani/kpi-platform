const express = require('express')
const router = express.Router()
const powerbiController = require('./powerbi.controller')

const { auth } = require('../middleware/auth')

router.get('/token', auth, powerbiController.getAccessToken)
router.post('/reportData', auth, powerbiController.getReportData)

module.exports = router
