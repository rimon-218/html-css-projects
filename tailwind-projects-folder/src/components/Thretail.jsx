import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
export default function Thretail() {
  return (
    <div>
      <div className="min-h-screen bg-slate-950 text-white p-6 flex justify-center items-center gap-8 flex-col">
        <div className="w-full max-w-sm flex items-center gap-4 bg-slate-900 p-6 border border-slate-800 rounded-2xl shadow-lg ">
          <div className="w-10 h-10 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="flex-1 space-y-2 animate-pulse">
            <div className="h-4 w-2/3  bg-slate-700 rounded"></div>
            <div className="h-3 w-full bg-slate-800 rounded"></div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-slate-400 mb-2">Scroll down to explore</p>
          <div className="w-10 mx-auto h-10 bg-blue-600 rounded-full flex justify-center items-center shadow-lg shadow-blue-500/50 animate-bounce">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h5v-8h4v8h5a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
