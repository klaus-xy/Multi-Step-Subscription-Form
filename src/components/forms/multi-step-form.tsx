import React from "react";

const MultiStepForm = () => {
  return (
    <div className="min-h-screen w-full max-w-5xl flex flex-col p-4 bg-slate-400">
      {/* BLOCK 1 */}
      <div className=" bg-emerald-400">Steps</div>

      {/* BLOCK 2 */}
      <div className="flex flex-col flex-1 bg-pink-200">
        <div className="flex-1">Form Contents</div>
        <div>Nav Bar</div>
      </div>
    </div>
  );
};

export default MultiStepForm;
