import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Routing
import PrivateRoute from './components/routing/PrivateRoute'
import AdminRoute from './components/routing/AdminRoute'

// Pages
import LoginPage from './pages/LoginPage'
import ReportGroupsPage from './pages/ReportGroupsPage'
import UsersPage from './pages/UsersPage'
import UsersGroupsPage from './pages/UsersGroupsPage'
import ReportsPage from './pages/ReportsPage'
import AccountPage from './pages/AccountPage'
import NotFoundPage from './pages/NotFoundPage'

// Page like Components
import ManageUser from './components/users/ManageUser'
import ChangeUserPassword from './components/users/ChangeUserPassword'
import ManageReportsGroup from './components/reports/ManageReportsGroup'
import TermsAndConditions from './components/termsAndConditions/TermsAndConditionsPage'
import ManageUsersGroups from './components/usersGroups/ManageUsersGroups'

// User pages
import UserReportsPage from './pages/UserReportsPage'

// Actions
import { readTermsAndConditions } from './state/termsAndConditions/termsAndConditionsActions'
import { readLogoBySubdomain } from './state/admins/adminsActions'
import { useDispatch } from 'react-redux'

const adminsRoutes = [
  {
    path: '/reports-groups',
    element: ReportGroupsPage,
  },
  {
    path: '/users',
    element: UsersPage,
  },
  {
    path: '/users/create',
    element: ManageUser,
  },
  {
    path: '/user-groups',
    element: UsersGroupsPage,
  },
  {
    path: '/user-groups/create',
    element: ManageUsersGroups,
  },
  {
    path: '/user-groups/update/:usersGroupId',
    element: ManageUsersGroups,
  },
  {
    path: '/users/update/:userId',
    element: ManageUser,
  },
  {
    path: '/users/change-password/:userId',
    element: ChangeUserPassword,
  },
  {
    path: '/show-report',
    element: ReportsPage,
  },
  {
    path: '/reports-groups/create',
    element: ManageReportsGroup,
  },
  {
    path: '/reports-groups/update/:reportsGroupId',
    element: ManageReportsGroup,
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

  React.useEffect(() => {
    dispatch(readLogoBySubdomain(subdomain))
    dispatch(readTermsAndConditions())
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

        <Route path='/termsAndConditions' element={<TermsAndConditions />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
