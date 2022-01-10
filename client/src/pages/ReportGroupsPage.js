import React from 'react'
import { useSelector } from 'react-redux'
import ReportsGroupsTable from '../components/reports/ReportsGroupsTable'
import {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
} from '../state/reports/reportsActions'
import useRead from './../hooks/useRead'

const ReportGroupsPage = () => {
  useRead(readReportGroupsHeadersByAdmin, readReportsByAdmin)

  const { reportsGroups, reports } = useSelector(state => state.reports)

  return (
    <>
      <ReportsGroupsTable reports={reports} reportsGroups={reportsGroups} />
    </>
  )
}

export default ReportGroupsPage
