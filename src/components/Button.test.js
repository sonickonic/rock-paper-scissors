import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Button primary />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows label value", () => {
    const label = "text";
    const { getByText } = render(<Button primary label={label} />);

    expect(getByText("text")).toBeTruthy();
  });

  it("calls handleClick prop on button click", () => {
    const handleClick = jest.fn();
    const { container } = render(<Button handleClick={handleClick} />);

    fireEvent.click(container.querySelector("button"));

    expect(handleClick).toBeCalledTimes(1);
  });
});
