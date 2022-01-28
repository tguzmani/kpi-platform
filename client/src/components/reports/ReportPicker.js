import React, { useEffect } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import useForm from './../../hooks/useForm'
import { useSelector, useDispatch } from 'react-redux'
import { readWorkspacesByAdmin } from './../../state/workspaces/workspacesActions'
import useReportsByWorkspace from './../../hooks/useReportsByWorkspace'
import { getReportData } from './../../state/powerbi/powerbiActions'
import Report from './Report'

const ReportPicker = () => {
  const dispatch = useDispatch()
  const { workspaces, loading } = useSelector(state => state.workspaces)
  const { embedUrl } = useSelector(state => state.powerbi)

  useEffect(() => {
    dispatch(readWorkspacesByAdmin())
  }, [])

  const [dropdowns, bindDropdowns] = useForm({
    workspace: '',
    report: '',
    section: '',
  })

  useEffect(() => {
    dispatch(getReportData(dropdowns.workspace, dropdowns.report))
  }, [dropdowns.report])

  const reports = useReportsByWorkspace(dropdowns.workspace)

  if (loading || !workspaces) return <div>Cargando...</div>

  const sections = [{ id: uuidv4, name: 'Página 1' }]

  return (
    <>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Workspace</InputLabel>
            <Select
              labelId='workspace-dropdown'
              label='Workspace'
              {...bindDropdowns('workspace')}
            >
              {workspaces.map(workspace => (
                <MenuItem key={workspace.id} value={workspace.groupIdPBI}>
                  {workspace.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id='report-dropdown'>Reporte</InputLabel>
            <Select
              labelId='report-dropdown'
              label='Reporte'
              {...bindDropdowns('report')}
            >
              {reports.map(report => (
                <MenuItem key={report.id} value={report.reportIdPBI}>
                  {report.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Sección</InputLabel>
            <Select label='Sección' {...bindDropdowns('section')}>
              {sections.map(section => (
                <MenuItem key={section.id} value={section.id}>
                  {section.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {embedUrl && dropdowns.report !== '' && (
        <Report groupId={dropdowns.workspace} reportId={dropdowns.report} />
      )}
    </>
  )
}

export default ReportPicker
