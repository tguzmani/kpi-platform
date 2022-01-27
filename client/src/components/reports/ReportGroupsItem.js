import React from 'react'
import {
  Grid,
  IconButton,
  Collapse,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
} from '@mui/material'
import ActiveIndicator from '../layout/ActiveIndicator'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import ReportsTable from './ReportsTable'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ReportsGroupsTableRow = ({ reportsGroup }) => {
  const { reports } = useSelector(state => state.reports)
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false)

  const handleToggleCollapse = () => {
    setOpen(!open)
  }

  const handleEdit = () => {
    navigate(`/admins/reports/update/${reportsGroup.id}`)
  }

  const thisGroupReports = reports.filter(
    report => report.reportGroupId === reportsGroup.id
  )

  return (
    <>
      <ListItem dense>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={4}>
            <ListItemText>
              <Typography variant='body1'>{reportsGroup.code}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={4}>
            <ListItemText>
              <Typography variant='body1'>{reportsGroup.name}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={2}>
            <ListItemText>
              <Typography variant='body1'>{reportsGroup.sections}</Typography>
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemText>
              <ActiveIndicator active={reportsGroup.active} />
            </ListItemText>
          </Grid>
          <Grid item xs={1}>
            <ListItemSecondaryAction>
              <IconButton onClick={handleToggleCollapse}>
                <VisibilityIcon color='primary' />
              </IconButton>

              <IconButton onClick={handleEdit}>
                <EditIcon color='success' />
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

export default ReportsGroupsTableRow
