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
        <h1 className="text-4xl font-bold text-primary-marine-blue">
          Finishing up
        </h1>
        <p className="my-3 text-neutral-cool-gray">
          Double-check everything looks OK before confirming.
        </p>
      </article>
      <article className="bg-neutral-magnolia rounded-xl p-5">
        <div className="mb-3 flex justify-between items-center border-b w-full border-neutral-light-gray pb-3">
          <div>
            <h2 className="font-bold text-primary-marine-blue">
              {values.plan} ({values.yearly === "true" ? "Yearly" : "Monthly"})
            </h2>
            <p
              onClick={() => setPage(2)}
              className="cursor-pointer text-neutral-cool-gray underline"
            >
              Change
            </p>
          </div>
          <p className="font-bold text-primary-marine-blue">
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
            <p className="text-neutral-cool-gray">{addOn}</p>
            <p className="text-neutral-cool-gray py-1">
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
        <h2 className="text-neutral-cool-gray">
          Total (per {values.yearly === "true" ? "year" : "month"})
        </h2>
        <p className="font-bold text-primary-purplish-blue">
          +${values.yearly === "true" ? total * 10 : total}/
          {values.yearly === "true" ? "yr" : "mo"}
        </p>
      </article>
    </div>
  );
};

export default FinishingUp;
