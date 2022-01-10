import React from 'react'
import UsersTable from '../components/users/UsersTable'
import { readUsers } from '../state/users/usersActions'
import {
  readReportGroupsHeadersByAdmin,
  readUsersReportsByAdmin,
} from '../state/reports/reportsActions'
import { Link } from 'react-router-dom'
import useRead from './../hooks/useRead'

const UsersPage = () => {
  useRead(readUsers, readReportGroupsHeadersByAdmin, readUsersReportsByAdmin)

  return (
    <>
      <UsersTable />
      <Link to='/users/create'>Crear</Link>
    </>
  )
}

export default UsersPage
