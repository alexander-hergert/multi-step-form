import PersonalInfo from "../components/steps/PersonalInfo";
import SelectYourPlan from "../components/steps/SelectYourPlan";
import PickAddOns from "../components/steps/PickAddOns";
import FinishingUp from "../components/steps/FinishingUp";
import { FormInput } from "../types";
import { useGlobalContext } from "../context";

const HomePage = () => {
  const { page, register, watch, errors } = useGlobalContext()!;
  const values: FormInput = watch();

  return (
    <form className="py-5">
      {page === 1 && <PersonalInfo register={register} errors={errors} />}
      {page === 2 && <SelectYourPlan register={register} errors={errors} />}
      {page === 3 && <PickAddOns register={register} errors={errors} />}
      {page === 4 && <FinishingUp {...values} />}
    </form>
  );
};

export default HomePage;
