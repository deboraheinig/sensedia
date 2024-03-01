import Image from "next/image";
import Dribbble from "@/app/assets/dribbble-square.svg"
import AlignLeft from "@/app/assets/align.svg"
import Trophy from "@/app/assets/trophy.svg"

export function InformacoesPartidas() {
    return (
        <section className="w-full h-28 mt-16 pt-3 bg-[#8556AA]">
        <div className="ps-72">
        <ul className="pt-5 flex">
            <li>
                    <Image 
                    src={Dribbble}
                    alt="Avatar"
                    />
            </li>
            <li>
            <span className="font-bold text-sm text-white flex ps-3">
             Tipo de Quadra
             </span>
             <span className=" text-sm text-white flex ps-3 pt-2">
             Society
             </span>
            </li>
            <li className="ps-12">
                    <Image 
                    src={AlignLeft}
                    alt="Avatar"
                    />
            </li>
            <li>
            <span className="font-bold text-sm text-white flex ps-3">
             Nível
             </span>
             <span className="font-thin text-sm text-white flex ps-3 pt-2">
             Semi-profissional
             </span>
            </li>
            <li className="ps-12">
                    <Image 
                    src={Trophy}
                    alt="Avatar"
                    />
            </li>
            <li>
            <span className="font-bold text-sm text-white flex ps-3">
             Vitórias
             </span>
             <span className="font-thin text-sm text-white flex ps-3 pt-2">
             345
             </span>
            </li>
        </ul>
        </div>
        
        </section>
    )
}