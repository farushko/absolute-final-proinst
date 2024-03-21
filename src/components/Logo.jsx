import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Logo() {
  return (
    <div className="flex flex-col mx-auto text justify-center my-4 lg:fixed lg:flex-grow-2">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/Logo-BG-Transperant.png"
            width={200}
            height={200}
            alt="logo"
          />
        </Link>
        <Menu />
      </div>
  );
}