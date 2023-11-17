import { useRouter } from "next/router";
import requests from "../utils/requests";
const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="flex items-center px-10 sm:px-20 space-x-10 sm:space-x-20 h-[50px] bg-gray-800 py-auto mb-8 ">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/${title}`)}
            className="last:pr-24 cursor-pointer transition duration-50 transform hover:scale-110 hover:text-white active:text-pink-500"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
