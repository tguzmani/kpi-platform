import React from 'react'

import useForm from '../../hooks/useForm'
import useToggle from '../../hooks/useToggle'
import useReportsByWorkspace from '../../hooks/useReportsByWorkspace'
import { useSelector, useDispatch } from 'react-redux'

import FormField from '../layout/FormField'
import PositionedButton from '../layout/PositionedButton'

import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import _ from 'lodash'

import {
  readReportGroupsHeadersByAdmin,
  readReportsByAdmin,
} from '../../state/reports/reportsActions'

import useRead from '../../hooks/useRead'

import { readWorkspacesByAdmin } from '../../state/workspaces/workspacesActions'
import { readSectionsByAdmin } from '../../state/sections/sectionsActions'
import { useParams } from 'react-router-dom'
import ManageReportsGroupTable from './ManageReportsGroupTable'

const ManageReport = () => {
  useRead(readReportGroupsHeadersByAdmin, readReportsByAdmin)

  const { reportsGroups, reports } = useSelector(state => state.reports)
  const { workspaces } = useSelector(state => state.workspaces)
  const { sections } = useSelector(state => state.sections)

  const dispatch = useDispatch()

  const initialState = {
    code: '',
    name: '',
    workspace: '',
    report: '',
  }

  const { reportsGroupId } = useParams()

  const thisReportsGroup = reportsGroups.find(
    reportsGroup => reportsGroup.id === parseInt(reportsGroupId)
  )

  const [selectedSections, setSelectedSections] = React.useState(
    thisReportsGroup.sectionsIds
  )

  React.useEffect(() => {
    dispatch(readWorkspacesByAdmin())
    dispatch(readSectionsByAdmin())
  }, [])

  const [reportGroup, bindField, areFieldsEmpty, setFields] =
    useForm(thisReportsGroup)

  const handleChangeSection = sectionId => e => {
    if (selectedSections.includes(sectionId)) {
      setSelectedSections(
        selectedSections.filter(section => section !== sectionId)
      )
    } else {
      setSelectedSections([sectionId, ...selectedSections])
    }
  }

  const thisWorkspaceReports = _.uniqBy(
    reports.filter(report => (report.workspace = reportGroup.workspace)),
    'name'
  )

  const thisReportSections = sections.filter(
    section => section.reportId === reportGroup.report
  )

  const selectedSectionsReports = selectedSections.map(section =>
    reports.find(report => report.sectionId === section)
  )

  const handleCreateReport = () => {
    const workspace = workspaces.find(
      workspace => workspace.groupIdPBI === reportGroup.workspace
    )

    console.log({
      ...reportGroup,
      active,
      workspace: workspace.id,
      sections: selectedSections,
    })
  }
  const [active, handleSwitchChange] = useToggle(true)

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
                fallback=''
              />
            </FormField>

            <FormField label='Secciones'>
              <Box sx={{ maxHeight: 200, overflow: 'auto', marginTop: '1rem' }}>
                <List>
                  {thisReportSections.map(section => (
                    <ListItemButton
                      dense
                      key={section.id}
                      onClick={handleChangeSection(section.id)}
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
        onChange={handleChangeSection}
      />

      <PositionedButton
        onClick={handleCreateReport}
        variant='contained'
        justifyContent='flex-end'
        disabled={areFieldsEmpty || selectedSections.length === 0}
      >
        Guardar cambios
      </PositionedButton>
    </Paper>
  )
}

export default ManageReport
