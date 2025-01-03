import { FormData } from "@/types/form";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface PersonalInfoProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}
const PersonalInfo = ({ formData, updateFormData }: PersonalInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          placeholder="klaus mikaelson"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="reeaaperrr69@mail.com"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          placeholder="+1 123 456 7890"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
