import { FaRegEnvelope, FaUserCircle } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
export default function Register() {
  return (
    <div class="bg-gray-800 scale-200">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-gray-900 rounded-2xl shadow-4xl max-w-2xl">
            <div className="p-5">
              <div className="text-left font-bold text-white">
                Video<span className="text-pink-500">App</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-semibold text-pink-500 mb-10">
                  Register An Account!
                </h2>
                <div className="flex flex-col items-center text-black">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <FaUserCircle className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
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
                  <div className="bg-gray-100 w-64 h-10 p-2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Confirm Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                </div>
              </div>

              <Link
                href="#"
                className="border-2 border-pink-500 text-pink-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-pink-500 hover:text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
