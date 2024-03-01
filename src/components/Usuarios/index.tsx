import { TextField } from '@mui/material'

export function Usuarios() {
  return (
    <>
      <div className="flex w-full">
        <span className="font-bold text-2xl text-[#303030] ms-72 mt-4">Usuários</span>
      </div>
      <div className="mb-12">
        <TextField
          className="relative mb-4 flex w-[1330px] items-stretch mt-12 ms-72 me-72 m-0  "
          id="search"
          label="Procurar"
          variant="filled"
        />
      </div>
    </>
  )
}
