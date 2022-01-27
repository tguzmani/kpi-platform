import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Routing
import PrivateRoute from './components/routing/PrivateRoute'
import AdminRoute from './components/routing/AdminRoute'

// Pages
import LoginPage from './pages/LoginPage'
import ReportGroupsPage from './pages/ReportGroupsPage'
import UsersPage from './pages/UsersPage'
import ReportsPage from './pages/ReportsPage'
import AccountPage from './pages/AccountPage'
import NotFoundPage from './pages/NotFoundPage'

// Page like Components
import CreateUser from './components/users/CreateUser'
import UpdateUser from './components/users/UpdateUser'
import CreateReport from './components/reports/CreateReport'

// User pages
import UserReportsPage from './pages/UserReportsPage'
import { useDispatch } from 'react-redux'
import { readLogoBySubdomain } from './state/admins/adminsActions'

const adminsRoutes = [
  {
    path: '/reports/groups',
    element: ReportGroupsPage,
  },
  {
    path: '/users',
    element: UsersPage,
  },
  {
    path: '/users/create',
    element: CreateUser,
  },
  {
    path: '/users/update/:userId',
    element: UpdateUser,
  },
  {
    path: '/reports',
    element: ReportsPage,
  },
  {
    path: '/reports/create',
    element: CreateReport,
  },
  {
    path: '/reports/update/:reportsGroupId',
    element: CreateReport,
  },
  {
    path: '/account',
    element: AccountPage,
  },
]

const Router = () => {
  const dispatch = useDispatch()

  let subdomain = window.location.host

  if (subdomain === 'localhost:3000') {
    subdomain = 'testclient'
  } else {
    subdomain = subdomain.split('.')[0]
  }

  console.log('subdomain', subdomain)

  React.useEffect(() => {
    dispatch(readLogoBySubdomain(subdomain))
    console.log('called readLogoBySubdomain')
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        {adminsRoutes.map(route => (
          <Route
            key={route.path}
            path={'/admins' + route.path}
            element={
              <AdminRoute>
                <route.element />
              </AdminRoute>
            }
          />
        ))}

        <Route
          path='/'
          element={
            <PrivateRoute>
              <UserReportsPage />
            </PrivateRoute>
          }
        />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
