import React from 'react'
import UserReportsTableRow from './UserReportsTableRow'

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
import useResponsive from './../../hooks/useResponsive'

const UserReportsTable = ({ userId }) => {
  const matchMd = useResponsive('md')

  const headersMd = ['Código', 'Nombre Grupo', 'Secciones', 'Activo']

  const headersXs = ['Nombre Grupo']

  const headers = matchMd ? headersMd : headersXs

  const { usersReports } = useSelector(state => state.reports)

  const thisUserReports = usersReports.filter(
    report => report.userId === userId
  )

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
          {thisUserReports.map(report => (
            <UserReportsTableRow key={report.sectionId} report={report} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserReportsTable
