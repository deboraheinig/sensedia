import * as yup from 'yup'

const validationsForm = yup.object({
  username: yup.string().required('Campo obrigatório'),
  fullname: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
  check: yup.array().min(1, 'Selecione pelo menos um dia').required('Campo obrigatório'),
})

export default validationsForm
