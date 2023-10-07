import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface FormInput {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro" | null;
  yearly: string;
  addOns: string[] | boolean;
}

export interface InfoProps {
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
}

export interface Option {
  plan: string;
  src: string;
  monthly: string;
  yearly: string;
}

export interface AddOn {
  addOn: string;
  description: string;
  monthly: string;
  yearly: string;
}
