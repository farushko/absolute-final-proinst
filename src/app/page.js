"use client";
import Image from "next/image";
import { SiApachenetbeanside, SiBuildkite } from "react-icons/si";
import { SlEvent } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LogoCrop from "@/components/LogoCrop";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="max-w-auto mx-auto p-3 md:mt-16 md:max-w-6xl">
      <h1
        className="max-w-5xl text-balance text-center text-4xl font-medium md:text-6xl mb-10 leading-relaxed"
        data-aos="fade-down"
      >
        Изграждане на{" "}
        <em className="bg-gradient-to-b from-red-500 to-blue-600 bg-clip-text font-black not-italic leading-relaxed text-transparent drop-shadow-[0_1.3px_1.2px_rgba(256,256,256,0.8)]">
          ВИК
        </em>{" "}
        и{" "}
        <em className="bg-gradient-to-b from-red-500 to-blue-600 bg-clip-text font-black not-italic text-transparent drop-shadow-[0_1.3px_1.2px_rgba(256,256,256,0.8)]">
          ОВК
        </em>{" "}
        инсталации
      </h1>
      <div
        className="mx-auto my-12 max-w-lg text-balance text-slate-300 text-center"
        data-aos="fade-up"
      >
        <p>
          Съществуват много вариации на пасажа Lorem Ipsum, но повечето от тях
          са променени по един или друг начин чрез добавяне на смешни думи или
          разбъркване на думите, което не изглежда много достоверно.
        </p>
      </div>
      <div className="glass-container mt-16 w-fit" data-aos="flip-up">
        <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
        <Image
          src="/slide-1.jpg"
          width={1200}
          height={700}
          className="rounded-lg"
          alt="homepageimage"
        />
      </div>
      <div className="flex flex-col justify-between my-16 md:flex-row glass-container">
        <div className="absolute inset-0 -z-10 bg-slate-600/30 blur-2xl filter" />
        <div
          className="flex flex-col justify-center md:w-1/3 text-center"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <SlEvent size={60} color="" className="self-center my-5" />
          <p>ПРОУЧВАНЕ</p>
        </div>
        <div
          className="flex flex-col justify-center md:w-1/3 text-center"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <SiApachenetbeanside
            size={80}
            color="#7dd3fc"
            className="self-center my-4"
          />
          <p>ПРОЕКТИРАНЕ</p>
        </div>
        <div
          className="flex flex-col justify-center md:w-1/3 text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <SiBuildkite size={80} color="#bef264" className="self-center my-4" />
          <p>ИЗГРАЖДАНЕ</p>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col mt-24 justify-center">
        <h2
          className="text-balance text-center text-5xl font-medium md:text-7xl"
          data-aos="fade-up"
        >
          The new <em>Gold Standard</em>
        </h2>
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          Deserunt tempor aliqua eu occaecat culpa nulla labore fugiat nisi sunt
          laboris cupidatat exercitation.
        </div>
        <div
          className="mt-16 grid max-w-4xl grid-rows-[auto-auto-auto] gap-8 md:grid-cols-3 md:gap-10"
          data-aos="fade-up"
        >
          <div className="glass-container row-span-1 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 p-4 ">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            ПРОУЧВАНЕ
          </div>
          <div className="glass-container row-span-1 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 p-4 md:col-span-2">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            ПРОУЧВАНЕ
          </div>
        </div>
        <div
          className="mt-16 grid max-w-4xl grid-rows-[auto-auto-auto] gap-8 md:grid-cols-3 md:gap-10"
          data-aos="fade-up"
        >
          <div className="glass-container row-span-1 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 p-4 md:col-span-2">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            ПРОУЧВАНЕ
          </div>
          <div className="glass-container row-span-1 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 p-4 ">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            ПРОУЧВАНЕ
          </div>
        </div>
      </div>
      <div className="glow absolute -z-10 aspect-auto w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />
      <hr class="h-px mt-14 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <div className="max-w-auto text-balance py-32 text-center font-medium md:py-20 justify-center">
        <div
          className="glass-container-oval rounded-full p-1 mx-auto max-w-32 md:rounded-full text-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <LogoCrop />
        </div>
        <div className="mt-8 text-5xl text-center" data-aos="fade-up">
          Връзка с нас
        </div>
        <button className="mt-6">
          Obadete se
        </button>
      </div>
    </div>
  );
}
