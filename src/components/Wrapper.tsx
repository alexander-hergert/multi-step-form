import { useGlobalContext } from "../context";
import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Step from "./Step";

const Styles = styled.section`
  background-image: url("./assets/images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 25vh;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 2.5rem;

  @media screen and (min-width: 768px) {
    background-image: url("./assets/images/bg-sidebar-desktop.svg");
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 3rem 2rem;
    justify-content: start;
    align-items: start;
    min-width: 15rem;
  }

  @media screen and (min-width: 1024px) {
    min-width: 20rem;
  }
`;

const GoBack = styled.button`
  color: gray;

  &:hover {
    color: hsl(213, 96%, 18%);
    font-weight: bold;
  }
`;

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { formReady, page, handlePrevPage, handleNextPage } =
    useGlobalContext()!;

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="md:w-[48rem] lg:w-[60rem] xl:w-[70rem] shadow-xl mb-5 md:bg-white md:rounded-xl 
      md:overflow-hidden md:p-5 h-[100vh] md:h-[80vh] md:flex "
    >
      <Styles>
        {[1, 2, 3, 4].map((item) => (
          <Step key={item} step={item} />
        ))}
      </Styles>
      <section className="md:flex md:flex-col justify-center items-center w-full">
        <section
          className="m-5 max-md:shadow-xl max-md:relative min-h-[60vh]
         bg-white overflow-hidden p-5 rounded-3xl bottom-[5.5rem] md:min-w-[30rem] lg:min-w-[35rem]"
        >
          {children}
        </section>
        {!formReady && (
          <section
            className="md:mt-4 max-md:fixed bottom-0 p-5 w-full flex bg-white
           justify-between md:px-10 xl:px-32"
          >
            <GoBack
              disabled={page === 1}
              className={page === 1 ? "opacity-0" : ""}
              onClick={handlePrevPage}
            >
              Go Back
            </GoBack>
            <button
              className={`rounded p-3 text-white bg-primary-marine-blue w-[8rem]
             ${page === 4 ? "hover:bg-violet-400" : "hover:bg-blue-800"}`}
              onClick={handleNextPage}
            >
              {page === 4 ? "Confirm" : "Next Step"}
            </button>
          </section>
        )}
      </section>
    </motion.main>
  );
};

export default Wrapper;
