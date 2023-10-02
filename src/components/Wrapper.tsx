import { useGlobalContext } from "../context";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { page, handlePrevPage, handleNextPage } = useGlobalContext()!;

  return (
    <main>
      <section>
        {page === 1 && <div>Step 1 Your info</div>}
        {page === 2 && <div>Step 2 Select plan</div>}
        {page === 3 && <div>Step 3 Add-ons</div>}
        {page === 4 && <div>Step 4 Summary</div>}
      </section>
      {children}
      {page > 1 && <button onClick={handlePrevPage}>Go Back</button>}
      {page < 5 && <button onClick={handleNextPage}>Next Step</button>}
    </main>
  );
};

export default Wrapper;
