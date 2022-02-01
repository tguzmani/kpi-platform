import React from 'react'
import ReportsTable from '../reports/ReportsTable'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ActiveIndicator from '../layout/ActiveIndicator'

import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'

import {
  Grid,
  IconButton,
  Collapse,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
} from '@mui/material'

import List from '@mui/material/List'

import ReportGroupsItem from '../reports/ReportGroupsItem'
import useResponsive from '../../hooks/useResponsive'
import useSelectionList from './../../hooks/useSelectionList'

const ManageUsersReportsGroupsItem = ({
  reportsGroup,
  toggleSelectedReportsGroup,
  selectedReportsGroups,
}) => {
  const { reports } = useSelector(state => state.reports)
  const navigate = useNavigate()
  const matchMd = useResponsive('md')

  const [open, setOpen] = React.useState(false)

  const handleToggleCollapse = () => {
    setOpen(!open)
  }

  const thisGroupReports = reports.filter(
    report => report.reportGroupId === reportsGroup.id
  )

  return (
    <>
      <ListItem dense>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={3} md={1}>
            <ListItemText>
              <Checkbox
                checked={selectedReportsGroups.includes(reportsGroup.id)}
                onClick={toggleSelectedReportsGroup(reportsGroup.id)}
              />
            </ListItemText>
          </Grid>

          {matchMd && (
            <Grid item md={4}>
              <ListItemText>
                <Typography variant='body1'>{reportsGroup.code}</Typography>
              </ListItemText>
            </Grid>
          )}

          <Grid item xs={9} md={4}>
            <ListItemText>
              <Typography variant='body1'>{reportsGroup.name}</Typography>
            </ListItemText>
          </Grid>

          {matchMd && (
            <>
              <Grid item md={1}>
                <ListItemText>
                  <Typography variant='body1'>
                    {reportsGroup.sections}
                  </Typography>
                </ListItemText>
              </Grid>
              <Grid item md={1}>
                <ListItemText>
                  <ActiveIndicator active={reportsGroup.active} />
                </ListItemText>
              </Grid>
            </>
          )}

          <Grid item xs={2} md={1}>
            <ListItemSecondaryAction>
              <IconButton onClick={handleToggleCollapse}>
                <VisibilityIcon color='primary' />
              </IconButton>
            </ListItemSecondaryAction>
          </Grid>
        </Grid>
      </ListItem>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <ReportsTable reports={thisGroupReports} />
      </Collapse>
    </>
  )
}

export default ManageUsersReportsGroupsItem
