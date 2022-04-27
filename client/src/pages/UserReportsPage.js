import React from 'react'
import { useSelector } from 'react-redux'
import UsersReportPicker from './../components/reports/UsersReportPicker'
import { Paper } from '@mui/material'

const UserReportsPage = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <Paper className='container'>
      <UsersReportPicker />
    </Paper>
  )
}

export default UserReportsPage
