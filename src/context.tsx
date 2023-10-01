import { useContext, createContext, useState } from "react";
import { ReactNode } from "react";

type Form = {
  name: string;
  email: string;
  phone: string | number;
  plan: "Arcade" | "Advanced" | "Pro" | null;
  addOns: string[] | null;
};

type AppContextType = {
  formData: Form;
  setFormData: React.Dispatch<React.SetStateAction<Form>>;
  formReady: boolean;
  setFormReady: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [formReady, setFormReady] = useState<boolean>(false);

  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    plan: null,
    addOns: null,
  });

  return (
    <AppContext.Provider
      value={{ formData, setFormData, formReady, setFormReady }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
