import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
export default function Twotail() {
  return (
    <div>
      <div className="realative min-h-screen bg-gradient-to-br from-rose-500 via-purple-600 to-blue-600 flex justify-center items-center p-6 overflow-hidden">
        <div className="absolute w-72 h-72 bg-yellow-400 top-1/4 left-1/4 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div className="w-full max-w-md  text-white bg-white/10 p-8 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-xl">
          <div className="w-12 h-12 bg-white/20 rounded-2xl mb-6 flex justify-center items-center">
            <svg
              className="w-6 h6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 016.447 15.276 7 7 0 00-12.895 0A9 9 0 0112 3Zm0 2a4 4 0 100 8 4 4 0 000-8Zm0 2a2 2 0 110 4 2 2 0 010-4Zm-.1 9.001L11.899 16a5 5 0 014.904 3.61A8.96 8.96 0 0112 21a8.96 8.96 0 01-4.804-1.391 5 5 0 014.704-3.608Z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-2xl">Secure Premium Access</h3>
          <p className="mt-2 text-sm text-white/70">
            Experience the future of UI design with real-time hardware
            accelerated backdrop filters.
          </p>
          <button className="mt-6 w-full bg-white py-3 text-purple-700 font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.03] active:scale-95">
            Upgrade Account
          </button>
        </div>
      </div>
    </div>
  );
}
