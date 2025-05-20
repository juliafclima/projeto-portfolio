"use client";
import { ICourse } from "@/interfaces";
import academicsList from "../data/academics.json";
import { useState } from "react";
import Image from "next/image";

export default function CourseItem(props: { item: ICourse; index: number }) {
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
                src={"/companies/" + item.company + ".jpeg"}
                alt={item.company}
                width={1000}
                height={800}
              />
            </div>
            <div>
              <p className="font-bold text-sm">{item.course}</p>
              <p className="text-sm">{item.company}</p>
            </div>
          </div>
          <p className="hidden sm:flex font-bold">{item.course}</p>
          <p className="hidden sm:flex text-sm mt-0.5">{item.company}</p>
          <p className="text-sm text-gray-500 mt-0.5">{item.time}</p>
          <ul className="mt-2 text-sm">
            {showMoreData &&
              item.media === true &&
              item.description.map((text: string, index: number) => (
                <div key={index}>
                  <li className="mb-2">- {text}</li>
                  <Image
                    className="w-full h-full object-cover"
                    src={"/certificates/" + item.company + ".jpeg"}
                    alt={item.company}
                    width={1000}
                    height={800}
                  />
                </div>
              ))}

            <li className="flex">
              <div className="flex flex-wrap">
                <strong className="pr-1">Competências: </strong>
                {item.skills.map((text: string, index: number) => (
                  <div className="flex" key={index}>
                    <span>{text}</span>
                    {index < item.skills.length - 1 && (
                      <span className="px-1"> · </span>
                    )}
                  </div>
                ))}
              </div>
            </li>
          </ul>
          <div className="w-full flex items-center justify-end">
            <button
              type="button"
              className="text-gray-500 hover:text-[#0A66C2] transition-colors cursor-pointer duration-400 text-sm"
              onClick={() => {
                setShowMoreData(!showMoreData);
              }}
            >
              {item.media === true
                ? !showMoreData
                  ? "...ver mais"
                  : "...ver menos"
                : null}
            </button>
          </div>
        </div>
      </div>
      {index !== academicsList.length - 1 && (
        <div className="w-full pt-3 pb-5">
          <hr />
        </div>
      )}
    </div>
  );
}
