import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function AboutUs() {
  return (
    <div className="max-w-auto mx-auto p-3 md:mt-16 md:max-w-6xl">
      <h1
        className="max-w-5xl text-balance text-center text-4xl font-medium md:text-6xl mb-10 leading-relaxed"
        data-aos="fade-down"
      >
        Сертификати
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
      <div
        className="max-w-auto mx-auto p-3 md:mt-16 md:max-w-6xl"
        data-aos="fade-down"
      >
        <Gallery />
      </div>
    </div>
  );
}
