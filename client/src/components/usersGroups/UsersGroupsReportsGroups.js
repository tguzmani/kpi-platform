import React from 'react'

import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'

import UsersGroupsReportsGroupsTableRow from './UsersGroupsReportsGroupsTableRow'

import useResponsive from './../../hooks/useResponsive'

const UsersGroupsReportsGroups = ({ reportsGroups }) => {
  const matchMd = useResponsive('md')

  const headersMd = ['Código', 'Nombre', 'Secciones', 'Activo']

  const headersXs = ['Código', 'Nombre']

  const headers = matchMd ? headersMd : headersXs

  return (
    <>
      <Typography my={3} mt={4} variant='h6' align='center'>
        Grupos de reportes asociados a este grupo:
      </Typography>

      <TableContainer component={Paper}>
        <Table size='small'>
          <TableHead>
            <TableRow sx={{ fontWeight: 'bold' }}>
              {headers.map(header => (
                <TableCell
                  key={header}
                  sx={{ fontWeight: 'bold' }}
                  align='center'
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {reportsGroups.map(reportsGroup => (
              <UsersGroupsReportsGroupsTableRow
                key={reportsGroup.id}
                reportsGroup={reportsGroup}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default UsersGroupsReportsGroups
