import Link from "next/link";
import Image from "next/image";

import {
  MdPerson,
  MdShoppingCart,
  MdSettings,
  MdPoll,
  MdDeveloperBoard,
} from "react-icons/md";
import { GiTripleCorn } from "react-icons/gi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed flex h-screen w-20 flex-col justify-between border-r-[1px] bg-white p-4">
        <div className="flex flex-col items-center">
          <Link href="/">
            {/* Logo icon */}
            <div className="inline-block rounded-lg bg-green-400 p-3 text-white">
              <GiTripleCorn size={22} />
            </div>
          </Link>
          {/* Border separator */}
          <span className="w-full border-b-[1px] border-slate-300 p-2"></span>
          {/* Sidebar Items */}
          <Link href="/">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
              <MdPoll size={22} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
              <MdPerson size={22} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
              <MdShoppingCart size={22} />
            </div>
          </Link>
          <Link href="/kanban">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
              <MdDeveloperBoard size={22} />
            </div>
          </Link>
          <Link href="/settings">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-slate-100 p-3 text-slate-600 hover:bg-gray-300">
              <MdSettings size={22} />
            </div>
          </Link>
        </div>
      </div>
      {/* Main right side */}
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
