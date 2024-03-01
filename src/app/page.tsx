import { InformacoesPartidas } from '@/components/InformacoesPartidas'
import { Registro } from '@/components/Registro'
import { Usuarios } from '@/components/Usuarios'
import { Footer } from '@/components/Footer'
import TelaRegistro from '@/components/TelaRegistro'
import { Tabela } from '@/components/Tabela'
import { MenuDropdown } from '@/components/MenuDropdown'

export default function Home() {
  return (
    <>
      <InformacoesPartidas />
      <Usuarios />
      <Tabela />
      <Registro />
      <TelaRegistro />
      <MenuDropdown />
      <Footer />
    </>
  )
}
