import { InfoProps } from "../../types";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

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
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid hsl(229, 24%, 87%);
  border-radius: 4px;
  box-sizing: border-box;

  &:checked::after {
    content: "";
    background-image: url("assets/images/icon-checkmark.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: hsl(243, 100%, 62%);
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
        <h1 className="text-4xl font-bold text-primary-marine-blue">
          Pick add-ons
        </h1>
        <p className="my-3 text-neutral-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
      </article>
      <Label
        className={
          values.addOns && values.addOns?.includes("Online service")
            ? " bg-neutral-magnolia p-3"
            : "p-3"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("Online service")
            ? "hsl(243, 100%, 62%)"
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
            <p className="text-primary-marine-blue font-bold">Online service</p>
            <p>Access to multiplayer games</p>
          </div>
        </div>
        {values.yearly === "false" && (
          <p className="text-primary-purplish-blue">+$1/mo</p>
        )}
        {values.yearly === "true" && (
          <p className="text-primary-purplish-blue">+$10/yr</p>
        )}
      </Label>
      <Label
        className={
          values.addOns && values.addOns?.includes("Larger storage")
            ? " bg-neutral-magnolia p-3 my-5"
            : "p-3 my-5"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("Larger storage")
            ? "hsl(243, 100%, 62%)"
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
            <p className="text-primary-marine-blue font-bold">Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
        </div>
        {values.yearly === "false" && (
          <p className="text-primary-purplish-blue">+$2/mo</p>
        )}
        {values.yearly === "true" && (
          <p className="text-primary-purplish-blue">+$20/yr</p>
        )}
      </Label>
      <Label
        className={
          values.addOns && values.addOns?.includes("Customizable profile")
            ? " bg-neutral-magnolia p-3"
            : "p-3"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("Customizable profile")
            ? "hsl(243, 100%, 62%)"
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
            <p className="text-primary-marine-blue font-bold">
              Customizable profile
            </p>
            <p>Custom theme on your profile</p>
          </div>
        </div>
        {values.yearly === "false" && (
          <p className="text-primary-purplish-blue">+$2/mo</p>
        )}
        {values.yearly === "true" && (
          <p className="text-primary-purplish-blue">+$20/yr</p>
        )}
      </Label>
    </div>
  );
};

export default PickAddOns;
