import styled from "styled-components";
import { useGlobalContext } from "../context";

const Circle = styled.div`
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1px solid hsl(229, 24%, 87%);
`;
interface StepProps {
  step: number;
  info: string;
}

const Step = ({ step, info }: StepProps) => {
  const { page } = useGlobalContext()!;
  return (
    <div className="md:flex gap-5 items-center justify-center">
      <Circle
        className={
          page === step
            ? "bg-primary-light-blue"
            : "text-white border border-white"
        }
      >
        {step}
      </Circle>
      <div>
        <div className="max-md:hidden text-neutral-light-gray uppercase">
          step {step}
        </div>
        <div className="max-md:hidden font-bold text-white uppercase">
          {info}
        </div>
      </div>
    </div>
  );
};

export default Step;
