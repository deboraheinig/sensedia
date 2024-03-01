import Image from "next/image";
import Logo from "@/app/assets/Logo.png"
import ApiPlatform from "@/app/assets/API Platform.png"
import Polygon from "@/app/assets/Polygon 1.png"

type Props = {
    name: string
}

export function ItemMenuComeco({name}: Props){
    return (
<li>
                        <button className="flex items-center gap-1 pt-1">
                            <span className="text-[#8556AA] font-bold text-sm align-text-bottom mx-4 mt-2">BEM-VINDO</span>
                        <Image className="pt-2"
                            src={Polygon}
                            alt="Polygon"
                        />
                        <span className="text-[#9A9A9A] text-sm align-text-bottom mx-4 mt-2 font-semibold">{name}</span>
                        </button>
                    </li>
    )
}
