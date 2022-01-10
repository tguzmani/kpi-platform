import { useState } from 'react'

const useForm = initialState => {
  const [fields, setFormFields] = useState(initialState)

  const onChange = e => {
    setFormFields({ ...fields, [e.target.name]: e.target.value })
  }

  const bindField = name => ({
    onChange,
    value: fields[name],
    name,
  })

  const areFieldsEmpty = Object.values(fields).some(
    credential => credential === ''
  )

  const setFields = fields => {
    setFormFields(fields)
  }

  return [fields, bindField, areFieldsEmpty, setFields]
}

export default useForm
