import React from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import ManageReportsGroupTableRow from './ManageReportsGroupTableRow'
import useResponsive from './../../hooks/useResponsive'

const ManageReportsGroupTable = ({ reports, onChange }) => {
  const headers = ['Workspace', 'Reporte', 'Sección', 'Quitar']

  const matchMd = useResponsive('md')

  return (
    <Box mt={3}>
      {reports.length === 0 ? (
        <Typography mb={3} align='center' variant='h6'>
          No hay secciones de reportes asociadas a este grupo aún
        </Typography>
      ) : (
        <>
          <Typography mb={3} align='center' variant='h6'>
            Secciones de reportes asociadas a este grupo: {reports.length}
          </Typography>

          <TableContainer component={Paper}>
            <Table size='small'>
              <TableHead>
                <TableRow sx={{ fontWeight: 'bold' }}>
                  {headers.map(
                    header =>
                      !matchMd &&
                      headers.indexOf(header) !== 0 && (
                        <TableCell key={header}>{header}</TableCell>
                      )
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {reports.map(report => (
                  <ManageReportsGroupTableRow
                    onChange={onChange}
                    key={report.sectionId}
                    report={report}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  )
}

export default ManageReportsGroupTable
