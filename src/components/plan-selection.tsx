import { FormData } from "@/types/form";
import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { Switch } from "./ui/switch";

interface PlanSelectionProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const PlanSelection = ({ formData, updateFormData }: PlanSelectionProps) => {
  const plans = [
    {
      id: "arcade",
      name: "Arcade",
      price: formData.billingCycle === "monthly" ? 9.99 : 99.99,
      icon: "🕹️",
    },
    {
      id: "advanced",
      name: "Advanced",
      price: formData.billingCycle === "monthly" ? 19.99 : 199.99,
      icon: "🚀",
    },
    {
      id: "pro",
      name: "Pro",
      price: formData.billingCycle === "monthly" ? 29.99 : 299.99,
      icon: "🔥",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup
        defaultValue={formData.plan}
        onValueChange={(value: "arcade" | "advanced" | "pro") =>
          updateFormData({ plan: value })
        }
      >
        {plans.map((plan) => (
          <div key={plan.id} className="">
            <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
            <Label
              htmlFor={plan.id}
              className={`flex items-center gap-4 border border-gray-300 p-4 rounded-lg ${
                formData.plan === plan.id ? "bg-emerald-200" : ""
              }`}
            >
              <div>{plan.icon}</div>
              <div className="flex flex-col">
                <div>{plan.name}</div>
                <div>
                  ${plan.price}/
                  {formData.billingCycle === "monthly" ? "mo" : "yr"}
                </div>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex items-center justify-center gap-6">
        <span
          className={`${
            formData.billingCycle === "monthly" ? "font-medium" : ""
          }`}
        >
          Monthly
        </span>
        <Switch
          checked={formData.billingCycle === "yearly"}
          onCheckedChange={(checked) =>
            updateFormData({ billingCycle: checked ? "yearly" : "monthly" })
          }
        />
        <span
          className={`${
            formData.billingCycle === "yearly" ? "font-medium" : ""
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default PlanSelection;
