import React from 'react'
import { useSelector } from 'react-redux'
import useForm from './../../hooks/useForm'
import DayJS from 'react-dayjs'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import FormField from './../layout/FormField'

import SaveIcon from '@mui/icons-material/Save'

const Contract = () => {
  const { countries, regions, zones } = useSelector(state => state.locations)

  const { contract } = useSelector(state => state.contracts)

  const [contractFields, bindField, areFieldsEmpty] = useForm({
    ...contract,
  })

  const thisCountryRegions = regions.filter(
    region => region.countryId === contractFields.countryId
  )
  const thisRegionZones = zones.filter(
    zone => zone.regionId === contractFields.regionId
  )

  console.log('contractFields', contractFields)

  return (
    <>
      <Grid container spacing={3}>
        <Grid lg={5} md={12} item>
          <Grid container alignItems='center'>
            <FormField label='País'>
              <FormField.Select
                fieldValue={contractFields.countryId}
                {...bindField('countryId')}
                options={countries}
                value='id'
                display='name'
              />
            </FormField>
            <FormField label='Empresa'>
              <FormField.TextField {...bindField('name')} />
            </FormField>
            <FormField label='Dirección'>
              <FormField.TextField {...bindField('address')} />
            </FormField>
            <FormField label='Región'>
              <FormField.Select
                fieldValue={contractFields.regionId}
                {...bindField('regionId')}
                options={thisCountryRegions}
                value='id'
                display='name'
              />
            </FormField>
            <FormField label='Comuna'>
              <FormField.Select
                fieldValue={contractFields.zoneId}
                {...bindField('zoneId')}
                options={thisRegionZones}
                value='id'
                display='name'
              />
            </FormField>
          </Grid>
        </Grid>
        <Grid lg={7} md={12} item>
          <Grid container>
            <Grid item xs={12} md>
              <Stack>
                <Stack direction='row' spacing={2}>
                  <Typography variant='accent'>
                    Fecha Inicio contrato:
                  </Typography>
                  <Typography variant='body1'>
                    <DayJS format='DD-MM-YYYY'>{contract.created_at}</DayJS>
                  </Typography>
                </Stack>
                <Stack direction='row' spacing={2}>
                  <Typography variant='accent'>
                    Fecha Ultima modificación:
                  </Typography>
                  <Typography variant='body1'>
                    <DayJS format='DD-MM-YYYY'>{contract.updated_at}</DayJS>
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md>
              <Stack direction='row' spacing={2}>
                <Typography variant='accent'>Moneda:</Typography>
                <Typography variant='body1'>[MONEDA]</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent='flex-end'>
        <Tooltip title='Guardar cambios'>
          <IconButton>
            <SaveIcon fontSize='large' color='success' />
          </IconButton>
        </Tooltip>
      </Grid>
    </>
  )
}

export default Contract
