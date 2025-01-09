import { Step } from "@/types/form";
import React from "react";

interface StepIndicatorProps {
  currentStep: Step;
}
const steps = [
  {
    id: 1,
    title: "Step 1",
    description: "Your info",
  },
  {
    id: 2,
    title: "Step 2",
    description: "Select plan",
  },
  {
    id: 3,
    title: "Step 3",
    description: "Add-ons ",
  },
  {
    id: 4,
    title: "Step 4",
    description: "Summary",
  },
];

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex sm:flex-col gap-4 text-white">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-4">
          <div
            className={`w-8 h-8 flex justify-center items-center border-[1px] border-separate rounded-full text-sm font-medium ${
              currentStep === step.id
                ? "bg-light-blue text-marine-blue font-bold"
                : ""
            }`}
          >
            <div>{step.id}</div>
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-col uppercase text-sm font-medium">
              <h3 className="text-cool-gray font-medium"> {step.title}</h3>
              <span className=" text-[13px]">{step.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
