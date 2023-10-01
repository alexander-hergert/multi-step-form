import PersonalInfo from "../components/steps/PersonalInfo";
import SelectYourPlan from "../components/steps/SelectYourPlan";
import PickAddOns from "../components/steps/PickAddOns";
import FinishingUp from "../components/steps/FinishingUp";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { FormInput } from "../types";

const HomePage = () => {
  const [page, setPage] = useState<number>(1);

  const handlePrevPage = (): void => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = (): void => {
    if (page < 4) {
      setPage((prev) => prev + 1);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  const values = watch();
  console.log(values);

  return (
    <main>
      <section>
        {page === 1 && <div>Step 1 Your info</div>}
        {page === 2 && <div>Step 2 Select plan</div>}
        {page === 3 && <div>Step 3 Add-ons</div>}
        {page === 4 && <div>Step 4 Summary</div>}
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="border">
        {page === 1 && <PersonalInfo register={register} errors={errors} />}
        {page === 2 && <SelectYourPlan register={register} errors={errors} />}
        {page === 3 && <PickAddOns register={register} errors={errors} />}
        {page === 4 && <FinishingUp {...values} />}
        {page === 4 && <input type="submit" value="SEND" />}
      </form>
      {page > 1 && <button onClick={handlePrevPage}>Go Back</button>}
      {page < 4 && <button onClick={handleNextPage}>Next Step</button>}
    </main>
  );
};

export default HomePage;
