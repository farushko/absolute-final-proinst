import Link from "next/link";
import Menuitem from "./Menuitem";
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill} from 'react-icons/bs';
import DarkModeSwitch from "./DarkModeSwitch";


export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-2">
        <Menuitem title="home" address="/" Icon={AiFillHome} />
        <Menuitem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <Link href="/" className="flex g-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 p-2 rounded-lg">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}