import React from 'react'

import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import TableBody from '@mui/material/TableBody'

import UsersGroupsUsersTableRow from './UsersGroupsUsersTableRow'

import useResponsive from './../../hooks/useResponsive'

const UsersGroupsUsers = ({ users }) => {
  const matchMd = useResponsive('md')

  const headersMd = ['Nombre', 'Usuario', 'Email', 'Activo']

  const headersXs = ['Nombre', 'Usuario']

  const headers = matchMd ? headersMd : headersXs

  return (
    <>
      <Typography my={2} variant='h6' align='center'>
        Usuarios asociados a este grupo:
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
            {users.map(user => (
              <UsersGroupsUsersTableRow key={user.sectionId} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default UsersGroupsUsers
