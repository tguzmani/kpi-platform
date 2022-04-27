import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from '@mui/material'
import useForm from '../../hooks/useForm'

import { readWorkspacesByAdmin } from '../../state/workspaces/workspacesActions'
import { readSectionsByAdmin } from '../../state/sections/sectionsActions'
import { readReportsByAdmin } from '../../state/reports/reportsActions'

import Report from './Report'
import Loading from '../layout/Loading'
import FormField from '../layout/FormField'
import useRead from '../../hooks/useRead'

import _ from 'lodash'

const ReportPicker = () => {
  useRead(readWorkspacesByAdmin, readSectionsByAdmin, readReportsByAdmin)

  const { workspaces, loading } = useSelector(state => state.workspaces)
  const { sections } = useSelector(state => state.sections)
  const { reports } = useSelector(state => state.reports)

  const [dropdowns, bindField, areAnyDropdownsEmpty, setDropdowns] = useForm({
    workspaceId: '',
    reportId: '',
    sectionId: '',
  })

  useEffect(() => {
    setDropdowns({ ...dropdowns, sectionId: '' })
  }, [dropdowns.reportId])

  const thisWorkspaceReports = _.uniqBy(
    reports.filter(report => report.workspaceId === dropdowns.workspaceId),
    'id'
  )

  const thisReportSections = sections.filter(
    section => section.reportId === dropdowns.reportId
  )

  if (loading || !workspaces)
    return (
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Loading height={80} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Loading height={80} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Loading height={80} />
        </Grid>
      </Grid>
    )

  return (
    <>
      <Grid container spacing={3} mb={4} alignItems='center'>
        <Grid item xs={12} md={4}>
          <FormField label='Workspace'>
            <FormField.Select
              {...bindField('workspaceId')}
              options={workspaces}
              optionValue='id'
              display='name'
            />
          </FormField>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormField label='Reporte'>
            <FormField.Select
              {...bindField('reportId')}
              options={thisWorkspaceReports}
              optionValue='id'
              display='name'
            />
          </FormField>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormField label='Sección'>
            <FormField.Select
              {...bindField('sectionId')}
              options={thisReportSections}
              optionValue='id'
              display='name'
            />
          </FormField>
        </Grid>
      </Grid>

      {!areAnyDropdownsEmpty && (
        <Report
          workspaceId={dropdowns.workspaceId}
          reportId={dropdowns.reportId}
          sectionId={dropdowns.sectionId}
        />
      )}
    </>
  )
}

export default ReportPicker
