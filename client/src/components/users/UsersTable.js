import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import UsersTableRow from './UsersTableRow'
import { useSelector } from 'react-redux'

export default function CollapsibleTable() {
  const { users } = useSelector(state => state.users)

  const headers = [
    'Nombre',
    'Usuario',
    'E-Mail',
    'Grupos',
    'Activo',
    'Acciones',
  ]

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
                align={header !== 'Nombre' ? 'center' : ''}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map(user => (
            <UsersTableRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
