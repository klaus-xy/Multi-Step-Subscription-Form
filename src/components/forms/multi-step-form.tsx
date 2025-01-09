"use client";
import { Button } from "../ui/button";
import StepIndicator from "../step-indicator";
import { FormData, Step, ValidationErrors } from "@/types/form";
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

const pageInfo = [
  {
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Plan Selection",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing Up",
    description: "Double-check everything looks OK before confirming.",
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
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  console.log(formData);
  const validatePersonalInfo = (data: FormData) => {
    const errors: ValidationErrors = {};
    if (!data.name.trim()) errors.name = "This field is required";
    if (!data.email.trim()) errors.email = "This field is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "Please enter a valid email address";
    if (!data.phone.trim()) errors.phone = "This field is required";
    else if (!/^\+?[1-9]\d{1,14}$/.test(data.phone))
      errors.phone = "Please enter a valid phone number";
    return errors;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      const errors = validatePersonalInfo(formData);
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return;
      }
    }
    setValidationErrors({});
    setCurrentStep((curr) => (curr >= 4 ? curr : curr + 1) as Step);
  };

  const handlePrev = () => {
    setCurrentStep((curr) => (curr <= 1 ? curr : curr - 1) as Step);
  };

  // const handleGoBack = (step: Step) => {
  //   setCurrentStep(step);
  // };

  const handleUpdateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 4) {
      setIsSubmitted(true);
      console.log("Form Submitted");
      return;
    }
    handleNext();
  };

  return (
    <div className="h-screen w-full max-w-2xl sm:max-w-3xl md:max-w-4xl flex flex-col p-0 sm:p-4 bg-slate-400 sm:flex-row sm:h-[75vh] sm:max-h-[600px] sm:rounded-xl">
      <div className="min-h-52 sm:min-w-56 bg-violet-600 bg-[url(/images/bg-sidebar-mobile.svg)] bg-cover bg-center sm:bg-[url(/images/bg-sidebar-desktop.svg)] flex items-start justify-center sm:justify-start rounded-xl ">
        <div className="mt-8 mx-6">
          <StepIndicator currentStep={currentStep} />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 bg-magnolia relative"
      >
        <div className="flex-1">
          <Card className="min-h-[300px] w-[92%] sm:w-full mx-auto relative -top-[88px] py-2 sm:top-0 sm:rounded-none sm:shadow-none  sm:px-2 md:px-8">
            {isSubmitted ? (
              <CardContent>
                <Confirmation />
              </CardContent>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl">
                    {pageInfo[currentStep - 1].title}
                  </CardTitle>
                  <CardDescription className="text-base text-cool-gray">
                    {pageInfo[currentStep - 1].description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {currentStep === 1 && (
                    <PersonalInfo
                      formData={formData}
                      updateFormData={handleUpdateFormData}
                      validationErrors={validationErrors}
                    />
                  )}
                  {currentStep === 2 && (
                    <PlanSelection
                      formData={formData}
                      updateFormData={handleUpdateFormData}
                    />
                  )}
                  {currentStep === 3 && (
                    <AddOns
                      formData={formData}
                      updateFormData={handleUpdateFormData}
                    />
                  )}
                  {currentStep === 4 && (
                    <Summary formData={formData} onGoBack={setCurrentStep} />
                  )}
                </CardContent>
              </>
            )}
          </Card>
        </div>
        {!isSubmitted && (
          <div className="flex justify-between bg-white p-6 absolute sm:relative sm:mt-6 bottom-0 w-full">
            {currentStep !== 1 && (
              <Button
                type="button"
                variant={"ghost"}
                onClick={handlePrev}
                className="text-cool-gray"
              >
                Go Back
              </Button>
            )}
            <Button
              type="submit"
              size={"lg"}
              className={`ml-auto ${
                currentStep === 4
                  ? "bg-purplish-blue  hover:bg-purplish-blue"
                  : ""
              }`}
            >
              {currentStep === 4 ? "Confirm" : "Next Step"}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
