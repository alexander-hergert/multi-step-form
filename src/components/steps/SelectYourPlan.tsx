import { InfoProps, Option, FormInput } from "../../types";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";
import { fadeRight } from "../../animations";
import Options from "./Options";

const Input = styled.input`
  cursor: pointer;
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0;

  &:checked::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: white;
  }
`;

const SelectYourPlan = ({ register, errors }: InfoProps) => {
  const { watch } = useGlobalContext()!;
  const values: FormInput = watch();

  const options: Option[] = [
    {
      plan: "Arcade",
      src: "/assets/images/icon-arcade.svg",
      monthly: "$9/mo",
      yearly: "$90/yr",
    },
    {
      plan: "Advanced",
      src: "/assets/images/icon-advanced.svg",
      monthly: "$12/mo",
      yearly: "$120/yr",
    },
    {
      plan: "Pro",
      src: "/assets/images/icon-pro.svg",
      monthly: "$15/mo",
      yearly: "$150/yr",
    },
  ];

  return (
    <motion.div
      initial={fadeRight.hidden}
      animate={fadeRight.visible}
      transition={{ duration: 0.5 }}
    >
      <article>
        <h1 className="max-md:text-2xl md:text-4xl font-bold text-primary-marine-blue">
          Select your plan
        </h1>
        <p className="my-3 text-neutral-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </article>
      <div className="md:flex gap-5">
        {options.map((item) => (
          <Options
            key={item.plan}
            register={register}
            values={values}
            item={item}
          />
        ))}
      </div>
      <div className="md:mt-10 bg-neutral-magnolia rounded-lg py-3 flex justify-center items-center gap-5">
        <label
          htmlFor="monthly"
          className={
            values.yearly === "false"
              ? "text-primary-marine-blue cursor-pointer"
              : "text-neutral-cool-gray cursor-pointer"
          }
        >
          Monthly
        </label>
        <div className="bg-primary-marine-blue rounded-xl w-10 h-5 flex items-center justify-center">
          <Input
            id="monthly"
            type="radio"
            value="false"
            {...register("yearly")}
            defaultChecked={!values.yearly ? true : values.yearly === "false"}
            className={values.yearly === "true" ? "opacity-0" : ""}
          />
          <Input
            id="yearly"
            type="radio"
            value="true"
            {...register("yearly")}
            defaultChecked={values.yearly === "true"}
            className={values.yearly === "false" ? "opacity-0" : ""}
          />
        </div>
        <label
          htmlFor="yearly"
          className={
            values.yearly === "true"
              ? "text-primary-marine-blue cursor-pointer"
              : "text-neutral-cool-gray cursor-pointer"
          }
        >
          Yearly
        </label>
      </div>
    </motion.div>
  );
};

export default SelectYourPlan;
