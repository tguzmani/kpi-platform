import React from 'react'
import AccountReportsTableRow from './AccountReportsTableRow'

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from '@mui/material'
import { useSelector } from 'react-redux'

const AccountReportsTable = () => {
  const headers = ['Workspace', 'Reporte', 'Activar/Desactivar']
  const accountReports = useSelector(state => state.reports.accountReports)

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
          {accountReports.map(report => (
            <AccountReportsTableRow key={report.id} report={report} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AccountReportsTable
