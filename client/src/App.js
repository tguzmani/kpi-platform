import './App.scss'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'

import LoginPage from './pages/LoginPage'
import ReportGroupsPage from './pages/ReportGroupsPage'
import UsersPage from './pages/UsersPage'
import ReportsPage from './pages/ReportsPage'
import AccountPage from './pages/AccountPage'
import NotFoundPage from './pages/NotFoundPage'

import { Provider } from 'react-redux'
import store from './store'
import CreateUser from './components/users/CreateUser'
import UpdateUser from './components/users/UpdateUser'

import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import GlobalStyles from '@mui/material/GlobalStyles'
import AdminRoute from './components/routing/AdminRoute'
import UserReportsPage from './pages/UserReportsPage'

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
    path: '/account',
    element: AccountPage,
  },
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#FFFCFA' },
        }}
      />
      <Provider store={store}>
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
      </Provider>
    </ThemeProvider>
  )
}

export default App
