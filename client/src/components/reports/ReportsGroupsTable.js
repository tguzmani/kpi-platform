import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '@mui/material'
import React from 'react'
import ReportsTableRow from './ReportsGroupsTableRow'

const ReportsGroupsTable = ({ reportsGroups }) => {
  const headers = ['Código', 'Nombre', 'Secciones', 'Activo']

  return (
    <TableContainer component={Paper}>
      <Table>
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
            <ReportsTableRow
              key={reportsGroup.id}
              reportsGroup={reportsGroup}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReportsGroupsTable
