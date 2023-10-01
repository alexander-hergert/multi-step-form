import PersonalInfo from "../components/steps/PersonalInfo";
import SelectYourPlan from "../components/steps/SelectYourPlan";
import PickAddOns from "../components/steps/PickAddOns";
import FinishingUp from "../components/steps/FinishingUp";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormInput } from "../types";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const { setFormReady } = useGlobalContext()!;
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormInput>();
  // const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);
  // const onError: SubmitErrorHandler<FormInput> = (data) => console.log(data);

  const handlePrevPage = (): void => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = (): void => {
    handleSubmit(
      (data) => {
        // Handle successful submission
        console.log(data);

        if (Object.keys(errors).length === 0) {
          if (page < 4) {
            setPage((prev) => prev + 1);
          } else {
            setFormReady(true);
            fetch("https://dummyjson.com/products/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => {
                if (response.ok) {
                  navigate("/thankyou");
                } else {
                  console.error("Failed to post data");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
        }
      },
      (errors) => {
        // Handle errors
        console.error("Form submission error:", errors);
      }
    )();
  };

  const values = watch();
  //console.log(values);

  return (
    <main>
      <section>
        {page === 1 && <div>Step 1 Your info</div>}
        {page === 2 && <div>Step 2 Select plan</div>}
        {page === 3 && <div>Step 3 Add-ons</div>}
        {page === 4 && <div>Step 4 Summary</div>}
      </section>
      <form className="border">
        {page === 1 && <PersonalInfo register={register} errors={errors} />}
        {page === 2 && <SelectYourPlan register={register} errors={errors} />}
        {page === 3 && <PickAddOns register={register} errors={errors} />}
        {page === 4 && <FinishingUp {...values} />}
      </form>
      {page > 1 && <button onClick={handlePrevPage}>Go Back</button>}
      {page < 5 && <button onClick={handleNextPage}>Next Step</button>}
    </main>
  );
};

export default HomePage;
