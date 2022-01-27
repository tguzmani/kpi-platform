import React from 'react'
import AdminAccount from '../components/accounts/AdminAccount'
import useRead from './../hooks/useRead'
import { readAccountReportsByAdmin } from './../state/reports/reportsActions'
import { readLogo } from './../state/admins/adminsActions'
import { readContractByAdmin } from './../state/contracts/contractsActions'
import {
  readCountries,
  readRegions,
  readZones,
} from './../state/locations/locationsActions'

const AccountPage = () => {
  useRead(
    readAccountReportsByAdmin,
    readLogo,
    readContractByAdmin,
    readCountries,
    readRegions,
    readZones
  )

  return <AdminAccount />
}

export default AccountPage
