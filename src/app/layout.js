import { AOSInit } from "@/components/AOSInit";
import "./globals.css";
import Logo from "@/components/Logo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Comfortaa } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const comfortaa = Comfortaa({
  weight: "400",
  subsets: ["cyrillic"],
});

export const metadata = {
  title: "Изграждане на ВИК и ОВК инсталации.",
  description:
    "Проектирането и изграждането на инсталации за битова гореща вода (БГВ) и отопление, вентилация и климатизация (ОВК)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg" className="bg-stone-800">
      <body className={comfortaa.className}>
        <AOSInit />
          <div className="flex flex-col text-center justify-center md:max-w-6xl mx-auto md:grid md:grid-cols-5">
            <div className="flex w-[100%] p-2 mx-auto mt-14 lg:mt-2 lg:col-span-1">
              <Logo />
            </div>
            <div className="px-4 col-span-4">{children}</div>
            <SpeedInsights />
          </div>
      </body>
    </html>
  );
}
