import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
export default function LogIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black ">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex mx-auto bg-gray-900 rounded-2xl shadow-2xl  w-2/3 max-w-4xl ">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-white">
              Video<span className="text-pink-500">App</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-semibold text-pink-500 mb-10">
                Log into your Account
              </h2>
              <div className="flex flex-col items-center text-black">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 h-10 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
              </div>
            </div>
            <Link
              href="#"
              className="border-2 border-pink-500 text-pink-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-pink-500 hover:text-white"
            >
              Log In
            </Link>
          </div>

          <div className="w-2/5 rounded-r-2xl bg-pink-500 text-white py-36 px-12">
            <h1 className="text-3xl font-bold mb-4">Welcome,</h1>
            <p className="mb-10">Register Now!</p>
            <Link
              href="/register"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-pink-500"
            >
              Register
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
