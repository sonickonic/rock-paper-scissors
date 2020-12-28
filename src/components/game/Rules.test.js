import React from "react";
import { render, fireEvent } from "@testing-library/react";
import gameType from "../../gameTypes";
import Rules from "./Rules";

describe("Rules", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Rules gameType={gameType} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls handleClick prop on close", () => {
    const handleClick = jest.fn();
    const { queryByAltText } = render(
      <Rules gameType={gameType} handleClick={handleClick} />
    );

    fireEvent.click(queryByAltText("Close button"));

    expect(handleClick).toBeCalledTimes(1);
  });
});
