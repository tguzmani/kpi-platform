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
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <ReportGroupsPage />
                </PrivateRoute>
              }
            />
            <Route
              path='/users'
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              }
            />
            <Route
              path='/users/create'
              element={
                <PrivateRoute>
                  <CreateUser />
                </PrivateRoute>
              }
            />
            <Route
              path='/users/:userId'
              element={
                <PrivateRoute>
                  <UpdateUser />
                </PrivateRoute>
              }
            />
            <Route
              path='/reports'
              element={
                <PrivateRoute>
                  <ReportsPage />
                </PrivateRoute>
              }
            />
            <Route
              path='/account'
              element={
                <PrivateRoute>
                  <AccountPage />
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
