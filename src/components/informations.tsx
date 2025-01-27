"use client";
import { useContext, useState } from "react";
import contexto from "@/context/context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  FaBirthdayCake,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";

export default function Informations() {
  const { setShowInformations } = useContext(contexto);
  const [email, setEmail] = useState(true);

  return (
    <div className="w-full overflow-y-scroll h-screen fixed top-0 left-0 bg-black/60 flex justify-center z-30 py-[5vh] items-center">
      <div className="w-11/12 sm:w-2/3 mt-2 mb-[5vh]">
        <div className="bg-white rounded-t-xl flex items-center justify-between w-full px-4 sm:px-5 py-2 top-0 right-0">
          <div className="text-[#0A66C2] hover:text-[#004182] cursor-pointer font-bold duration-400 transition-colors text-lg leading-5 sm:pl-5">
            Informações de Contato
          </div>
          <button
            type="button"
            className="text-4xl"
            onClick={() => setShowInformations(false)}
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <hr />
        <div className="bg-white rounded-b-xl px-4 sm:px-5 font-bold flex flex-col pt-2 2xl:pt-0 pb-5 lg:pl-10 2xl:justify-center justify-start w-full text-sm sm:text-base">
          <div className="pt-2 flex gap-2">
            <div className="bg-black h-5 w-5 rounded flex items-center justify-center p-1 mr-1 sm:mr-3">
              <FaDownload className="text-lg text-white" />
            </div>
            <div>
              <p className="">Currículo:</p>
              <a
                href="/Curriculo_Julia_Lima.pdf"
                download="Curriculo_Julia_Lima.pdf"
                className="font-bold hover:underline text-[#0a66c2] hover:text-[#004182] transition-colors duration-400"
              >
                juliafclima.pdf
              </a>
            </div>
          </div>
          <div className="pt-2 flex gap-2">
            <div className="bg-black h-5 w-5 rounded flex items-center justify-center p-1 mr-1 sm:mr-3">
              <FaLinkedinIn className="text-lg text-white" />
            </div>
            <div>
              <p className="">Linkedin:</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/juliafclima/"
                className="font-bold hover:underline text-[#0a66c2] hover:text-[#004182] transition-colors duration-400"
              >
                linkedin.com/in/juliafclima
              </a>
            </div>
          </div>
          <div className="pt-2 flex gap-2">
            <div className="bg-black h-5 w-5 rounded flex items-center justify-center p-1 mr-1 sm:mr-3">
              <FaGithub className="text-lg text-white" />
            </div>
            <div>
              <p className="">GitHub</p>
              <a
                target="_blank"
                href="https://github.com/juliafclima"
                className="font-bold hover:underline text-[#0a66c2] hover:text-[#004182] transition-colors duration-400"
              >
                github.com/juliafclima
              </a>
            </div>
          </div>
          <div className="pt-2 flex gap-2">
            <div className="bg-black h-5 w-5 rounded flex items-center justify-center p-1 mr-1 sm:mr-3">
              <MdAlternateEmail className="text-lg text-white" />
            </div>
            <div>
              <p className="">Email</p>
              <button
                type="button"
                className="font-bold hover:underline text-[#0a66c2] hover:text-[#004182]   transition-colors duration-400 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("juliafclima@hotmail.com");
                  setEmail(false);
                  setTimeout(() => {
                    setEmail(true);
                  }, 2000);
                }}
              >
                {email
                  ? "juliafclima@hotmail.com"
                  : "Copiado para a área de transferência"}
              </button>
            </div>
          </div>
          <div className="pt-2 flex gap-2">
            <div className="bg-black h-5 w-5 rounded flex items-center justify-center p-1 mr-1 sm:mr-3">
              <FaWhatsapp className="text-lg text-white" />
            </div>
            <div>
              <p>Celular:</p>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5524988657087&text=Sauda%C3%A7%C3%B5es,%20tudo%20bem?"
                className="font-bold hover:underline text-[#0a66c2] hover:text-[#004182] transition-colors duration-400"
              >
                +55 24 9 8865-7087
              </a>
            </div>
          </div>
          <div className="pt-2 flex gap-2">
            <div className="bg-black h-5 w-5 rounded flex items-center justify-center p-1 mr-1 sm:mr-3">
              <PiMapPinLineFill className="text-lg text-white" />
            </div>
            <div>
              <p>Endereço:</p>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/D1zoYgYgtfu1TUyQA"
                className="font-bold hover:underline text-[#0a66c2] hover:text-[#004182] transition-colors duration-400"
              >
                Avenida Dom Pedro I, Petrópolis - Rio de Janeiro / Brasil
              </a>
            </div>
          </div>
          <div className="pt-2 flex gap-2">
            <div className="bg-black h-5 w-5 rounded flex items-center justify-center p-1 mr-1 sm:mr-3">
              <FaBirthdayCake className="text-lg text-white" />
            </div>
            <div>
              <p>Data de Nascimento:</p>
              <p>02/08/2001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
