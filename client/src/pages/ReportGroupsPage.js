import React from 'react'
import { useSelector } from 'react-redux'
import ReportsGroups from '../components/reports/ReportGroups'
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
      <ReportsGroups reports={reports} reportsGroups={reportsGroups} />
    </>
  )
}

export default ReportGroupsPage
