import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useForm from './../../hooks/useForm'
import DayJS from 'react-dayjs'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import CheckIcon from '@mui/icons-material/Check'

import FormField from './../layout/FormField'

import SaveIcon from '@mui/icons-material/Save'

import { updateContract } from '../../state/contracts/contractsActions'

import useTimeout from '../../hooks/useTimeout'
import ContractDetail from './ContractDetail'

const Contract = () => {
  const dispatch = useDispatch()
  const { countries, regions, zones } = useSelector(state => state.locations)
  const { currencies, loading: currenciesLoading } = useSelector(
    state => state.currencies
  )
  const { identificationDocuments, loading: identificationDocumentsLoading } =
    useSelector(state => state.identificationDocuments)

  const { contract, loading: contractsLoading } = useSelector(
    state => state.contracts
  )

  const [contractFields, bindField, areFieldsEmpty, setFields] = useForm({
    countryId: '',
    regionId: '',
    zoneId: '',
  })

  const [feedback, activateFeedback] = useTimeout()

  React.useEffect(() => {
    setFields(contract)
  }, [contract])

  if (
    !contract ||
    regions.length === 0 ||
    countries.length === 0 ||
    zones.length === 0
  )
    return <div>Cargando...</div>

  const thisContractCurrency = currencies.find(
    currency => currency.id === contract.currencyId
  )

  const thisCountryRegions = regions.filter(
    region => region.countryId === contractFields.countryId
  )
  const thisRegionZones = zones.filter(
    zone => zone.regionId === contractFields.regionId
  )

  const thisCountryIdentificationDocument = identificationDocuments.find(
    identificationDocument =>
      identificationDocument.countryId === contractFields.countryId
  )

  console.log('identificationDocuments', identificationDocuments)

  const handleUpdateContract = () => {
    dispatch(
      updateContract({ ...contractFields, contractName: contractFields.name })
    )

    console.log(feedback)
    activateFeedback()
  }

  return (
    <>
      <Grid container spacing={8}>
        <Grid lg={5} md={12} item>
          <Grid container alignItems='center'>
            <FormField label='País'>
              <FormField.Select
                {...bindField('countryId')}
                options={countries}
                optionValue='id'
                display='name'
              />
            </FormField>
            <FormField label={thisCountryIdentificationDocument?.type}>
              <FormField.TextField
                {...bindField('identificationDocumentValue')}
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
                {...bindField('regionId')}
                options={thisCountryRegions}
                optionValue='id'
                display='name'
              />
            </FormField>
            <FormField label='Comuna'>
              <FormField.Select
                {...bindField('zoneId')}
                options={thisRegionZones}
                optionValue='id'
                display='name'
              />
            </FormField>
          </Grid>
        </Grid>
        <Grid lg={7} md={12} item mt={2}>
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
                <Typography variant='body1'>
                  {thisContractCurrency?.code}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ContractDetail contract={contract} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent='flex-end'>
        <Stack alignItems='center' direction='row' spacing={1}>
          {feedback && (
            <>
              <CheckIcon color='success' />
              <Typography variant='body1' color='success'>
                Guardado
              </Typography>
            </>
          )}
          <Tooltip title='Guardar cambios'>
            <IconButton onClick={handleUpdateContract}>
              <SaveIcon fontSize='large' color='success' />
            </IconButton>
          </Tooltip>
        </Stack>
      </Grid>
    </>
  )
}

export default Contract
