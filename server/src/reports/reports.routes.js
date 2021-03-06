const express = require('express')
const router = express.Router()
const reportsController = require('./reports.controller')

const hasToken = require('../middleware/hasToken')
const isAdmin = require('../middleware/isAdmin')

router.get(
  '/headers',
  [hasToken, isAdmin],
  reportsController.readReportsGroupsHeadersByAdmin
)
router.get('/', [hasToken, isAdmin], reportsController.readReportsByAdmin)

router.get(
  '/account',
  [hasToken, isAdmin],
  reportsController.readAccountReportsByAdmin
)
router.get(
  '/users',
  [hasToken, isAdmin],
  reportsController.readUsersReportsByAdmin
)

router.put(
  '/toggleActive/:reportId',
  [hasToken, isAdmin],
  reportsController.updateReportActiveStateByAdmin
)

router.put(
  '/groups/:reportsGroupId',
  [hasToken, isAdmin],
  reportsController.updateReportsGroupByAdmin
)

router.post(
  '/groups',
  [hasToken, isAdmin],
  reportsController.createReportsGroupByAdmin
)

module.exports = router
