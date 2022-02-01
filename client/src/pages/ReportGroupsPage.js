import React from 'react'
import { useSelector } from 'react-redux'
import ReportsGroups from '../components/reports/ReportGroups'
import {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
} from '../state/reports/reportsActions'
import useRead from './../hooks/useRead'
import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import PositionedButton from './../components/layout/PositionedButton'

const ReportGroupsPage = () => {
  useRead(readReportGroupsHeadersByAdmin, readReportsByAdmin)

  const navigate = useNavigate()

  const { reportsGroups } = useSelector(state => state.reports)

  return (
    <Paper className='container'>
      <ReportsGroups reportsGroups={reportsGroups} />

      <PositionedButton
        onClick={() => navigate('/admins/reports-groups/create')}
        startIcon={<AddIcon />}
        variant='contained'
        justifyContent='flex-end'
      >
        Agregar nuevo grupo
      </PositionedButton>
    </Paper>
  )
}

export default ReportGroupsPage
