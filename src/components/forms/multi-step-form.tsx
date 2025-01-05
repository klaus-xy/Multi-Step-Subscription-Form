"use client";
import { Button } from "../ui/button";
import StepIndicator from "../step-indicator";
import { FormData, Step } from "@/types/form";
import { useState } from "react";
import PersonalInfo from "../personal-info";
import PlanSelection from "../plan-selection";
import AddOns from "../add-ons";
import Summary from "../summary";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Confirmation from "../confirmation";

//zod resolver goes here

const pageInfo = [
  {
    title: "Personal Info",
    description: "Enter your personal information",
  },
  {
    title: "Plan Selection",
    description: "Select a plan that works for you",
  },
  {
    title: "Add-ons",
    description: "Select add-ons for your plan",
  },
  {
    title: "Finishing Up",
    description: "Review your order",
  },
];

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  billingCycle: "monthly",
  addons: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(formData);
  console.log(currentStep);

  const handleNext = () => {
    setCurrentStep((curr) => (curr >= 4 ? curr : curr + 1) as Step);
  };

  const handlePrev = () => {
    setCurrentStep((curr) => (curr <= 1 ? curr : curr - 1) as Step);
  };

  const handleGoBack = (step: Step) => {
    setCurrentStep(step);
  };

  const handleUpdateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 4) {
      //submit the form
      setIsSubmitted(true);
      console.log("Form Submitted");
      return;
    }
    handleNext();
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 bg-pink-300 relative"
      >
        <div className="flex-1">
          <Card className="min-h-[300px] w-[90%] mx-auto relative -top-[86px] ">
            {isSubmitted ? (
              <CardContent>
                <Confirmation />
              </CardContent>
            ) : (
              <>
                <CardHeader>
                  <CardTitle>{pageInfo[currentStep - 1].title}</CardTitle>
                  <CardDescription>
                    {pageInfo[currentStep - 1].description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Personal Info */}
                  {currentStep === 1 && (
                    <PersonalInfo
                      formData={formData}
                      updateFormData={handleUpdateFormData}
                    />
                  )}
                  {/* Plan Selection */}
                  {currentStep === 2 && (
                    <PlanSelection
                      formData={formData}
                      updateFormData={handleUpdateFormData}
                    />
                  )}
                  {/* Add-ons */}
                  {currentStep === 3 && (
                    <AddOns
                      formData={formData}
                      updateFormData={handleUpdateFormData}
                    />
                  )}
                  {/* Summary */}
                  {currentStep === 4 && <Summary formData={formData} />}
                  {/* Thank you page */}
                </CardContent>
              </>
            )}
          </Card>
        </div>
        {!isSubmitted && (
          <div className="flex justify-between bg-red-300 p-4 absolute bottom-0 w-full">
            {currentStep !== 1 && currentStep !== 4 ? (
              <Button type={"button"} onClick={handlePrev}>
                Prev
              </Button>
            ) : (
              currentStep !== 1 && (
                <Button onClick={() => handleGoBack(2)}>Go Back</Button>
              )
            )}
            <Button type={"submit"} className="ml-auto">
              {currentStep === 4 ? "Confirm" : "Next"}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
