import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Routing
import PrivateRoute from './components/routing/PrivateRoute'
import AdminRoute from './components/routing/AdminRoute'

// Pages
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

// Page like Components
import TermsAndConditions from './components/termsAndConditions/TermsAndConditionsPage'

// Actions
import { readTermsAndConditions } from './state/termsAndConditions/termsAndConditionsActions'
import { readLogoBySubdomain } from './state/admins/adminsActions'
import { useDispatch } from 'react-redux'

import { adminsRoutes, usersRoutes } from './routes'

const Router = () => {
  const dispatch = useDispatch()

  let subdomain = window.location.host

  if (subdomain === 'localhost:3000') {
    subdomain = 'testclient'
  } else {
    subdomain = subdomain.split('.')[0]
  }

  React.useEffect(() => {
    dispatch(readLogoBySubdomain(subdomain))
    dispatch(readTermsAndConditions())
  }, [])

  const roleRoutes = (routes, prefix, AuthComponent) =>
    Object.values(routes).map(route => (
      <Route
        key={route.path}
        path={`/${prefix}${route.path}`}
        element={
          <AuthComponent>
            <route.element />
          </AuthComponent>
        }
      />
    ))

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        {roleRoutes(adminsRoutes, 'admins', AdminRoute)}

        {roleRoutes(usersRoutes, 'users', PrivateRoute)}

        <Route path='/termsAndConditions' element={<TermsAndConditions />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
