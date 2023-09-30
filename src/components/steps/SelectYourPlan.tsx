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

const SelectYourPlan = ({ register, errors }: PersonalInfoProps) => {
  return (
    <div>
      <article>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </article>
      <div>
        <label>
          <input
            type="radio"
            value="Arcade"
            {...register("plan")}
            defaultChecked
          />
          Arcade
        </label>
        <label>
          <input type="radio" value="Advanced" {...register("plan")} />
          Advanced
        </label>
        <label>
          <input type="radio" value="Pro" {...register("plan")} />
          Pro
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="false"
            {...register("yearly")}
            defaultChecked
          />
          Monthly
        </label>

        <label>
          <input type="radio" value="true" {...register("yearly")} />
          Yearly
        </label>
      </div>
    </div>
  );
};

export default SelectYourPlan;
