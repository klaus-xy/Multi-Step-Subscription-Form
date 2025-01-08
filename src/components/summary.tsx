import { FormData, Step } from "@/types/form";
import { Separator } from "./ui/separator";

import { Button } from "./ui/button";

interface SummaryProps {
  formData: FormData;
  onGoBack: (step: Step) => void;
}
const Summary = ({ formData, onGoBack }: SummaryProps) => {
  const planPrices = {
    arcade: formData.billingCycle === "monthly" ? 9 : 90,
    advanced: formData.billingCycle === "monthly" ? 12 : 120,
    pro: formData.billingCycle === "monthly" ? 15 : 150,
  };
  const planPrice = planPrices[formData.plan];

  const addonPrices = {
    onlineService: formData.billingCycle === "monthly" ? 1 : 10,
    largerStorage: formData.billingCycle === "monthly" ? 2 : 20,
    customizableProfile: formData.billingCycle === "monthly" ? 2 : 20,
  };

  const selectedAddons = Object.entries(formData.addons)
    .filter(([_, selected]) => selected)
    .map(([key]) => key);

  const total =
    planPrice +
    selectedAddons.reduce(
      (acc, key) => acc + addonPrices[key as keyof typeof addonPrices],
      0
    );

  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-md">
        {/* SELECTED PLAN */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex flex-col justify-center">
            <h3 className="capitalize font-semibold ">
              {formData.plan} ({formData.billingCycle})
            </h3>
            <span
              onClick={() => onGoBack(2)}
              className="text-cool-gray underline hover:cursor-pointer hover:text-marine-blue"
            >
              Change
            </span>
          </div>

          <span className="font-semibold">
            ${planPrice}/{formData.billingCycle === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        <Separator />

        <div className="mt-4">
          {selectedAddons.map((addOn) => (
            <div
              key={addOn}
              className="flex justify-between items-center text-cool-gray mb-2 "
            >
              <span className="capitalize">
                {addOn === "onlineService"
                  ? "Larger Storage"
                  : addOn === "largerStorage"
                  ? "Online Service"
                  : "Customizable Profile"}
              </span>
              <span className="text-marine-blue">
                ${addonPrices[addOn as keyof typeof addonPrices]}/
                {formData.billingCycle === "monthly" ? "mo" : "yr"}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* TOTAL */}
      <div className="flex justify-between items-center text-cool-gray mt-6 ">
        Total (per {formData.billingCycle === "monthly" ? "month" : "year"}){" "}
        <span className="font-bold text-lg text-purplish-blue">
          +${total}/{formData.billingCycle === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
};

export default Summary;
