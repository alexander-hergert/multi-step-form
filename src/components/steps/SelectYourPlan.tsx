import { InfoProps } from "../../types";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const Label = styled.label<{ $bordercolor?: string }>`
  display: block;
  border: 2px solid lightgray;
  border-radius: 10px;
  border-color: ${(props) => props.$bordercolor || "lightgray"};
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
  console.log(values);

  return (
    <div>
      <article>
        <h1 className="text-2xl font-bold text-blue-900">Select your plan</h1>
        <p className="my-3 text-slate-400">
          You have the option of monthly or yearly billing.
        </p>
      </article>
      <div className="md:flex gap-5">
        <Label
          className={values.plan === "arcade" ? " bg-slate-300 p-3" : "p-3"} //with TailwindCSS
          $bordercolor={values.plan === "arcade" ? "purple" : ""} //with Styled Components props
        >
          <input
            className="hidden"
            type="radio"
            value="arcade"
            {...register("plan")}
            defaultChecked
          />
          <div>
            <img src="/assets/images/icon-arcade.svg" alt="arcade" />
          </div>
          <div>
            <h2 className="text-blue-900 font-bold">Arcade</h2>
            {values.yearly === "false" && (
              <p className="text-slate-400">$9/mo</p>
            )}
            {values.yearly === "true" && (
              <p className="text-slate-400">$90/yr</p>
            )}
            {values.yearly === "true" && (
              <p className="text-blue-900">2 months free</p>
            )}
          </div>
        </Label>
        <Label
          className={
            values.plan === "advanced" ? " bg-slate-300 p-3 my-5" : " p-3 my-5"
          }
          $bordercolor={values.plan === "advanced" ? "purple" : ""}
        >
          <input
            className="hidden"
            type="radio"
            value="advanced"
            {...register("plan")}
          />
          <div>
            <img src="/assets/images/icon-advanced.svg" alt="advanced" />
          </div>
          <div>
            <h2 className="text-blue-900 font-bold">Advanced</h2>
            {values.yearly === "false" && (
              <p className="text-slate-400">$12/mo</p>
            )}
            {values.yearly === "true" && (
              <p className="text-slate-400">$120/yr</p>
            )}
            {values.yearly === "true" && (
              <p className="text-blue-900">2 months free</p>
            )}
          </div>
        </Label>
        <Label
          className={
            values.plan === "pro" ? " bg-slate-300 p-3 my-5" : "p-3 my-5"
          }
          $bordercolor={values.plan === "pro" ? "purple" : ""}
        >
          <input
            className="hidden"
            type="radio"
            value="pro"
            {...register("plan")}
          />
          <div>
            <img src="/assets/images/icon-pro.svg" alt="pro" />
          </div>
          <div>
            <h2 className="text-blue-900 font-bold">Pro</h2>
            {values.yearly === "false" && (
              <p className="text-slate-400">Pro $15/mo</p>
            )}
            {values.yearly === "true" && (
              <p className="text-slate-400">$150/yr</p>
            )}
            {values.yearly === "true" && (
              <p className="text-blue-900">2 months free</p>
            )}
          </div>
        </Label>
      </div>
      <div className="md:mt-10 bg-slate-200 rounded-lg py-3 flex justify-center items-center gap-5">
        <label
          htmlFor="monthly"
          className={
            values.yearly === "false"
              ? "text-blue-900 cursor-pointer"
              : "text-slate-500 cursor-pointer"
          }
        >
          Monthly
        </label>
        <div className="bg-blue-900 rounded-xl w-10 h-5 flex items-center justify-center">
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
              ? "text-blue-900 cursor-pointer"
              : "text-slate-500 cursor-pointer"
          }
        >
          Yearly
        </label>
      </div>
    </div>
  );
};

export default SelectYourPlan;
