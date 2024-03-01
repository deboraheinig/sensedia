
import { InformacoesPartidas } from "@/components/InformacoesPartidas";
import { Registro } from "@/components/Registro";
import { Usuarios } from "@/components/Usuarios";
import { Footer } from "@/components/Footer";


import Image from "next/image";
import { TelaRegistro } from "@/components/TelaRegistro";

export default function Home() {
  return (
    <>
    <InformacoesPartidas/>
    <Usuarios/>
    <Registro/>
    <TelaRegistro/>

    <Footer/>

    </>
  );
}
