import styled from "styled-components";
import { FormInput, Option } from "../../types";
import { UseFormRegister } from "react-hook-form";

const Label = styled.label<{ $bordercolor?: string }>`
  display: block;
  border: 2px solid hsl(229, 24%, 87%);
  border-radius: 10px;
  border-color: ${(props) => props.$bordercolor || "hsl(229, 24%, 87%)"};
  cursor: pointer;
  display: flex;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    width: 8rem;
    height: 10rem;
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    width: 10rem;
  }
`;

interface Props {
  register: UseFormRegister<FormInput>;
  values: FormInput;
  item: Option;
}

const Options = ({ register, values, item }: Props) => {
  return (
    <Label
      className={
        values.plan === item.plan
          ? " bg-neutral-magnolia p-3 gap-5 my-5"
          : "p-3 gap-5 my-5"
      } //with TailwindCSS
      $bordercolor={values.plan === item.plan ? "hsl(243, 100%, 62%)" : ""} //with Styled Components props
    >
      <input
        className="hidden"
        type="radio"
        value={item.plan}
        {...register("plan")}
        defaultChecked={
          item.plan === "Arcade"
            ? !values.plan
              ? true
              : values.plan === item.plan
            : false
        } //only applies on arcade
      />
      <img className="w-[2.5rem] self-start" src={item.src} alt={item.plan} />
      <div>
        <h2 className="text-primary-marine-blue font-bold">{item.plan}</h2>
        {values.yearly === "false" && (
          <p className="text-neutral-cool-gray">{item.monthly}</p>
        )}
        {values.yearly === "true" && (
          <p className="text-neutral-cool-gray">{item.yearly}</p>
        )}
        {values.yearly === "true" && (
          <p className="text-primary-marine-blue">2 months free</p>
        )}
      </div>
    </Label>
  );
};

export default Options;
