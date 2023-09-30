import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  phone: string | number;
  plan: "Arcade" | "Advanced" | "Pro" | null;
  addOns: string[] | null;
}

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <section>
      <article>
        <div>Step 1 Your info</div>
        <div>Step 2 Select plan</div>
        <div>Step 3 Add-ons</div>
        <div>Step 4 Summary</div>
      </article>
      <article>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </article>
      <form onSubmit={handleSubmit(onSubmit)} className="border">
        <label htmlFor="" className="block">
          Name
        </label>
        <input
          defaultValue="Stephen King"
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+ [A-Za-z]+$/,
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
        <label htmlFor="" className="block">
          Email Address
        </label>
        <input defaultValue="stephenking@lorem.com" {...register("email")} />
        <label htmlFor="" className="block">
          Phone Number
        </label>
        <input defaultValue="1234567890" {...register("phone")} />
        <input type="submit" value="SEND" />
      </form>
      <button>Go Back</button>
      <button>Next Step</button>
    </section>
  );
};

export default PersonalInfo;
