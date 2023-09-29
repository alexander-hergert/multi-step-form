import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../../components/Example/Counter";

test("it should render the initial count and buttons", () => {
  const { getByTestId } = render(<Counter />);

  // Check if the initial count is 0
  const countElement = getByTestId("count");
  expect(countElement).toHaveTextContent("0");

  // Check if the increment and decrement buttons are present
  const incrementButton = getByTestId("increment-button");
  const decrementButton = getByTestId("decrement-button");
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test("it should increment the count when the increment button is clicked", () => {
  const { getByTestId } = render(<Counter />);
  const incrementButton = getByTestId("increment-button");
  const countElement = getByTestId("count");

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent("1");
});

test("it should decrement the count when the decrement button is clicked", () => {
  const { getByTestId } = render(<Counter />);
  const decrementButton = getByTestId("decrement-button");
  const countElement = getByTestId("count");

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent("-1");
});
