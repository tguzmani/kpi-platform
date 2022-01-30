import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import useAdmin from '../../hooks/useAdmin'
import useTermsAndConditions from './../../hooks/useTermsAndConditions'
import roles from './../../constants/roles'
import { readProfile } from '../../state/auth/authActions'
import LayoutLoading from '../layout/LayoutLoading'

const AdminRoute = ({ children }) => {
  const dispatch = useDispatch()
  const isAdmin = useAdmin()
  const userAcceptedTermsAndConditions = useTermsAndConditions()

  const { loading: authLoading } = useSelector(state => state.auth)
  const { loading: termsAndConditionsLoading } = useSelector(
    state => state.auth
  )

  useEffect(() => {
    dispatch(readProfile(roles.ADMIN))
  }, [dispatch])

  if (authLoading || termsAndConditionsLoading) return <LayoutLoading />

  return isAdmin ? (
    !userAcceptedTermsAndConditions ? (
      <Navigate to='/termsAndConditions' />
    ) : (
      <Layout>{children}</Layout>
    )
  ) : (
    <Navigate to='/login' />
  )
}

export default AdminRoute
