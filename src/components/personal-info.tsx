"use client";

import { FormData, ValidationErrors } from "@/types/form";
import React, { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface PersonalInfoProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  validationErrors: ValidationErrors;
}

const PersonalInfo = ({
  formData,
  updateFormData,
  validationErrors,
}: PersonalInfoProps) => {
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  useEffect(() => {
    // Set all fields as touched when there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      setTouched({
        name: true,
        email: true,
        phone: true,
      });
    }
  }, [validationErrors]);

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field: keyof typeof touched, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="flex justify-between items-center">
          Name
          {validationErrors.name && touched.name && (
            <span className="text-destructive text-sm">
              {validationErrors.name}
            </span>
          )}
        </Label>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          placeholder="e.g. Klaus Mikaelson"
          className={
            validationErrors.name && touched.name ? "border-destructive" : ""
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="flex justify-between items-center">
          Email
          {validationErrors.email && touched.email && (
            <span className="text-strawberry-red text-sm">
              {validationErrors.email}
            </span>
          )}
        </Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          placeholder="e.g. reeaaperrr69@mail.com"
          className={
            validationErrors.email && touched.email
              ? "border-strawberry-red"
              : ""
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone" className="flex justify-between items-center">
          Phone
          {validationErrors.phone && touched.phone && (
            <span className="text-strawberry-red text-sm">
              {validationErrors.phone}
            </span>
          )}
        </Label>
        <Input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          onBlur={() => handleBlur("phone")}
          placeholder="e.g. +1 123 456 7890"
          className={
            validationErrors.phone && touched.phone
              ? "border-strawberry-red"
              : ""
          }
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
