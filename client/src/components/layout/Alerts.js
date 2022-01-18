import React, { useEffect, useState, useRef } from 'react'

import MuiAlert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const Alerts = () => {
  const { message, loading } = useSelector(state => state.auth)
  const [alerts, setAlerts] = useState([])
  const isMountRef = useRef(true)

  useEffect(() => {
    const alertId = uuidv4()

    setAlerts([message, ...alerts])

    setTimeout(() => {
      setAlerts(alerts.filter(alert => alert.id === alertId))
    }, 2000)
  }, [message])

  const [show, setShow] = useState(true)

  return (
    <>
      {/* <Collapse in={alerts.length > 0}>
        <Box my={2}>
          <Stack alignItems='center'>
            <MuiAlert severity='error'>{alerts[0]?.message}</MuiAlert>
          </Stack>
        </Box>
      </Collapse> */}
    </>
  )
}

export default Alerts
