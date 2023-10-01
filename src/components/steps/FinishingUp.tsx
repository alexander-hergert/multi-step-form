import { FormInput } from "../../types";

const FinishingUp = (values: FormInput) => {
  let addOns: string = "";

  if (values.addOns) {
    addOns = values.addOns.join(", ");
  }

  return (
    <div>
      <article>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </article>
      <article>
        <div>
          <h2>{values.plan}</h2>
          <p></p>
        </div>
        <div>
          <h2>{addOns}</h2>
          <p></p>
        </div>
        <div>
          <h2></h2>
          <p>Total (per month/year)</p>
        </div>
      </article>
    </div>
  );
};

export default FinishingUp;
