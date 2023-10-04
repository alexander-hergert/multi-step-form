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
  gap: 1.25rem;
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
          values.addOns && values.addOns?.includes("online-service")
            ? " bg-slate-300 p-3"
            : "p-3"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("online-service")
            ? "purple"
            : ""
        }
      >
        <input type="checkbox" value="online-service" {...register("addOns")} />
        <div>
          <p>Online service</p>
          <p>Access to multiplayer games</p>
        </div>
        {values.yearly === "false" && <p>+$1/mo</p>}
        {values.yearly === "true" && <p>+$10/yr</p>}
      </Label>
      <Label
        className={
          values.addOns && values.addOns?.includes("larger-storage")
            ? " bg-slate-300 p-3 my-5"
            : "p-3 my-5"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("larger-storage")
            ? "purple"
            : ""
        }
      >
        <input type="checkbox" value="larger-storage" {...register("addOns")} />
        <div>
          <p>Larger storage</p>
          <p>Extra 1TB of cloud save</p>
        </div>
        {values.yearly === "false" && <p>+$2/mo</p>}
        {values.yearly === "true" && <p>+$20/yr</p>}
      </Label>
      <Label
        className={
          values.addOns && values.addOns?.includes("customizable-profile")
            ? " bg-slate-300 p-3"
            : "p-3"
        }
        $bordercolor={
          values.addOns && values.addOns?.includes("customizable-profile")
            ? "purple"
            : ""
        }
      >
        <input
          type="checkbox"
          value="customizable-profile"
          {...register("addOns")}
        />
        <div>
          <p>Customizable profile</p>
          <p>Custom theme on your profile</p>
        </div>
        {values.yearly === "false" && <p>+$2/mo</p>}
        {values.yearly === "true" && <p>+$20/yr</p>}
      </Label>
    </div>
  );
};

export default PickAddOns;
