export interface FormData {
  // Step 1: Personal Info
  name: string;
  email: string;
  phone: string;

  // Step 2: Plan Selection
  plan: "arcade" | "advanced" | "pro";
  billingCycle: "monthly" | "yearly";

  // Step 3: Add-ons
  addons: {
    [key: string]: boolean;

    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
}

export type Step = 1 | 2 | 3 | 4;
