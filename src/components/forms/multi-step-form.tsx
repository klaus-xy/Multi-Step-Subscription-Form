"use client";
import { Button } from "../ui/button";
import StepIndicator from "../step-indicator";
import { Step } from "@/types/form";
import { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);

  const handleNext = () => {
    setCurrentStep((curr) => (curr >= 4 ? curr : curr + 1) as Step);
  };
  const handlePrev = () => {
    setCurrentStep((curr) => (curr <= 1 ? curr : curr - 1) as Step);
  };
  return (
    <div className="min-h-screen w-full max-w-5xl flex flex-col p-4 bg-slate-400">
      {/* BLOCK 1 */}
      <div className="min-h-52 bg-violet-300 bg-[url(/images/bg-sidebar-mobile.svg)] bg-cover bg-center flex items-start justify-center">
        <div className="mt-8">
          <StepIndicator currentStep={currentStep} />
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className="flex flex-col flex-1 bg-pink-300 relative">
        <div className="flex-1">
          <div className="min-h-[400px] w-[90%] mx-auto bg-emerald-400 relative -top-12 p-4">
            Form Contents
          </div>
        </div>
        <div className="flex justify-between bg-red-300">
          {currentStep !== 1 && <Button onClick={handlePrev}>Prev</Button>}
          <Button onClick={handleNext} className="ml-auto">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
