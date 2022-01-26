import React from 'react'
import { useSelector } from 'react-redux'
import { TableCell, TableRow, Switch, CircularProgress } from '@mui/material'
import { updateReportActiveStateByAdmin } from '../../state/reports/reportsActions'
import { useDispatch } from 'react-redux'
import { readAccountReportsByAdmin } from './../../state/reports/reportsActions'

const AccountReportsTableRow = ({ report }) => {
  const [checked, setChecked] = React.useState(report.active === 1)
  const { loading } = useSelector(state => state.reports)
  const dispatch = useDispatch()

  const handleChange = event => {
    setChecked(event.target.checked)

    const active = checked ? 0 : 1

    dispatch(updateReportActiveStateByAdmin(active, report.id))
  }

  return (
    <TableRow>
      <TableCell align='center'>{report.workspace}</TableCell>

      <TableCell align='center'>{report.name}</TableCell>
      <TableCell align='center'>
        <Switch checked={checked} onChange={handleChange} />
      </TableCell>
    </TableRow>
  )
}

export default AccountReportsTableRow
