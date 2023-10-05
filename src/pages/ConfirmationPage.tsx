const ConfirmationPage = () => {
  return (
    <section className="text-center md:w-[30rem]">
      <img
        className="m-auto mt-10"
        src="assets/images/icon-thank-you.svg"
        alt="thank-you"
      />
      <h1 className="text-2xl font-bold text-primary-marine-blue mt-5">
        Thank you!
      </h1>
      <p className="mt-5 text-neutral-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default ConfirmationPage;
