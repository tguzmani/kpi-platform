import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import UsersReportsGroupsTableRow from './UsersReportsGroupsTableRow'

const UsersReportsGroupsTable = ({ selectReportGroupsHandlers }) => {
  const headers = ['Código', 'Nombre', 'Secciones', 'Activo']
  const { reportsGroups } = useSelector(state => state.reports)

  return (
    <TableContainer component={Paper}>
      <Table size='small'>
        <TableHead>
          <TableRow sx={{ fontWeight: 'bold' }}>
            <TableCell />
            {headers.map(header => (
              <TableCell
                key={header}
                sx={{ fontWeight: 'bold' }}
                align={header !== 'Código' ? 'center' : ''}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {reportsGroups.map(reportsGroup => (
            <UsersReportsGroupsTableRow
              key={reportsGroup.id}
              reportsGroup={reportsGroup}
              selectReportGroupsHandlers={selectReportGroupsHandlers}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UsersReportsGroupsTable
