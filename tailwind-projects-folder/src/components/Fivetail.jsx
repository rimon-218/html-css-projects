import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
export default function Fivetail() {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center p-6 bg-slate-100">
        <div className="relative w-full max-w-md bg-white p-6 shadow-lg rounded-2xl overflow-hidden ">
          <div className="absolute top-4 right-4 x-10 bg-emerald-500 px-3 py-1 rounded-full text-xs text-white font-bold shadow-md">
            Live Updates
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">System Logs</h3>
          <div className="h-48 overflow-y-auto bg-slate-900 p-4 rounded-xl text-xs text-emerald-500 font-mono space-y-2">
            <p className="border-b border-slate-800 pb-3">
              [10:00 AM] System intialized successfully...
            </p>
            <p className="border-b border-slate-800 pb-1">
              [10:05 AM] Connecting to database cluster-0...
            </p>
            <p className="border-b border-slate-800 pb-1">
              [10:06 AM] Connected! Response time: 14ms.
            </p>
            <p className="border-b border-slate-800 pb-1">
              [10:12 AM] Warning: High memory usage detected.
            </p>
            <p className="border-b border-slate-800 pb-1">
              [10:15 AM] Runnung automated cleanup script...
            </p>
            <p className="border-b border-slate-800 pb-1">
              [10:16 AM] Memory optimized. Freed 1.2GB.
            </p>
            <p className="border-b border-slate-800 pb-1">
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
  );
}
