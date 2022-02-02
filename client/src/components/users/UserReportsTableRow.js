import React from 'react'

import { TableCell, TableRow } from '@mui/material'
import ActiveIndicator from '../layout/ActiveIndicator'
import useResponsive from './../../hooks/useResponsive'

const UserReportsTableRow = ({ report }) => {
  const matchMd = useResponsive('md')

  return (
    <TableRow>
      {matchMd && <TableCell align='center'>{report.code}</TableCell>}

      <TableCell align='center'>{report.reportGroupName}</TableCell>
      {matchMd && (
        <>
          <TableCell align='center'>{report.sections}</TableCell>
          <TableCell align='center'>
            <ActiveIndicator active={report.active} />
          </TableCell>
        </>
      )}
    </TableRow>
  )
}

export default UserReportsTableRow
