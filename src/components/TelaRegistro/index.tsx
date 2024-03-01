'use client'
import React from 'react'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormHelperText,
} from '@mui/material'
import { useFormik } from 'formik'

import validationsForm from './validation'

const diasDaSemana = [
  { name: 'Seg' },
  { name: 'Ter' },
  { name: 'Qua' },
  { name: 'Qui' },
  { name: 'Sex' },
  { name: 'Sab' },
  { name: 'Dom' },
]

const TelaRegistro = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      fullname: '',
      email: '',
      city: '',
      check: [],
    },
    validationSchema: validationsForm,
    onSubmit: values => {
      alert(JSON.stringify(values))
    },
  })

  return (
    <div>
      <div className="mt-16 ms-72 me-72 w-82 px-8 h-[700px] bg-transparent border border-double border-[#E0E0E0] rounded-xl flex flex-col">
        <div className="flex w-full mt-1">
          <span className="font-semibold text-xs mt-12 text-[#919191]">REGISTRO</span>
        </div>
        <div className="mt-5 w-full flex justify-between">
          <form className="w-full flex flex-col gap-x-10" onSubmit={formik.handleSubmit}>
            <div className="w-full flex gap-x-10">
              <div className="w-[calc(50%-12px)] flex flex-col gap-y-5">
                <TextField
                  className="w-full"
                  required
                  id="username"
                  name="username"
                  label="Nome de Usuário"
                  variant="filled"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                />
                <TextField
                  className="w-full"
                  id="fullname"
                  required
                  name="fullname"
                  label="Nome Completo"
                  variant="filled"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                />
                <TextField
                  className="w-full"
                  id="email"
                  required
                  name="email"
                  type="email"
                  label="Email"
                  variant="filled"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
              </div>

              <div className="w-[calc(50%-12px)] flex flex-col gap-y-3">
                <TextField
                  className="w-full"
                  id="city"
                  required
                  name="city"
                  label="Cidade"
                  variant="filled"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                />
                <span className="font-semibold text-xs mt-8 text-[#919191]">DIAS DA SEMANA</span>
                <FormControl
                  required
                  error={formik.touched.check && Boolean(formik.errors.check)}
                  component="fieldset"
                >
                  <FormGroup className="flex flex-row">
                    {diasDaSemana.map(dia => (
                      <FormControlLabel
                        key={dia.name}
                        label={dia.name}
                        name="check"
                        value={dia.name}
                        onChange={formik.handleChange}
                        control={
                          <Checkbox
                            sx={{
                              color: '#7E50CE',
                              '&.Mui-checked': {
                                color: '#7E50CE',
                              },
                            }}
                          />
                        }
                      />
                    ))}
                  </FormGroup>
                  {formik.touched.check && Boolean(formik.errors.check) && (
                    <FormHelperText>Selecione pelo menos um dia</FormHelperText>
                  )}
                </FormControl>
              </div>
            </div>
            <div className="flex justify-between mt-20 w-80">
              <Button
                type="submit"
                className="w-[calc(50%-12px)] rounded-full bg-[#7E50CE] px-3 py-4 text-xs text-white font-bold transition duration-300 ease-in-out hover:bg-[#5B3B83] focus:outline-none"
              >
                REGISTRAR
              </Button>
              <Button
                type="button"
                className="w-[calc(50%-12px)] rounded-full border-none bg-transparent text-[#7E50CE] font-bold px-3 py-4 text-xs hover:bg-[#5B3B83] transition duration-300 ease-in-out focus:outline-none hover:text-white hover:font-thin"
              >
                CANCELAR
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TelaRegistro
