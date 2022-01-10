import React from 'react'
import ReportsTableRow from './ReportsTableRow'

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from '@mui/material'

const ReportsTable = ({ reports }) => {
  const headers = ['Workspace', 'Reporte', 'Sección', 'Activo']

  return (
    <TableContainer component={Paper}>
      <Table size='small'>
        <TableHead>
          <TableRow sx={{ fontWeight: 'bold' }}>
            {headers.map(header => (
              <TableCell
                key={header}
                sx={{ fontWeight: 'bold' }}
                align={header !== 'Nombre' ? 'center' : ''}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {reports.map(report => (
            <ReportsTableRow report={report} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReportsTable
