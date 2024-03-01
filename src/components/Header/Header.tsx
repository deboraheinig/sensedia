import Image from "next/image";
import Logo from "@/app/assets/Logo.svg"
import ApiPlatform from "@/app/assets/Api Platform.svg"
import inlineButton from "@/app/assets/Inline Button.png"
import inlineButton2 from "@/app/assets/Inline Button (1).png"
import Separator from "@/app/assets/Separator.png"
import Polygon from "@/app/assets/Polygon 1.png"
import Avatar from "@/app/assets/Avatar.png"

import { ItemMenuComeco } from "./ItemMenuComeco";

export function Header() {
    return (
        <header className="w-full h-[87px] bg-zinc-700">
            <div className="w-full max-w-[1246px] pt-6 pb-6 mx-6">
                <div>
                    <Image
                    src={Logo}
                    alt="Logo"
                    />
                </div>
            </div>
            <div className="w-full bg-white pt-4 pb-4">
            <div className="w-full mx-0 ">
            <div className="flex w-full pl-8">
                    <Image
                    src={ApiPlatform}
                    alt="Icon"
                    />
                <ul>
                    <ItemMenuComeco
                    name="Registro"/>
                </ul>
                <button className="pl-[1300px]">
                    <Image
                    src={inlineButton}
                    alt="Icon"
                    />
                </button>
                <button className="pl-[2px]">
                    <Image
                    src={inlineButton2}
                    alt="Icon"
                    />
                </button>
                <div className="pl-[24px] pt-1">
                    <Image
                    src={Separator}
                    alt="Icon"
                    />
                </div>
                <div className="pl-[0px]">
                    <Image
                    src={Avatar}
                    alt="Avatar"
                    />
                </div>
                <div className="pl-[0px] pt-3">
                    <span className="font-bold text-sm align-text-bottom mx-4 mt-2 text-[#9A9A9A]">Nome de usuário</span>
                </div>
                </div>
                </div>
            </div>  
        </header>

    )
}