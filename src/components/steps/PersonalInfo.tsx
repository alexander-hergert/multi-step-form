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

const PersonalInfo = ({ register, errors }: PersonalInfoProps) => {
  return (
    <div>
      <article>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </article>
      <label htmlFor="name" className="block">
        Name
      </label>
      <input
        defaultValue="Stephen King"
        {...register("name", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+ [A-Za-z]+$/,
        })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name?.type === "required" && <p role="alert">Name is required</p>}
      <label htmlFor="" className="block">
        Email Address
      </label>
      <input defaultValue="stephenking@lorem.com" {...register("email")} />
      <label htmlFor="" className="block">
        Phone Number
      </label>
      <input defaultValue="1234567890" {...register("phone")} />
    </div>
  );
};

export default PersonalInfo;
