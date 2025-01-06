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
      <div className="bg-gray-100 p-4">
        <div>
          {formData.plan} {formData.billingCycle} {planPrice}
          <Button onClick={() => onGoBack(2)}>Change</Button>
        </div>
        <Separator />
        <div>
          {selectedAddons.map((addOn) => (
            <div key={addOn}>
              {addOn} {addonPrices[addOn as keyof typeof addonPrices]}
            </div>
          ))}
        </div>
      </div>
      <div>Total:{total}</div>
    </div>
  );
};

export default Summary;
