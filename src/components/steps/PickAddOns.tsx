import { InfoProps } from "../../types";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const Label = styled.label<{ $bordercolor?: string }>`
  display: block;
  border: 2px solid lightgray;
  border-radius: 10px;
  border-color: ${(props) => props.$bordercolor || "lightgray"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`;

const Input = styled.input`
  cursor: pointer;
  position: relative;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-sizing: border-box;

  &:checked::after {
    content: "";
    background-image: url("assets/images/icon-checkmark.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: darkblue;
    position: absolute;
    border-width: 0;
    inset: 0;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 4px;
  }
`;

const PickAddOns = ({ register, errors }: InfoProps) => {
  const { watch } = useGlobalContext()!;
  const values = watch();

  return (
    <div>
      <article>
        <h1 className="text-2xl font-bold text-blue-900">Pick add-ons</h1>
        <p className="my-3 text-slate-400">
          Add-ons help enhance your gaming experience.
        </p>
      </article>
      <Label
        className={
          values.addOns && values.addOns?.includes("Online service")
            ? " bg-slate-300 p-3"
            : "p-3"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("Online service")
            ? "purple"
            : ""
        }
      >
        <div className="flex items-center gap-5">
          <Input
            type="checkbox"
            value="Online service"
            {...register("addOns")}
          />
          <div>
            <p className="text-blue-900 font-bold">Online service</p>
            <p>Access to multiplayer games</p>
          </div>
        </div>
        {values.yearly === "false" && <p className="text-violet-500">+$1/mo</p>}
        {values.yearly === "true" && <p className="text-violet-500">+$10/yr</p>}
      </Label>
      <Label
        className={
          values.addOns && values.addOns?.includes("Larger storage")
            ? " bg-slate-300 p-3 my-5"
            : "p-3 my-5"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("Larger storage")
            ? "purple"
            : ""
        }
      >
        <div className="flex items-center gap-5">
          <Input
            type="checkbox"
            value="Larger storage"
            {...register("addOns")}
          />
          <div>
            <p className="text-blue-900 font-bold">Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
        </div>
        {values.yearly === "false" && <p className="text-violet-500">+$2/mo</p>}
        {values.yearly === "true" && <p className="text-violet-500">+$20/yr</p>}
      </Label>
      <Label
        className={
          values.addOns && values.addOns?.includes("Customizable profile")
            ? " bg-slate-300 p-3"
            : "p-3"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("Customizable profile")
            ? "purple"
            : ""
        }
      >
        <div className="flex items-center gap-5">
          <Input
            type="checkbox"
            value="Customizable profile"
            {...register("addOns")}
          />
          <div>
            <p className="text-blue-900 font-bold">Customizable profile</p>
            <p>Custom theme on your profile</p>
          </div>
        </div>
        {values.yearly === "false" && <p className="text-violet-500">+$2/mo</p>}
        {values.yearly === "true" && <p className="text-violet-500">+$20/yr</p>}
      </Label>
    </div>
  );
};

export default PickAddOns;
