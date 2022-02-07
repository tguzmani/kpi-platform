import React from 'react'

import { TableCell, TableRow } from '@mui/material'
import ActiveIndicator from '../layout/ActiveIndicator'
import useResponsive from '../../hooks/useResponsive'

const UsersGroupsReportsGroupsTableRow = ({ reportsGroup }) => {
  const matchMd = useResponsive('md')

  return (
    <TableRow>
      <TableCell align='center'>{reportsGroup.code}</TableCell>

      <TableCell align='center'>{reportsGroup.name}</TableCell>

      <TableCell align='center'>{reportsGroup.sections}</TableCell>
      <TableCell align='center'>
        <ActiveIndicator active={reportsGroup.active} />
      </TableCell>
    </TableRow>
  )
}

export default UsersGroupsReportsGroupsTableRow
