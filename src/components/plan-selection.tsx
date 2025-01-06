import { FormData } from "@/types/form";
import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import Image from "next/image";

interface PlanSelectionProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const PlanSelection = ({ formData, updateFormData }: PlanSelectionProps) => {
  const plans = [
    {
      id: "arcade",
      name: "Arcade",
      price: formData.billingCycle === "monthly" ? 9 : 90,
      icon: "/images/icon-arcade.svg",
    },
    {
      id: "advanced",
      name: "Advanced",
      price: formData.billingCycle === "monthly" ? 12 : 120,
      icon: "/images/icon-advanced.svg",
    },
    {
      id: "pro",
      name: "Pro",
      price: formData.billingCycle === "monthly" ? 15 : 150,
      icon: "/images/icon-pro.svg",
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
              className={`flex items-start gap-4 border  p-4 rounded-lg ${
                formData.plan === plan.id
                  ? "bg-magnolia border-purplish-blue"
                  : "bg-white border-gray-300"
              }`}
            >
              <Image src={plan.icon} alt="plan-image" width={40} height={40} />
              <div className="">
                <span className="text-lg">{plan.name}</span>

                <div className="flex flex-col gap-2 text-cool-gray mt-1">
                  <span>
                    ${plan.price}/
                    {formData.billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                  {formData.billingCycle === "yearly" && (
                    <span className="text-marine-blue">2 months free</span>
                  )}
                </div>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex items-center justify-center gap-6">
        <span
          className={`font-medium ${
            formData.billingCycle === "monthly" ? "" : "text-cool-gray"
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
          className={`font-medium ${
            formData.billingCycle === "yearly" ? "" : "text-cool-gray"
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default PlanSelection;
