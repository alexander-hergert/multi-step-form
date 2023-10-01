import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface FormInput {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro" | null;
  yearly: boolean;
  addOns: string[] | boolean;
}

export interface InfoProps {
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
}
