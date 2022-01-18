import React from 'react'
import AdminAccount from '../components/accounts/AdminAccount'
import useRead from './../hooks/useRead'
import { readAccountReportsByAdmin } from './../state/reports/reportsActions'
import { readLogo } from './../state/admins/adminsActions'

const AccountPage = () => {
  useRead(readAccountReportsByAdmin, readLogo)

  return (
    <div>
      <AdminAccount />
    </div>
  )
}

export default AccountPage
