const express = require('express')
const router = express.Router()
const reportsController = require('./reports.controller')

const { auth } = require('../middleware/auth')

router.get('/headers', auth, reportsController.readReportGroupsHeadersByAdmin)
router.get('/', auth, reportsController.readReportsByAdmin)
router.get('/account', auth, reportsController.readAccountReportsByAdmin)
router.get('/users', auth, reportsController.readUsersReportsByAdmin)
router.put(
  '/toggleActive/:reportId',
  auth,
  reportsController.updateReportActiveStateByAdmin
)

module.exports = router
