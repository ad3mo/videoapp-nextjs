import {
  UserCircleIcon,
  CogIcon,
  VideoCameraIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex flex-col  sm:flex-row m-5 justify-between items-center h-[80px] bg-gray-900">
      <div className="text-left font-bold text-white text-2xl cursor-pointer ">
        Video<span className="text-pink-500">App</span>
      </div>
      <div className="mt-2">
        <div className="flex flex-grow justify-evenly max-w-2xl text-sm gap-2">
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <div onClick={() => router.push(`/upload`)}>
            <HeaderItem title="UPLOAD" Icon={VideoCameraIcon} />
          </div>
          <div onClick={() => router.push(`/login`)}>
            <HeaderItem title="ACCOUNT" Icon={UserCircleIcon} />
          </div>
          <div onClick={() => router.push(`/settings`)}>
            <HeaderItem title="SETTINGS" Icon={CogIcon} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
