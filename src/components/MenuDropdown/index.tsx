'use client'
import * as React from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { Button } from '@mui/material'

export function MenuDropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ></Button>
      <Paper sx={{ width: 220, maxWidth: '100%' }}>
        <MenuList className="bg-[#3D3D3D]">
          <MenuItem>
            <ListItemText className="text-[#E0E0E0] ">Lista de amigos</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText className="text-[#E0E0E0]">Artigos salvos</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText className="text-[#E0E0E0]">Notificações</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText className="text-[#E0E0E0]">Preferências</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText className="text-[#E0E0E0]">Fechar Sessão</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </>
  )
}
