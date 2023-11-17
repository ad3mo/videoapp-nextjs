import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-white-80 font-bold text-3xl pb-6">
              Video<span className="text-pink-500">APP</span>
            </p>

            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
              <FaDiscord className="text-2xl cursor-pointer hover:text-blue-500" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-400" />
            </div>
          </ul>
        </div>
        <div className="p-3">
          <ul>
            <p className="text-pink-500 font-bold text-2xl pb-4">Information</p>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              info1
            </li>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              info2
            </li>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              info3
            </li>
          </ul>
        </div>
        <div className="p-3">
          <ul>
            <p className="text-pink-500 font-bold text-2xl pb-4">Partnership</p>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              Advertise
            </li>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              Partners
            </li>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              etc
            </li>
          </ul>
        </div>
        <div className="p-3">
          <ul>
            <p className="text-pink-500 font-bold text-2xl pb-4">
              Help <span className="text-gray-50">&</span> Support
            </p>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              FAQs
            </li>
            <li className="text-gray-50 text-md pb-2 font-semibold hover:text-pink-500 cursor-pointer">
              Feedback
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-800">
        <h1 className="text-gray-50 font-semibold">
          {" "}
          ⓒ 2023 All rights reserved
        </h1>
      </div>
    </>
  );
};

export default Footer;
