import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { FormInput, AddOn } from "../../types";

const Label = styled.label<{ $bordercolor?: string }>`
  display: block;
  border: 2px solid hsl(229, 24%, 87%);
  border-radius: 10px;
  border-color: ${(props) => props.$bordercolor || "hsl(229, 24%, 87%)"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`;

const Input = styled.input`
  cursor: pointer;
  position: relative;
  width: 1rem;
  height: 1rem;
  appearance: none;
  box-sizing: border-box;
  outline: 1px solid lightgray;
  border-radius: 4px;

  &:checked::after {
    content: "";
    background-image: url("assets/images/icon-checkmark.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: hsl(243, 100%, 62%);
    position: absolute;
    border-width: 0;
    inset: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 4px;
  }

  @media only screen and (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;

    &:checked::after {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

interface Props {
  register: UseFormRegister<FormInput>;
  values: FormInput;
  item: AddOn;
}

const AddOns = ({ register, values, item }: Props) => {
  return (
    <Label
      className={
        Array.isArray(values.addOns) && values.addOns?.includes(item.addOn)
          ? " bg-neutral-magnolia p-3 mb-5"
          : "p-3 mb-5"
      }
      $bordercolor={
        Array.isArray(values.addOns) && values.addOns?.includes(item.addOn)
          ? "hsl(243, 100%, 62%)"
          : ""
      }
    >
      <div className="flex items-center gap-5">
        <Input type="checkbox" value={item.addOn} {...register("addOns")} />
        <div>
          <p className="text-primary-marine-blue font-bold">{item.addOn}</p>
          <p>{item.description}</p>
        </div>
      </div>
      {values.yearly === "false" && (
        <p className="text-primary-purplish-blue">{item.monthly}</p>
      )}
      {values.yearly === "true" && (
        <p className="text-primary-purplish-blue">{item.yearly}</p>
      )}
    </Label>
  );
};

export default AddOns;
