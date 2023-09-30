import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormInput {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro" | null;
  yearly: boolean;
  addOns: string[] | null;
}

interface PersonalInfoProps {
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
}

const PickAddOns = ({ register, errors }: PersonalInfoProps) => {
  return (
    <div>
      <article>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </article>
      <label>
        <input type="checkbox" value="online-service" {...register("addOns")} />
        Checkbox 1
      </label>
      <label>
        <input type="checkbox" value="larger-storage" {...register("addOns")} />
        Checkbox 2
      </label>
      <label>
        <input
          type="checkbox"
          value="customizable-profile"
          {...register("addOns")}
        />
        Checkbox 3
      </label>
    </div>
  );
};

export default PickAddOns;
