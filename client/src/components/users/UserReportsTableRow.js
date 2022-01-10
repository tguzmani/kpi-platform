import React from 'react'

import { TableCell, TableRow } from '@mui/material'
import ActiveIndicator from '../layout/ActiveIndicator'

const UserReportsTableRow = ({ report }) => {
  return (
    <TableRow>
      <TableCell align='center'>{report.code}</TableCell>

      <TableCell align='center'>{report.reportGroupName}</TableCell>
      <TableCell align='center'>{report.sections}</TableCell>
      <TableCell align='center'>
        <ActiveIndicator active={report.active} />
      </TableCell>
    </TableRow>
  )
}

export default UserReportsTableRow
