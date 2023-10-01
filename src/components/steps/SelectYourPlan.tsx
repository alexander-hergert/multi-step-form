import { InfoProps } from "../../types";

const SelectYourPlan = ({ register, errors }: InfoProps) => {
  return (
    <div>
      <article>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </article>
      <div>
        <label>
          <input
            type="radio"
            value="Arcade"
            {...register("plan")}
            defaultChecked
          />
          Arcade $9/mo $90/yr 2 months free
        </label>
        <label>
          <input type="radio" value="Advanced" {...register("plan")} />
          Advanced $12/mo $120/yr 2 months free
        </label>
        <label>
          <input type="radio" value="Pro" {...register("plan")} />
          Pro $15/mo $150/yr 2 months free
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="false"
            {...register("yearly")}
            defaultChecked
          />
          Monthly
        </label>

        <label>
          <input type="radio" value="true" {...register("yearly")} />
          Yearly
        </label>
      </div>
    </div>
  );
};

export default SelectYourPlan;
