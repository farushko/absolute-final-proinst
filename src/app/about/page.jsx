import Image from "next/image";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";

export default function AboutUs() {
  return (
    <div className="max-w-auto mx-auto p-3 md:mt-16 md:max-w-6xl">
      <h1
        className="max-w-5xl text-balance text-center text-4xl font-medium md:text-6xl mb-6 leading-relaxed"
        data-aos="fade-down"
      >
        Сертификати
      </h1>
      <div
        className="max-w-auto mx-auto p-3 md:mt-10 md:max-w-6xl"
        data-aos="fade-down"
      >
        {/* <Gallery /> */}
        <div className="glass-container mt-16 w-fit" data-aos="flip-up">
          <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
          <Image
            src="/Cert-1.jpg"
            width={1200}
            height={700}
            className="rounded-lg"
            alt="homepageimage"
          />
        </div>
      </div>
      <Contacts/>
    </div>
  );
}
