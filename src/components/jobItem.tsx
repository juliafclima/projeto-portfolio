"use client";
import { IJob } from "@/interfaces";
import experienceList from "../data/experience.json";
import { useState } from "react";
import Image from "next/image";

export default function JobItem(props: { item: IJob; index: number }) {
  const { item, index } = props;
  const [showMoreData, setShowMoreData] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row">
        <div className="hidden sm:flex w-12 h-12 mr-3">
          <Image
            className="w-full h-full object-cover"
            src={"/companies/" + item.company + ".jpeg"}
            alt={item.company}
            width={1000}
            height={800}
          />
        </div>
        <div className="w-full">
          <div className="flex sm:hidden pb-3">
            <div className="w-12 h-12 mr-3">
              <Image
                className="w-full h-full object-cover"
                src={"/companies/" + item.company + ".jpg"}
                alt={item.company}
                width={1000}
                height={800}
              />
            </div>
            <div>
              <p className="font-bold">{item.role}</p>
              <p className="text-sm mt-0.5">
                {item.company} · {item.job}
              </p>
            </div>
          </div>
          <p className="hidden sm:flex font-bold">{item.role}</p>
          <p className="hidden sm:flex text-sm mt-0.5">
            {item.company} · {item.job}
          </p>
          <p className="text-sm text-gray-500 mt-0.5">
            {item.serviceTime} · {item.time}
          </p>
          <p className="text-sm text-gray-500">
            {item.local} · {item.type}
          </p>
          <ul className="mt-2 text-sm">
            {showMoreData &&
              item.description.map((text: string, index: number) => (
                <li className="mb-2" key={index}>
                  {" "}
                  - {text}
                </li>
              ))}
          </ul>
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
      {index !== experienceList.length - 1 && (
        <div className="w-full pt-3 pb-5">
          <hr />
        </div>
      )}
    </div>
  );
}
