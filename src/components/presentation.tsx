"use client";
import { useContext } from "react";
import contexto from "@/context/context";
import Image from "next/image";
import Informations from "./informations";

export default function Presentation() {
  const { showInformations, setShowInformations } = useContext(contexto);

  return (
    <div className="mt-5 mb-3 bg-white rounded-xl relative">
      {showInformations && <Informations />}
      <div className="rounded-full absolute z-10 top-12 sm:top-20 md:top-28 left-2 sm:left-5">
        <Image
          className="rounded-full border-1 border-transparent bg-white p-1 w-28 sm:w-32 md:w-44 lg:w-40"
          src="/profile.jpg"
          alt="Imagem de Perfil da Júlia Lima"
          width={1000}
          height={1000}
        />
      </div>
      <div className="rounded-t-xl relative">
        <Image
          className="rounded-t-xl relative w-full h-28 sm:h-32 md:h-48 object-cover"
          src="/banner.jpg"
          alt="Imagem de Banner da Júlia Lima"
          width={1000}
          height={800}
          priority
        />
      </div>
      <div className="w-full h-1/2 relative z-20 flex flex-col-reverse sm:flex-col mt-10 sm:mt-0">
        <div className="flex justify-start flex-wrap sm:justify-end items-center w-full gap-2 px-4 pt-2 pb-4 sm:pb-2 sm:px-4 sm:p-5">
          <button
            type="button"
            onClick={() => setShowInformations(true)}
            className="rounded-full bg-[#0A66C2] hover:bg-[#004182] px-4 py-1 text-white transition-colors duration-400 font-bold sm:text-sm md:text-normal"
          >
            + Seguir
          </button>
          <button
            type="button"
            className="rounded-full bg-white border border-[#004182] hover:bg-[#004182] px-4 py-1 text-[#004182] hover:text-white transition-colors duration-400 font-bold sm:text-sm md:text-normal"
          >
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5524988657087&text=Sauda%C3%A7%C3%B5es,%20tudo%20bem?"
            >
              Enviar Mensagem
            </a>
          </button>
        </div>
        <div className="p-4 pb-1 md:px-8 md:py-10 lg:py-6">
          <div className="font-bold text-xl">Júlia Lima</div>
          <div>Sistemas de Informação | Next.js | React | React Native</div>
          <div className="flex flex-col sm:flex-row items-start">
            <span className="text-gray-500">
              Petrópolis, Rio de Janeiro, Brasil
            </span>
            <span className="px-1 hidden sm:flex">·</span>
            <button
              type="button"
              onClick={() => setShowInformations(true)}
              className="text-[#0A66C2] hover:text-[#004182] cursor-pointer font-bold duration-400 transition-colors"
            >
              Informações de Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
