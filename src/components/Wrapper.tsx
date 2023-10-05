import { useGlobalContext } from "../context";
import { ReactNode } from "react";
import styled from "styled-components";

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
    padding: 1rem;
    justify-content: start;
    align-items: start;
    min-width: 20rem;
  }
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const GoBack = styled.button`
  padding: 0.75rem;
  color: gray;
`;

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { formReady, page, handlePrevPage, handleNextPage } =
    useGlobalContext()!;

  return (
    <main className="md:bg-white md:rounded-xl md:overflow-hidden md:p-5 max-md:min-h-[100vh] h-[100vh] md:h-[80vh] md:flex">
      <Styles>
        <div className="md:flex gap-5 items-center justify-center">
          <Circle
            className={
              page === 1 ? "bg-blue-200" : "text-white border border-white"
            }
          >
            1
          </Circle>
          <div>
            <div className="max-md:hidden text-slate-500 uppercase">step 1</div>
            <div className="max-md:hidden font-bold text-white uppercase">
              your info
            </div>
          </div>
        </div>
        <div className="md:flex gap-5 items-center justify-center">
          <Circle
            className={
              page === 2 ? "bg-blue-200" : "text-white border border-white"
            }
          >
            2
          </Circle>
          <div>
            <div className="max-md:hidden text-slate-500 uppercase">step 2</div>
            <div className="max-md:hidden font-bold text-white uppercase">
              select plan
            </div>
          </div>
        </div>
        <div className="md:flex gap-5 items-center justify-center">
          <Circle
            className={
              page === 3 ? "bg-blue-200" : "text-white border border-white"
            }
          >
            3
          </Circle>
          <div>
            <div className="max-md:hidden text-slate-500 uppercase">step 3</div>
            <div className="max-md:hidden font-bold text-white uppercase">
              add-ons
            </div>
          </div>
        </div>
        <div className="md:flex gap-5 items-center justify-center">
          <Circle
            className={
              page === 4 ? "bg-blue-200" : "text-white border border-white"
            }
          >
            4
          </Circle>
          <div>
            <div className="max-md:hidden text-slate-500 uppercase">step 4</div>
            <div className="max-md:hidden font-bold text-white uppercase">
              summary
            </div>
          </div>
        </div>
      </Styles>
      <section className="md:flex md:flex-col">
        <section className="m-5 shadow max-md:relative min-h-[50vh] bg-white overflow-hidden p-5 rounded-3xl bottom-[5.5rem]">
          {children}
        </section>
        {!formReady && (
          <section className="md:mt-20 p-5 w-full shadow flex bg-white justify-between">
            <GoBack
              disabled={page === 1}
              className={page === 1 ? "opacity-0" : ""}
              onClick={handlePrevPage}
            >
              Go Back
            </GoBack>
            <button
              className="rounded p-3 text-white bg-blue-800"
              onClick={handleNextPage}
            >
              Next Step
            </button>
          </section>
        )}
      </section>
    </main>
  );
};

export default Wrapper;
