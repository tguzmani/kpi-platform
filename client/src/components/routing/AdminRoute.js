import React from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import useAdmin from '../../hooks/useAdmin'

const AdminRoute = ({ children }) => {
  const isAdmin = useAdmin()

  return isAdmin ? <Layout>{children}</Layout> : <Navigate to='/login' />
}

export default AdminRoute
