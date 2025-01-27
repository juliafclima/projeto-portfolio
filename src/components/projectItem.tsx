"use client";
import { IProject } from "@/interfaces";
import { useState } from "react";
import Image from "next/image";

export default function ProjectItem(props: { item: IProject; index: number }) {
  const { item, index } = props;
  const [showMoreData, setShowMoreData] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row">
        <div className="hidden sm:flex w-12 h-12 mr-3">
          <Image
            className="w-full h-full object-cover"
            src={"/companies/Trybe.jpg"}
            alt="Imagem de Perfil da Júlia Lima"
            width={1000}
            height={800}
          />
        </div>
        <div className="w-full">
          <div className="flex sm:hidden pb-3">
            <div className="w-12 h-12 mr-3">
              <Image
                className="w-full h-full object-cover"
                src={"/companies/Trybe.jpg"}
                alt="Imagem de Perfil da Júlia Lima"
                width={1000}
                height={800}
              />
            </div>
            <div>
              <p className="font-bold text-sm">{item.title}</p>
              <div className="hidden sm:flex">
                <div>
                  <a
                    href={item.deploy}
                    target="_blank"
                    className="font-bold hover:underline text-sm"
                  >
                    Deploy
                  </a>
                  <span className="px-1">·</span>
                  <a
                    href={item.github}
                    target="_blank"
                    className="font-bold hover:underline text-sm"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="hidden sm:flex font-bold">{item.title}</p>
          <div className="hidden sm:flex">
            <div>
              <a
                href={item.deploy}
                target="_blank"
                className="font-bold hover:underline text-sm"
              >
                Deploy
              </a>
              <span className="px-1">·</span>
              <a
                href={item.github}
                target="_blank"
                className="font-bold hover:underline text-sm"
              >
                Github
              </a>
            </div>
          </div>
          <div className="mt-2 text-sm">
            {showMoreData && (
              <p className="mb-2" key={index}>
                {" "}
                - {item.description}
              </p>
            )}
            <div className="flex">
              <div className="flex flex-wrap">
                <strong className="pr-1">Tecnologias: </strong>
                {item.skills.map((text: string, index: number) => (
                  <div className="flex" key={index}>
                    <span>{text}</span>
                    {index < item.skills.length - 1 && (
                      <span className="px-1"> · </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <button
              type="button"
              className="text-gray-500 hover:text-[#0A66C2] transition-colors cursor-pointer duration-400 text-sm"
              onClick={() => {
                setShowMoreData(!showMoreData);
              }}
            >
              {!showMoreData ? "...ver mais" : "...ver menos"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-3 pb-5">
        <hr />
      </div>
    </div>
  );
}
