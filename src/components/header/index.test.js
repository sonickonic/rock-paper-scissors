import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Header from "./index";
import gameType from "../../gameTypes";

describe("Header", () => {
  const classic = gameType[0];
  it("renders correctly", () => {
    const { asFragment } = render(<Header currentGame={classic} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls handleClick prop on logo click", () => {
    const handleClick = jest.fn();
    const { queryByAltText } = render(
      <Header currentGame={classic} handleClick={handleClick} />
    );

    fireEvent.click(queryByAltText("Logo"));

    expect(handleClick).toBeCalledTimes(1);
  });
});
