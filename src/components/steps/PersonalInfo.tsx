import { InfoProps } from "../../types";

const PersonalInfo = ({ register, errors }: InfoProps) => {
  return (
    <div>
      <article>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </article>
      <label htmlFor="" className="block">
        Name
      </label>
      <input
        defaultValue=""
        placeholder="e.g. Stephen King"
        {...register("name", {
          required: true,
          pattern: /^[A-Za-z]+ [A-Za-z]+$/,
        })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name?.type === "required" && (
        <p className="text-red-500" role="alert">
          This field is required
        </p>
      )}
      {errors.name?.type === "pattern" && (
        <p className="text-red-500" role="alert">
          Please enter firstname and lastname.
        </p>
      )}
      <label htmlFor="" className="block">
        Email Address
      </label>
      <input
        defaultValue=""
        placeholder="e.g. stephenking@lorem.com"
        {...register("email", {
          required: true,
          pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email?.type === "required" && (
        <p className="text-red-500" role="alert">
          This field is required
        </p>
      )}
      {errors.email?.type === "pattern" && (
        <p className="text-red-500" role="alert">
          Does not match an email
        </p>
      )}
      <label htmlFor="" className="block">
        Phone Number
      </label>
      <input
        defaultValue=""
        maxLength={10}
        placeholder="e.g. +1 234 567 890"
        {...register("phone", {
          required: true,
          pattern: /^\d{10}$/,
        })}
        aria-invalid={errors.phone ? "true" : "false"}
      />
      {errors.phone?.type === "required" && (
        <p className="text-red-500" role="alert">
          This field is required
        </p>
      )}
      {errors.phone?.type === "pattern" && (
        <p className="text-red-500" role="alert">
          Does not match a phonenumber
        </p>
      )}
    </div>
  );
};

export default PersonalInfo;
