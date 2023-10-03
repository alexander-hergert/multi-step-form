import { InfoProps } from "../../types";
import styled from "styled-components";

const Input = styled.input<{ $bordercolor?: string }>`
  border: 1px solid lightgray;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  outline-color: purple;
  border-color: ${(props) => props.$bordercolor || "lightgray"};

  &:hover{
    cursor: pointer;
  }
`;

const PersonalInfo = ({ register, errors }: InfoProps) => {
  return (
    <div>
      <article>
        <h1 className="text-2xl font-bold text-blue-900">Personal info</h1>
        <p className="my-3 text-slate-400">
          Please provide your name, email address, and phone number.
        </p>
      </article>
      <div className="flex justify-between mt-3">
        <label htmlFor="name" className="block text-blue-900">
          Name
        </label>
        {errors.name?.type === "required" && (
          <p className="text-red-500 font-bold" role="alert">
            This field is required
          </p>
        )}
        {errors.name?.type === "pattern" && (
          <p className="text-red-500 font-bold" role="alert">
            Please enter firstname and lastname.
          </p>
        )}
      </div>
      <Input
        $bordercolor={errors.name ? "red" : ""} //using props this time
        id="name"
        defaultValue=""
        placeholder="e.g. Stephen King"
        {...register("name", {
          required: true,
          pattern: /^[A-Za-z]+ [A-Za-z]+$/,
        })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      <div className="flex justify-between mt-3">
        <label htmlFor="email" className="block text-blue-900">
          Email Address
        </label>
        {errors.email?.type === "required" && (
          <p className="text-red-500 font-bold" role="alert">
            This field is required
          </p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-red-500 font-bold" role="alert">
            Does not match an email
          </p>
        )}
      </div>
      <Input
        $bordercolor={errors.email ? "red" : ""}
        id="email"
        defaultValue=""
        placeholder="e.g. stephenking@lorem.com"
        {...register("email", {
          required: true,
          pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      <div className="flex justify-between mt-3">
        <label htmlFor="phone" className="block text-blue-900">
          Phone Number
        </label>
        {errors.phone?.type === "required" && (
          <p className="text-red-500 font-bold" role="alert">
            This field is required
          </p>
        )}
        {errors.phone?.type === "pattern" && (
          <p className="text-red-500 font-bold" role="alert">
            Does not match a phonenumber
          </p>
        )}
      </div>
      <Input
        $bordercolor={errors.phone ? "red" : ""}
        id="phone"
        defaultValue=""
        maxLength={10}
        placeholder="e.g. +1 234 567 890"
        {...register("phone", {
          required: true,
          pattern: /^\d{10}$/,
        })}
        aria-invalid={errors.phone ? "true" : "false"}
      />
    </div>
  );
};

export default PersonalInfo;
