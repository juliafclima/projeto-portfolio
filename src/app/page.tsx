"use client";
import About from "@/components/about";
import Academics from "@/components/academics";
import Experience from "@/components/experience";
import Presentation from "@/components/presentation";
import Projects from "@/components/projects";
import logo from "../../public/favicon.ico";
import Image from "next/image";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="text-black">
      <div className="bg-white sm:h-[8vh] flex justify-center items-center">
        <Image
          className="px-4 py-2 sm:py-0"
          src={logo}
          alt=""
          height={70}
          width={70}
        />
        <div className="w-full px-4 py-2 sm:py-0">
          <h1 className="text-2xl font-extrabold ">Juliafclima.software</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#F4F2EE]">
        <div className="w-full px-2 sm:px-0 sm:w-2/3">
          <Presentation />
          <About />
          <Experience />
          <Skills/>
          <Academics />
          <Projects />
        </div>
      </div>
      <footer className="bg-white sm:h-[8vh] flex justify-center items-center py-3 sm:py-0">
        <div className="w-full px-4 flex flex-col sm:flex-row items-center sm:justify-between justify-center">
          <div className="px-4 py-2 sm:py-0">
            <h1 className="text-2xl font-extrabold ">Juliafclima.software</h1>
          </div>
          <span className="text-sm">© 2025 Copyright Júlia Lima</span>
        </div>
      </footer>
    </div>
  );
}
