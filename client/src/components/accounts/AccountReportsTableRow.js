import React from 'react'

import { TableCell, TableRow, Switch } from '@mui/material'
import { updateReportActiveStateByAdmin } from '../../state/reports/reportsActions'
import { useDispatch } from 'react-redux'

const AccountReportsTableRow = ({ report }) => {
  const [checked, setChecked] = React.useState(report.active === 1)
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
