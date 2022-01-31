import React from 'react'

import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import useResponsive from './../../hooks/useResponsive'

const ManageReportsGroupTableRow = ({ report, onChange }) => {
  const matchMd = useResponsive('md')

  return (
    <TableRow>
      {matchMd && <TableCell align='center'>{report.workspaceName}</TableCell>}
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
