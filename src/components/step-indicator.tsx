import { Step } from "@/types/form";
import React from "react";

interface StepIndicatorProps {
  currentStep: Step;
}
const steps = [1, 2, 3, 4];

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex gap-4 text-white">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-8 h-8 flex justify-center items-center border-[1px] border-separate rounded-full text-base font-bold ${
            currentStep === step ? "bg-magnolia text-marine-blue font-bold" : ""
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
