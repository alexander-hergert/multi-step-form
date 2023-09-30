interface FormInput {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro" | null;
  yearly: boolean;
  addOns: string[] | null;
}

const FinishingUp = (values: FormInput) => {
  let addOns: string = "";

  if (values.addOns) {
    addOns = values.addOns.join(", ");
  }

  return (
    <div>
      <article>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
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
          <p></p>
        </div>
      </article>
    </div>
  );
};

export default FinishingUp;
