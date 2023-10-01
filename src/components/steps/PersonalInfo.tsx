import { InfoProps } from "../../types";

const PersonalInfo = ({ register, errors }: InfoProps) => {
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
        defaultValue=""
        placeholder="e.g. Stephen King"
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
      <input
        defaultValue=""
        placeholder="e.g. stephenking@lorem.com"
        {...register("email")}
      />
      <label htmlFor="" className="block">
        Phone Number
      </label>
      <input
        defaultValue=""
        placeholder="e.g. +1 234 567 890"
        {...register("phone")}
      />
    </div>
  );
};

export default PersonalInfo;
