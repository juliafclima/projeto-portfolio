import { useState } from "react";

export default function About() {
  const [showMoreData, setShowMoreData] = useState(false);
  return (
    <div className="mb-3 bg-white rounded-xl p-4 sm:p-8">
      <p className="font-bold text-xl mb-5">Sobre</p>
      <p className="mb-2 text-justify">
        Olá! Meu nome é Júlia Lima, tenho 23 anos e sou desenvolvedora
        Front-End. Moro em Petrópolis, no interior do Rio de Janeiro, e estudo
        na Universidade Estácio de Sá, onde estou no 8º período do curso de
        Sistemas de Informação.
      </p>
      {showMoreData && (
        <>
          <p className="mb-2 text-justify">
            Iniciei meu contato com a computação em um curso de Montagem e
            Manutenção de Computadores, concluído em junho de 2015. Desde então,
            venho me desafiando nesse vasto mundo de possibilidades que é a
            programação.
          </p>
          <p className="mb-2 text-justify">
            Um dos meus últimos grandes projetos foi o desenvolvimento de uma
            aplicação web e mobile para um cliente internacional do setor Duty
            Free, voltada para a venda de produtos dentro de aeronaves.
          </p>
          <p className="mb-2 text-justify">
            Meu objetivo é construir uma carreira sólida como desenvolvedora
            Front-End, unindo minha experiência e paixão para criar experiências
            digitais de alto impacto.
          </p>
          <p className="mb-2 text-justify">
            Estou constantemente em busca de desafios que me permitam expandir
            meu conhecimento e contribuir de forma significativa para projetos
            transformadores.
          </p>
        </>
      )}
      <div className="w-full flex items-center justify-end">
        <button
          type="button"
          className="text-gray-500 hover:text-[#0A66C2] transition-colors cursor-pointer duration-400"
          onClick={() => {
            setShowMoreData(!showMoreData);
          }}
        >
          {!showMoreData ? "...ver mais" : "...ver menos"}
        </button>
      </div>
    </div>
  );
}
