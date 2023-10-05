import { useGlobalContext } from "../../context";
import { FormInput } from "../../types";

const FinishingUp = (values: FormInput) => {
  console.log(values);

  const { setPage } = useGlobalContext()!;

  //using total to evaluate the total price
  let total: number = 0;
  switch (values.plan) {
    case "Arcade":
      total = 9;
      break;
    case "Advanced":
      total = 12;
      break;
    case "Pro":
      total = 15;
      break;
    default:
  }

  if (values.addOns && Array.isArray(values.addOns)) {
    values.addOns?.forEach((item: string) => {
      switch (item) {
        case "Online service":
          total += 1;
          break;
        case "Larger storage":
          total += 2;
          break;
        case "Customizable profile":
          total += 2;
          break;
        default:
      }
    });
  }

  return (
    <div>
      <article>
        <h1 className="text-2xl font-bold text-blue-900">Finishing up</h1>
        <p className="my-3 text-slate-400">
          Double-check everything looks OK before confirming.
        </p>
      </article>
      <article className="bg-slate-200 rounded-xl p-5">
        <div className="mb-3 flex justify-between items-center border-b w-full border-slate-400 pb-3">
          <div>
            <h2>
              {values.plan} ({values.yearly ? "Yearly" : "Monthly"})
            </h2>
            <p
              onClick={() => setPage(2)}
              className="cursor-pointer text-slate-500 underline"
            >
              Change
            </p>
          </div>
          <p className="font-bold text-blue-900">
            {values.plan === "Arcade" && values.yearly === "true"
              ? "$90/yr"
              : values.plan === "Arcade" && values.yearly === "false"
              ? "$9/mo"
              : null}
            {values.plan === "Advanced" && values.yearly === "true"
              ? "$120/yr"
              : values.plan === "Advanced" && values.yearly === "false"
              ? "$12/mo"
              : null}
            {values.plan === "Pro" && values.yearly === "true"
              ? "$150/yr"
              : values.plan === "Pro" && values.yearly === "false"
              ? "$15/mo"
              : null}
          </p>
        </div>
        {values.addOns?.map((addOn: string) => (
          <div key={addOn} className="flex justify-between">
            <p className="text-slate-500">{addOn}</p>
            <p className="text-slate-600 py-1">
              {addOn === "Online service" && values.yearly === "true"
                ? "+$10/yr"
                : addOn === "Online service" && values.yearly === "false"
                ? "+$1/mo"
                : null}
              {addOn === "Larger storage" && values.yearly === "true"
                ? "+$20/yr"
                : addOn === "Larger storage" && values.yearly === "false"
                ? "+$2/mo"
                : null}
              {addOn === "Customizable profile" && values.yearly === "true"
                ? "+$20/yr"
                : addOn === "Customizable profile" && values.yearly === "false"
                ? "+$2/mo"
                : null}
            </p>
          </div>
        ))}
      </article>
      <article className="flex justify-between px-5 mt-5">
        <h2 className="text-slate-500">
          Total (per {values.yearly === "true" ? "year" : "month"})
        </h2>
        <p className="font-bold text-blue-900">
          ${values.yearly === "true" ? total * 10 : total}/
          {values.yearly === "true" ? "yr" : "mo"}
        </p>
      </article>
    </div>
  );
};

export default FinishingUp;
