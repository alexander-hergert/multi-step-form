import { InfoProps } from "../../types";

const PickAddOns = ({ register, errors }: InfoProps) => {
  return (
    <div>
      <article>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </article>
      <label>
        <input type="checkbox" value="online-service" {...register("addOns")} />
        Online service Access to multiplayer games +$1/mo +$10/yr
      </label>
      <label>
        <input type="checkbox" value="larger-storage" {...register("addOns")} />
        Larger storage Extra 1TB of cloud save +$2/mo +$20/yr
      </label>
      <label>
        <input
          type="checkbox"
          value="customizable-profile"
          {...register("addOns")}
        />
        Customizable Profile Custom theme on your profile +$2/mo +$20/yr
      </label>
    </div>
  );
};

export default PickAddOns;
