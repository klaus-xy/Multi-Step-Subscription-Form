import React from "react";
import { Button } from "../ui/button";

const MultiStepForm = () => {
  return (
    <div className="min-h-screen w-full max-w-5xl flex flex-col p-4 bg-slate-400">
      {/* BLOCK 1 */}
      <div className="min-h-52 bg-violet-300 bg-[url(/images/bg-sidebar-mobile.svg)] bg-cover bg-center flex items-start justify-center">
        <div className="mt-8">Steps go here...</div>
      </div>

      {/* BLOCK 2 */}
      <div className="flex flex-col flex-1 bg-pink-300 relative">
        <div className="flex-1">
          <div className="min-h-[400px] w-[90%] mx-auto bg-emerald-400 relative -top-12 p-4">
            Form Contents
          </div>
        </div>
        <div className="flex justify-between items-center bg-red-300">
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
