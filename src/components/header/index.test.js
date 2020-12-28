import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Header from "./index";
import gameType from "../../gameTypes";

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Header gameType={gameType} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls handleClick prop on logo click", () => {
    const handleClick = jest.fn();
    const { queryByAltText } = render(
      <Header gameType={gameType} handleClick={handleClick} />
    );

    fireEvent.click(queryByAltText("Logo"));

    expect(handleClick).toBeCalledTimes(1);
  });
});
