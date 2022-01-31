import React from 'react'

import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const ManageReportsGroupTableRow = ({ report, onChange }) => {
  return (
    <TableRow>
      <TableCell align='center'>{report.workspaceName}</TableCell>
      <TableCell align='center'>{report.name}</TableCell>
      <TableCell align='center'>{report.section}</TableCell>
      <TableCell align='center'>
        <IconButton onClick={onChange(report.sectionId)}>
          <HighlightOffIcon color='error' />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default ManageReportsGroupTableRow
