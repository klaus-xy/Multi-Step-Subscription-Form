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
      description: "Get access to our online service",
      price: formData.billingCycle === "monthly" ? 1 : 10,
    },
    {
      id: "largerStorage",
      name: "Larger Storage",
      description: "Get additional storage space",
      price: formData.billingCycle === "monthly" ? 2 : 20,
    },
    {
      id: "customizableProfile",
      name: "Customizable Profile",
      description: "Customize your profile",
      price: formData.billingCycle === "monthly" ? 2 : 20,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {addOns.map((addOn) => (
        <div key={addOn.id} className="flex items-center gap-4 border p-4">
          <Checkbox
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
            className="flex items-center justify-between w-full"
          >
            <div>
              <h3>{addOn.name}</h3>
              <p>{addOn.description}</p>
            </div>
            <div>+${addOn.price}</div>
          </Label>
        </div>
      ))}
    </div>
  );
};

export default AddOns;
