import React from 'react'
import { useSelector } from 'react-redux'

import Paper from '@mui/material/Paper'
import Report from '../components/reports/Report'
import ReportPicker from './../components/reports/ReportPicker'

const ReportsPage = () => {
  const groupId = 'f215dfe5-f4a3-44cc-a0f5-fa3de238411e'
  const reportId = 'aa463810-c45c-4cab-a926-0ed948d7c62a'

  return (
    <Paper className='container'>
      <ReportPicker />
      {/* <Report groupId={groupId} reportId={reportId} /> */}
    </Paper>
  )
}

export default ReportsPage
