import { InfoProps, AddOn, FormInput } from "../../types";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";
import { fadeRight } from "../../animations";
import AddOns from "./AddOns";

const PickAddOns = ({ register, errors }: InfoProps) => {
  const { watch } = useGlobalContext()!;
  const values: FormInput = watch();

  const addOns: AddOn[] = [
    {
      addOn: "Online service",
      description: "Access to multiplayer games",
      monthly: "+$1/mo",
      yearly: "+$10/yr",
    },
    {
      addOn: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthly: "+$2/mo",
      yearly: "+$20/yr",
    },
    {
      addOn: "Customizable profile",
      description: "Custom theme on your profile",
      monthly: "+$2/mo",
      yearly: "+$20/yr",
    },
  ];

  return (
    <motion.div
      initial={fadeRight.hidden}
      animate={fadeRight.visible}
      transition={{ duration: 0.5 }}
    >
      <article className="mb-5">
        <h1 className="max-md:text-2xl md:text-4xl font-bold text-primary-marine-blue">
          Pick add-ons
        </h1>
        <p className="my-3 text-neutral-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
      </article>
      {addOns.map((item) => (
        <AddOns
          key={item.addOn}
          register={register}
          values={values}
          item={item}
        />
      ))}
    </motion.div>
  );
};

export default PickAddOns;
