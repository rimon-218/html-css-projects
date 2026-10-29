import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Onetail() {
  return (
    <div>
      <div className="min-h-screen text-white bg-slate-900 p-6 ">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl">
            <span className="text-xs px-3 py-1 bg-white/20 rounded-full font-bold uppercase">
              Featured
            </span>
            <h2 className="mt-4 text-3xl font-black">Advanced Grid Mastery</h2>
            <p className="mt-2 text-indigo-100 max-w-md">
              This card spans 8 columns on medius scrrens and full 12 columns on
              mobile devices automaticly.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-indigo-400">Analytics</h3>
            <p className="mt-2 text-sm text-slate-400">
              Quick overviw of your weekly grid performance and layout
              statistics.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h4 className="font-bold">Widget Alpha</h4>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h4 className="font-bold">Wdget Beta</h4>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h4 className="font-bold">Widget Gamma</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
