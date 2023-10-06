import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Style = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
  background-color: black;
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <Style
      className=" text-center text-slate-100 font uppercase 
  text-4xl bg-slate-950 w-[100vw]"
    >
      <div className="mt-20 uppercase">
        The thing you are looking for can't be found here.
        <span className="text-amber-500"> &nbsp;Page does not exist!</span>
      </div>
      <button
        className="mt-20 text-black p-5 bg-white rounded-xl"
        onClick={handleBack}
      >
        Back to reality!
      </button>
    </Style>
  );
};

export default ErrorPage;
