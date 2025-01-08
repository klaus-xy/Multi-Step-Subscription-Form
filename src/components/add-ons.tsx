import { FormData } from "@/types/form";

import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

interface AddOnsProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const AddOns = ({ formData, updateFormData }: AddOnsProps) => {
  const addOns = [
    {
      id: "onlineService",
      name: "Online Service",
      description: "Access to multiplayer games",
      price: formData.billingCycle === "monthly" ? 1 : 10,
    },
    {
      id: "largerStorage",
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: formData.billingCycle === "monthly" ? 2 : 20,
    },
    {
      id: "customizableProfile",
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: formData.billingCycle === "monthly" ? 2 : 20,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {addOns.map((addOn) => (
        <div
          key={addOn.id}
          className={`flex items-center gap-4 border p-3 rounded-lg ${
            formData.addons[addOn.id]
              ? "bg-magnolia border-marine-blue"
              : "bg-white border-gray-300"
          }`}
        >
          <Checkbox
            className={`w-5 h-5 border-cool-gray data-[state=checked]:bg-purplish-blue data-[state=checked]:border-purplish-blue`}
            id={addOn.id}
            checked={formData.addons[addOn.id]}
            onCheckedChange={(checked) =>
              updateFormData({
                addons: { ...formData.addons, [addOn.id]: checked as boolean },
              })
            }
          />
          <Label
            htmlFor={addOn.id}
            className="flex items-center justify-between w-full "
          >
            <div>
              <h3 className="text-base font-semibold">{addOn.name}</h3>
              <p className="text-cool-gray text-sm font-normal">
                {addOn.description}
              </p>
            </div>
            <div className="text-purplish-blue">
              +${addOn.price}/
              {formData.billingCycle === "monthly" ? "mo" : "yr"}
            </div>
          </Label>
        </div>
      ))}
    </div>
  );
};

export default AddOns;
