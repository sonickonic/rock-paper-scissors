import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PlayAgain from "./PlayAgain";

describe("PlayAgain", () => {
  it("renders correctly", () => {
    const result = "win";
    const { asFragment } = render(<PlayAgain result={result} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows result text", () => {
    const result = "win";
    const { getByText } = render(<PlayAgain result={result} />);

    expect(getByText("you win")).toBeTruthy();
  });

  it("calls handleClick prop on button", () => {
    const result = "win";
    const handleClick = jest.fn();
    const { container } = render(
      <PlayAgain result={result} handleClick={handleClick} />
    );

    fireEvent.click(container.querySelector("button"));

    expect(handleClick).toBeCalledTimes(1);
  });
});
