import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
export default function Controls() {
  return (
    <div>
      
      <link rel="shortcut icon" href="/react.svg" type="image/x-icon" />
      <header
        className="
      bg-blue-500
      py-3
      sm:py-0
      relative
      mb-15
      sm:mb-0
      "
      >
        <div className="container mx-auto w-3/4 flex justify-between">
          <a
            className="
          flex
          items-center
          font-semibold
          text-2xl
          text-white
         
          "
            href="#"
          >
            <img className="w-6" src="/react.svg" alt="" />
            Secured Area
          </a>
          <nav className="">
            <button
              id="mobile_icon"
              className="text-white text-end flex sm:hidden"
            >
              <img src="favicon.svg" alt="" />
            </button>
            <ul
              id="main_menu"
              className="absolute bg-blue-500 w-full  left-0 top-13 p-4 
              text-center flex gap-4 justify-center items-center sm:block sm:relative sm:top-0 sm:flex 
              sm:justify-evenly sm:items-center"
            >
              <li className="mb-2 sm:mb-0  sm:ml-5 ">
                <a
                  className="text-white font-semibold hover:text-blue-900 hover:transition-color"
                  href=""
                >
                  Home
                </a>
              </li>
              <li className="mb-2 sm:mb-0  sm:ml-5 ">
                <a
                  className="text-white font-semibold hover:text-blue-900 hover:transition-color"
                  href=""
                >
                  Contact
                </a>
              </li>
              <li className="mb-2 sm:mb-0  sm:ml-5 ">
                <a
                  className="text-white font-semibold hover:text-blue-900 hover:transition-color"
                  href=""
                >
                  Log in
                </a>
              </li>
              <li className="mb-2 sm:mb-0  sm:ml-5 ">
                <a
                  className="text-white font-semibold 
                   bg-blue-900 px-4 py-2 block rounded pb-4 hover:"
                  href=""
                >
                  Sign in
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="bg-blue-100 h-screen ">
        <div className="container mx-auto w-3/4 flexb justify-between flex flex-col sm:flex-row sm:h-full sm:items-center">
          <div className="order-2 bg-white p-8 sm:order-1 sm:w-1/2 sm:text-center">
            <h3 className="text-3xl font-bold mb-2">Welcome Back</h3>
            <p className="text-gray-500 mb-5">Please enter your details</p>
            <form action="">
              <label
                className="font-semibold mb-1 block sm:text-left"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="border w-full p-2 mb-2 rounded-lg"
                type="email"
                placeholder="Enter your email"
              />
              <label
                className="font-semibold mb-1 block sm:text-left"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border w-full p-2 mb-3 rounded-lg"
                type="password"
                placeholder="Enter your password"
              />
              <input
                className="text-white font-semibold 
                   bg-blue-900 px-6 py-2 block rounded pb-3 w-full cursor-pointer hover:bg-black mb-4"
                type="submit"
                value="Sign in"
              />
            </form>
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <a
                className="text-blue-500
            underline"
                href="#"
              >
                sign up
              </a>
            </p>
          </div>
          <div className="order-1  py-8 sm:order-2 sm:w-1/2 sm:flex sm:items-center sm:pl-5">
            <img src="/hero.png" alt="" />
          </div>
        </div>
      </section>
      
      <div>
      <div className="min-h-screen flex justify-center items-center p-6 bg-gray-50 ">
        <div className="w-full max-w-sm bg-white shadow-xl p-6 rounded-2xl border border-gray-100">
          <h3 className="mb-4 text-lg font-bold text-gray-900">
            Update Profile
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Username
              </label>
              <input
                type="text"
                value="coder_pro"
                className="mt-1 w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl 
                text-sm text-gray-800 focus:border-purple-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-gray-500/10 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase  tracking-wider text-gray-500">Status</label>
              <input type="text" disabled value="Admin(Locked)" className="mt-1 w-full border border-gray-200 bg-gray-100 px-4 py-3 rounded-xl text-sm text-gray-400 cursor-not-allowed" />
            </div>
            <button className="w-full bg-purple-600 py-3 rounded-xl shadow-md text-white font-bold transition-all duration-200 hover:bg-purple-700 hover:shadow-purple-700/20 active:scale-95 active:bg-purple-800">Save Changes</button>
          </div>
        </div>
      </div>
    </div>


      <div>
      <div className="min-h-screen flex justify-center items-center bg-slate-100 p-6">
        <div className="relative w-full max-w-md bg-white shadow-lg rounded-2xl p-6 overflow-hidden">
          <div className="absolute top-4 right-4 z-10 bg-emerald-500 rounded-full px-3 py-1 shadow-md text-xs font-bold text-white">Live Updates</div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">System Logs</h3>
          <div className="h-48 overflow-y-auto bg-slate-900 p-4 rounded-xl text-sm text-emerald-500 font-mono space-y-2">
            <p className="border-b border-slate-800 pb-3">[10:00 AM] System intialized successfully...</p>
            <p className="border-b border-slate-800 pb-3">[10:05 AM] Connecting to database cluster-0...</p>
            <p className="border-b border-slate-800 pb-3">[10:06 AM] Connected! Response time: 14ms.</p>
            <p className="border-b border-slate-800 pb-3">[10:12 AM] Warning: High memory usage detected.</p>
            <p className="border-b border-slate-800 pb-3">[10:15 AM] Runnung automated cleanup script...</p>
            <p className="border-b border-slate-800 pb-3">[10:16 AM] Memory optimized. Freed 1.2GB.</p>
            <p className="border-b border-slate-800 pb-3">
              [10:20 AM] Bakup sequence intilated by root user...
            </p>
            <p>[10:25 AM] Backup completed. File saved as snap_93.tar.gz</p>
          </div>
          <p className="text-xs text-slate-400 text-center mt-3">
            Scroll inside the terminal box to view full log history.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
}
