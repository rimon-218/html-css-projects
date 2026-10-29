import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
export default function Fourtail() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-50 flex justify-center items-center ">
        <div className="w-full max-w-sm bg-white shadow-xl p-6 rounded-2xl  border border-gray-100">
          <h3 className="mb-4 text-lg font-bold text-gray-900">
            Update Profile
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Username
              </label>
              <input
                type="text"
                value="coder_pro"
                className="mt-1 w-full bg-gray-50 border border-gray-200 px-4 text-sm text-gray-800 py-3 rounded-xl transiton-all focus:border-purple-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-purple-500/10 "
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ">
                Status
              </label>
              <input
                type="text"
                disabled
                value="Admin(Locked)"
                className="mt-1 w-full bg-gray-100 text-sm text-gary-400 border border-gray-200 px-4 py-3 rounded-xl cursor-not-allowed "
              />
            </div>
            <button className="w-full bg-purple-600 py-3 rounded-xl text-white font-bold transition-all hover:bg-purple-700 active:scale-95 shadow-md hover:shadow-purple-700/20  duration-200 active:bg-purple-800">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
