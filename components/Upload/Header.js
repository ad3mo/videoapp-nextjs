import { HomeIcon, CogIcon } from "@heroicons/react/outline";

import HeaderItem from "../HeaderItem";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="text-left font-bold text-white text-2xl cursor-pointer ">
        Video<span className="text-pink-500">App</span>
      </div>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <div onClick={() => router.push(`/`)}>
          <HeaderItem title="HOME" Icon={HomeIcon} />
        </div>
        <div onClick={() => router.push(`/settings`)}>
          <HeaderItem title="SETTINGS" Icon={CogIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
