import { InfoProps } from "../../types";
import styled from "styled-components";

const Input = styled.input<{ $bordercolor?: string }>`
  border: 1px solid lightgray;
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  outline-color: hsl(213, 96%, 18%);
  border-color: ${(props) => props.$bordercolor || "hsl(229, 24%, 87%)"};

  &:hover {
    cursor: pointer;
  }
`;

const PersonalInfo = ({ register, errors }: InfoProps) => {
  return (
    <div>
      <article>
        <h1 className="max-md:text-2xl md:text-4xl font-bold text-primary-marine-blue">
          Personal info
        </h1>
        <p className="my-3 text-neutral-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
      </article>
      <div className="flex justify-between mt-3">
        <label htmlFor="name" className="block text-primary-marine-blue">
          Name
        </label>
        {errors.name?.type === "required" && (
          <p className="text-primary-strawberry-red font-bold" role="alert">
            This field is required
          </p>
        )}
        {errors.name?.type === "pattern" && (
          <p className="text-primary-strawberry-red font-bold" role="alert">
            Please enter firstname and lastname.
          </p>
        )}
      </div>
      <Input
        $bordercolor={errors.name ? "hsl(354, 84%, 57%)" : ""} //using props this time
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
        <label htmlFor="email" className="block text-primary-marine-blue">
          Email Address
        </label>
        {errors.email?.type === "required" && (
          <p className="text-primary-strawberry-red font-bold" role="alert">
            This field is required
          </p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-primary-strawberry-red font-bold" role="alert">
            Does not match an email
          </p>
        )}
      </div>
      <Input
        $bordercolor={errors.email ? "hsl(354, 84%, 57%)" : ""}
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
        <label htmlFor="phone" className="block text-primary-marine-blue">
          Phone Number
        </label>
        {errors.phone?.type === "required" && (
          <p className="text-primary-strawberry-red font-bold" role="alert">
            This field is required
          </p>
        )}
        {errors.phone?.type === "pattern" && (
          <p className="text-primary-strawberry-red font-bold" role="alert">
            Does not match a phonenumber.
          </p>
        )}
      </div>
      <Input
        $bordercolor={errors.phone ? "hsl(354, 84%, 57%)" : ""}
        id="phone"
        defaultValue=""
        placeholder="e.g. +1 234 567 890"
        {...register("phone", {
          required: true,
          pattern: /^\+(?:[0-9] ?){9,14}[0-9]$/,
        })}
        aria-invalid={errors.phone ? "true" : "false"}
      />
    </div>
  );
};

export default PersonalInfo;
