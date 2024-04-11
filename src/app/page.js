import Image from "next/image";
import Link from "next/link";
import LogoCrop from "@/components/LogoCrop";
import {
  BiAnalyse,
  BiSelectMultiple,
  BiWrench,
  BiCalendar,
  BiPhoneCall,
} from "react-icons/bi";

export default function Home() {
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
        className="mx-auto my-12 max-w-xl text-balance text-slate-300 text-center"
        data-aos="fade-up"
      >
        <p className="text-justify hyphens-auto text-balance">
          Проектирането и изграждането на инсталации за битова гореща вода (БГВ)
          и отопление, вентилация и климатизация (ОВК) изисква внимателно
          планиране, опит в инженерните принципи и спазване на строителните
          норми и стандарти.
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
      <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col mt-24 justify-center">
        <h2
          className="text-balance text-center text-4xl font-medium md:text-6xl"
          data-aos="fade-up"
        >
          Професионални <em>решения и услуги</em>
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
            <div className="flex flex-col text-center">
              <div className="flex flex-row gap-x-4 ml-6 align-middle mb-2">
                <BiAnalyse size={60} className="text-amber-300" />
                <h1 className="flex text-lg my-auto text-left underline underline-offset-2">
                  Фаза на оценка и проектиране
                </h1>
              </div>
              <p className="text-sm text-justify indent-6 hyphens-auto">
                Планирането на проекта е изключително важно. Трябва да решите
                какви промени искате да направите и какви материали, технологии
                или стилове ще отговарят най-добре на вашите нужди.
              </p>
            </div>
          </div>
          <div className="glass-container row-span-1 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 p-4 md:col-span-2 align-top">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <div className="flex flex-col text-center align-top">
              <div className="flex flex-row gap-x-4 ml-6 align-middle mb-2">
                <BiSelectMultiple size={50} className="text-green-500" />
                <h1 className="flex text-lg my-auto text-left underline underline-offset-2 align-middle mb-3 md:mb-0">
                  Разрешителни и одобрения
                </h1>
              </div>
              <p className="text-sm text-justify indent-6 hyphens-auto text-wrap">
                Получеване на необходимите разрешителни. Осигуряваме
                съответствие с местните строителни норми, разпоредби за зониране
                и стандарти за безопасност. Представяме подробни планове и
                спецификации на съответните органи за одобрение преди започване
                на строителството.
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-16 grid max-w-4xl grid-rows-[auto-auto-auto] gap-8 md:grid-cols-3 md:gap-10"
          data-aos="fade-up"
        >
          <div className="glass-container row-span-1 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 p-4 md:col-span-2 align-top">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <div className="flex flex-col text-center align-top">
              <div className="flex flex-row gap-x-4 ml-6 align-middle mb-2">
                <BiWrench size={50} className="text-cyan-500" />
                <h1 className="flex text-lg my-auto text-left underline underline-offset-2 align-middle">
                  Монтаж и тестване
                </h1>
              </div>
              <p className="text-sm text-justify indent-6 hyphens-auto">
                Персоналът на ПРО ИНСТ е специализиран в инсталации за БГВ и
                ОВК, за да гарантирате правилното инсталиране и интегриране на
                системите. Извършете цялостно тестване на системите за БГВ и
                ОВК, за да сте сигурни, че отговарят на изискванията за
                производителност и стандартите за безопасност. Регулирайте
                настройките: Настройте фино контролните настройки и калибрирайте
                оборудването за оптимална работа и енергийна ефективност.
              </p>
            </div>
          </div>
          <div className="glass-container row-span-1 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-stone-800 to-stone-950 p-4 ">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <div className="flex flex-col text-center">
              <div className="flex flex-row gap-x-4 ml-6 align-middle mb-2">
                <BiCalendar size={50} className="text-red-500" />
                <h1 className="flex text-lg my-auto text-left underline underline-offset-2 align-middle">
                  Подръжка
                </h1>
              </div>
              <p className="text-sm text-justify indent-6 hyphens-auto">
                Създайте график за рутинни задачи по поддръжката, като смяна на
                филтри, инспекции на оборудването и проверки на ефективността.
                Наблюдавайте консумацията на енергия, температурните нива и
                работата на системата, за да идентифицирате потенциални проблеми
                и да оптимизирате производителността във времето.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="glow absolute -z-10 aspect-auto w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />
      <hr class="h-px mt-14 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col mt-10 justify-center">
        <h2
          className="text-balance text-center text-4xl font-medium md:text-6xl"
          data-aos="fade-down"
        >
          Нашите <em>клиенти</em>
        </h2>
        <div
          className="grid md:grid-cols-3 gap-4 mt-12 px-10 justify-center"
          data-aos="fade-up"
        >
          <Image
            src="/logo-hbpn-bg-small-.jpg"
            alt="сърце и мозък"
            width={400}
            height={100}
            className="border rounded-xl"
            data-aos="flip-left"
          />
          <Image
            src="/mama-i-az.jpg"
            alt="mama i az"
            width={400}
            height={100}
            className="border rounded-xl"
            data-aos="flip-left"
          />
          <Image
            src="/logo-hbpn-bg-small-.jpg"
            alt="сърце и мозък"
            width={400}
            height={100}
            className="border rounded-xl"
            data-aos="flip-left"
          />
        </div>
      </div>
      <hr class="h-px mt-14 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <div className="max-w-auto text-balance py-12 text-center font-medium md:py-20 justify-center">
        <div
          className="glass-container-oval rounded-full p-1 mx-auto max-w-32 md:rounded-full text-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <Link href="tel:+359886191251">
            <LogoCrop />
          </Link>
        </div>
        <div
          className="flex gap-4 mt-8 text-3xl text-center justify-center"
          data-aos="fade-up"
        >
          Връзка с нас
        </div>
        <button className="mt-6"></button>
      </div>
    </div>
  );
}
