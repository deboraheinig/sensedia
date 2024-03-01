import Image from 'next/image'

import LifeRing from '@/app/assets/lifering.svg'
import Grin from '@/app/assets/grin-alt.svg'
import Heart from '@/app/assets/heartbeat.svg'


export function Registro() {
  return (
    <>
      <div className="flex w-full mt-12">
        <span className="font-bold text-2xl text-[#303030] ms-72 mt-4 mb-8">Registro</span>
      </div>
      <section className="w-full h-28 pt-3 bg-white">
        <div className="ps-72">
          <ul className="flex justify-between me-80 pe-80 mb-4">
            <li>
              <span className="font-bold text-sm text-[#8556AA] flex">Precisa de ajuda?</span>
            </li>
            <li>
              <span className="font-bold text-sm text-[#8556AA] flex me-2">
                Por que se registrar?
              </span>
            </li>
            <li>
              <span className="font-bold text-sm text-[#8556AA] flex me-32">
                O que está acontecendo?...
              </span>
            </li>
          </ul>

          <ul className="flex me-72 pe-80">
            <li className="flex items-center">
              <Image src={LifeRing} alt="SalvaVidas" width={45} height={45} />
              <span className="font-thin text-sm text-[#707070] text-balance ml-3 mr-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incidente ut labore et dolore magna aliqua.
              </span>
            </li>
            <li className="flex items-center">
              <Image src={Heart} alt="Grin" width={45} height={45} />
              <span className="font-thin text-sm text-[#707070] ml-6 mr-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incidente ut labore et dolore magna aliqua.
              </span>
            </li>
            <li className="flex items-center">
              <Image src={Grin} alt="Heart" width={45} height={45} />
              <span className="font-thin text-sm text-[#707070] line-clamp-5 ml-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incidente ut labore et dolore magna aliqua.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
