import { InfoProps } from "../../types";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const Label = styled.label<{ $bordercolor?: string }>`
  display: block;
  border: 2px solid hsl(229, 24%, 87%);
  border-radius: 10px;
  border-color: ${(props) => props.$bordercolor || "hsl(229, 24%, 87%)"};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 8rem;
    height: 10rem;
    margin: 0;
  }
`;

const Input = styled.input`
  cursor: pointer;
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0;

  &:checked::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: white;
  }
`;

const SelectYourPlan = ({ register, errors }: InfoProps) => {
  const { watch } = useGlobalContext()!;
  const values = watch();

  return (
    <div>
      <article>
        <h1 className="text-4xl font-bold text-primary-marine-blue">
          Select your plan
        </h1>
        <p className="my-3 text-neutral-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </article>
      <div className="md:flex gap-5">
        <Label
          className={
            values.plan === "Arcade" ? " bg-neutral-magnolia p-3" : "p-3"
          } //with TailwindCSS
          $bordercolor={values.plan === "Arcade" ? "hsl(243, 100%, 62%)" : ""} //with Styled Components props
        >
          <input
            className="hidden"
            type="radio"
            value="Arcade"
            {...register("plan")}
            defaultChecked
          />
          <div>
            <img src="/assets/images/icon-arcade.svg" alt="Arcade" />
          </div>
          <div>
            <h2 className="text-primary-marine-blue font-bold">Arcade</h2>
            {values.yearly === "false" && (
              <p className="text-neutral-cool-gray">$9/mo</p>
            )}
            {values.yearly === "true" && (
              <p className="text-neutral-cool-gray">$90/yr</p>
            )}
            {values.yearly === "true" && (
              <p className="text-primary-marine-blue">2 months free</p>
            )}
          </div>
        </Label>
        <Label
          className={
            values.plan === "Advanced"
              ? " bg-neutral-magnolia p-3 my-5"
              : " p-3 my-5"
          }
          $bordercolor={values.plan === "Advanced" ? "hsl(243, 100%, 62%)" : ""}
        >
          <input
            className="hidden"
            type="radio"
            value="Advanced"
            {...register("plan")}
          />
          <div>
            <img src="/assets/images/icon-advanced.svg" alt="Advanced" />
          </div>
          <div>
            <h2 className="text-primary-marine-blue font-bold">Advanced</h2>
            {values.yearly === "false" && (
              <p className="text-neutral-cool-gray">$12/mo</p>
            )}
            {values.yearly === "true" && (
              <p className="text-neutral-cool-gray">$120/yr</p>
            )}
            {values.yearly === "true" && (
              <p className="text-primary-marine-blue">2 months free</p>
            )}
          </div>
        </Label>
        <Label
          className={
            values.plan === "Pro" ? " bg-neutral-magnolia p-3 my-5" : "p-3 my-5"
          }
          $bordercolor={values.plan === "Pro" ? "hsl(243, 100%, 62%)" : ""}
        >
          <input
            className="hidden"
            type="radio"
            value="Pro"
            {...register("plan")}
          />
          <div>
            <img src="/assets/images/icon-pro.svg" alt="Pro" />
          </div>
          <div>
            <h2 className="text-primary-marine-blue font-bold">Pro</h2>
            {values.yearly === "false" && (
              <p className="text-neutral-cool-gray">Pro $15/mo</p>
            )}
            {values.yearly === "true" && (
              <p className="text-neutral-cool-gray">$150/yr</p>
            )}
            {values.yearly === "true" && (
              <p className="text-primary-marine-blue">2 months free</p>
            )}
          </div>
        </Label>
      </div>
      <div className="md:mt-10 bg-neutral-magnolia rounded-lg py-3 flex justify-center items-center gap-5">
        <label
          htmlFor="monthly"
          className={
            values.yearly === "false"
              ? "text-primary-marine-blue cursor-pointer"
              : "text-neutral-cool-gray cursor-pointer"
          }
        >
          Monthly
        </label>
        <div className="bg-primary-marine-blue rounded-xl w-10 h-5 flex items-center justify-center">
          <Input
            id="monthly"
            type="radio"
            value="false"
            {...register("yearly")}
            defaultChecked={!values.yearly ? true : values.yearly === "false"}
            className={values.yearly === "true" ? "opacity-0" : ""}
          />
          <Input
            id="yearly"
            type="radio"
            value="true"
            {...register("yearly")}
            defaultChecked={values.yearly === "true"}
            className={values.yearly === "false" ? "opacity-0" : ""}
          />
        </div>
        <label
          htmlFor="yearly"
          className={
            values.yearly === "true"
              ? "text-primary-marine-blue cursor-pointer"
              : "text-neutral-cool-gray cursor-pointer"
          }
        >
          Yearly
        </label>
      </div>
    </div>
  );
};

export default SelectYourPlan;
