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
import ChangePassword from './pages/ChangePassword'

// User pages
import UserReportsPage from './pages/UserReportsPage'

export const adminsRoutes = {
  reportsGroups: {
    path: '/reports-groups',
    element: ReportGroupsPage,
  },
  users: {
    path: '/users',
    element: UsersPage,
  },
  createUser: {
    path: '/users/create',
    element: ManageUser,
  },
  usersGroups: {
    path: '/user-groups',
    element: UsersGroupsPage,
  },
  createUsersGroup: {
    path: '/user-groups/create',
    element: ManageUsersGroups,
  },
  updateUsersGroups: {
    path: '/user-groups/update/:usersGroupId',
    element: ManageUsersGroups,
  },
  updateUser: {
    path: '/users/update/:userId',
    element: ManageUser,
  },
  changeUserPassword: {
    path: '/users/change-password/:userId',
    element: ChangeUserPassword,
  },
  showReport: {
    path: '/show-report',
    element: ReportsPage,
  },
  createReportsGroup: {
    path: '/reports-groups/create',
    element: ManageReportsGroup,
  },
  updateReportsGroup: {
    path: '/reports-groups/update/:reportsGroupId',
    element: ManageReportsGroup,
  },
  account: {
    path: '/account',
    element: AccountPage,
  },
  changePassword: { path: '/changePassword', element: ChangePassword },
}

export const usersRoutes = {
  changePassword: { path: '/changePassword', element: ChangePassword },
  showReport: { path: '/reports', element: UserReportsPage },
}
