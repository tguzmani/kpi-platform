import React from 'react'
import Users from '../components/users/Users'
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
      <Users />
      <Link to='/users/create'>Crear</Link>
    </>
  )
}

export default UsersPage
