import React from 'react'

import useForm from '../../hooks/useForm'
import useToggle from '../../hooks/useToggle'
import { useSelector, useDispatch } from 'react-redux'

import FormField from '../layout/FormField'

import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { useNavigate } from 'react-router-dom'

import _ from 'lodash'

import {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
  updateReportsGroup,
  createReportsGroup,
} from '../../state/reports/reportsActions'

import useRead from '../../hooks/useRead'

import { readWorkspacesByAdmin } from '../../state/workspaces/workspacesActions'
import { readSectionsByAdmin } from '../../state/sections/sectionsActions'
import { useParams } from 'react-router-dom'
import ManageReportsGroupTable from './ManageReportsGroupTable'
import useSelectionList from './../../hooks/useSelectionList'
import LoadingButton from '@mui/lab/LoadingButton'
import useNavigateAfterAction from './../../hooks/useNavigateAfterAction'

const ManageReportsGroup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useRead(
    readReportGroupsHeadersByAdmin,
    readReportsByAdmin,
    readWorkspacesByAdmin,
    readSectionsByAdmin
  )

  const { reportsGroups, reports, loading } = useSelector(
    state => state.reports
  )
  const { workspaces } = useSelector(state => state.workspaces)
  const { sections } = useSelector(state => state.sections)

  const buttonHasBeenClicked = useNavigateAfterAction(
    loading,
    '/admins/reports-groups'
  )

  const initialState = {
    code: '',
    name: '',
    workspace: '',
    report: '',
  }

  let thisReportsGroup = undefined

  const { reportsGroupId } = useParams()

  if (reportsGroupId) {
    thisReportsGroup = reportsGroups.find(
      reportsGroup => reportsGroup.id === parseInt(reportsGroupId)
    )

    thisReportsGroup = {
      ...thisReportsGroup,
      report: thisReportsGroup.sectionsIds[0],
    }
  }

  const [active, handleSwitchChange] = useToggle(true)

  const [selectedSections, toggleSelectedSection] = useSelectionList(
    reportsGroupId ? thisReportsGroup.sectionsIds : []
  )

  const [reportGroup, bindField, areFieldsEmpty] = useForm(
    reportsGroupId ? thisReportsGroup : initialState
  )

  const thisWorkspaceReports = _.uniqBy(
    reports.filter(report => (report.workspace = reportGroup.workspace)),
    'name'
  )

  const thisReportSections = sections.filter(
    section => section.reportId === reportGroup.report
  )

  const selectedSectionsReports = selectedSections
    .map(section => reports.find(report => report.sectionId === section))
    .filter(report => report)

  const handleManageReportsGroup = () => {
    const reportsGroupData = {
      ...reportGroup,
      active,
      workspace: reportGroup.workspace,
      sections: selectedSections,
    }

    dispatch(
      reportsGroupId
        ? updateReportsGroup(reportsGroupData)
        : createReportsGroup(reportsGroupData)
    )

    buttonHasBeenClicked()
  }

  // return <div>{JSON.stringify(selectedSectionsReports)}</div>

  return (
    <Paper className='container'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant='h6' align='center' mb={3}>
            Datos generales del grupo:
          </Typography>

          <Grid container alignItems='center'>
            <FormField label='Código'>
              <FormField.TextField {...bindField('code')} />
            </FormField>

            <FormField label='Nombre'>
              <FormField.TextField {...bindField('name')} />
            </FormField>

            <FormField label='Activo'>
              <Switch checked={active} onChange={handleSwitchChange} />
            </FormField>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant='h6' align='center' mb={3}>
            Secciones asociadas al grupo:
          </Typography>

          <Grid container alignItems='center'>
            <FormField label='Workspace'>
              <FormField.Select
                {...bindField('workspace')}
                options={workspaces}
                optionValue='id'
                display='name'
              />
            </FormField>

            <FormField label='Reporte'>
              <FormField.Select
                disabled={reportGroup.workspace === ''}
                {...bindField('report')}
                options={thisWorkspaceReports}
                optionValue='id'
                display='name'
              />
            </FormField>

            <FormField label='Secciones'>
              <Box sx={{ maxHeight: 200, overflow: 'auto', marginTop: '1rem' }}>
                <List>
                  {thisReportSections.map(section => (
                    <ListItemButton
                      dense
                      key={section.id}
                      onClick={toggleSelectedSection(section.id)}
                    >
                      <Checkbox
                        checked={selectedSections.includes(section.id)}
                      />
                      <ListItemText>{section.name}</ListItemText>
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </FormField>
          </Grid>
        </Grid>
      </Grid>

      <ManageReportsGroupTable
        reports={selectedSectionsReports}
        onChange={toggleSelectedSection}
      />

      <Grid mt={3} container justifyContent='space-between'>
        <Button onClick={() => navigate('/admins/reports-groups')}>
          Cancelar
        </Button>
        <LoadingButton
          loading={loading}
          onClick={handleManageReportsGroup}
          variant='contained'
          disabled={areFieldsEmpty || selectedSections.length === 0}
        >
          {reportsGroupId ? 'Guardar cambios' : 'Crear grupo de reportes'}
        </LoadingButton>
      </Grid>
    </Paper>
  )
}

export default ManageReportsGroup
