import React from 'react'

import { TableCell, TableRow } from '@mui/material'
import ActiveIndicator from './../layout/ActiveIndicator'

const ReportsTableRow = ({ report }) => {
  return (
    <TableRow>
      <TableCell align='center'>{report.workspaceName}</TableCell>

      <TableCell align='center'>{report.name}</TableCell>
      <TableCell align='center'>{report.section}</TableCell>
      <TableCell align='center'>
        <ActiveIndicator active={report.active} />
      </TableCell>
    </TableRow>
  )
}

export default ReportsTableRow
