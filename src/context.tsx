import { useContext, createContext, useState } from "react";
import { ReactNode } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { FormInput } from "./types";
import { useNavigate } from "react-router-dom";

type AppContextType = {
  formReady: boolean;
  setFormReady: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  register: UseFormRegister<FormInput>;
  errors: Record<string, any>;
  watch: any;
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [formReady, setFormReady] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<FormInput>();

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

  return (
    <AppContext.Provider
      value={{
        formReady,
        setFormReady,
        page,
        setPage,
        register,
        errors,
        watch,
        handlePrevPage,
        handleNextPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
