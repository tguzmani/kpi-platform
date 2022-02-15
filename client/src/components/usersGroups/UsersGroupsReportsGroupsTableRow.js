import React from 'react'

import { TableCell, TableRow, Checkbox } from '@mui/material'
import ActiveIndicator from '../layout/ActiveIndicator'
import useResponsive from '../../hooks/useResponsive'

const UsersGroupsReportsGroupsTableRow = ({
  reportsGroup,
  readOnly,
  onChange,
  selectedReportsGroups,
}) => {
  const matchMd = useResponsive('md')

  return (
    <TableRow>
      {!readOnly && (
        <TableCell align='center'>
          <Checkbox
            sx={{ padding: 0, margin: 0 }}
            onChange={onChange(reportsGroup.id)}
            checked={selectedReportsGroups.includes(reportsGroup.id)}
          />
        </TableCell>
      )}
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