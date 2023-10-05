import { FormInput } from "../../types";

const FinishingUp = (values: FormInput) => {
  return (
    <div>
      <article>
        <h1 className="text-2xl font-bold text-blue-900">Finishing up</h1>
        <p className="my-3 text-slate-400">
          Double-check everything looks OK before confirming.
        </p>
      </article>
      <article className="bg-slate-200 rounded p-5">
        <div className="flex justify-between items-center">
          <div>
            <h2>
              {values.plan?.toLocaleUpperCase()} (
              {values.yearly ? "Yearly" : "Monthly"})
            </h2>
            <p className="text-slate-500 underline">Change</p>
          </div>
          <p className="font-bold text-blue-900">
            {values.yearly ? "$90/yr" : "$9/mo"}
          </p>
        </div>
        {values.addOns?.map((addOn: string) => (
          <div key={addOn} className="flex justify-between">
            <p className="text-slate-500">{addOn}</p>
            <p>{addOn === "Online service" ? "+$10/yr" : "+$20/yr"}</p>
          </div>
        ))}
      </article>
      <article>
        <h2></h2>
        <p>Total (per month/year)</p>
      </article>
    </div>
  );
};

export default FinishingUp;
