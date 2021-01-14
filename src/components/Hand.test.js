import React from "react";
import { render } from "@testing-library/react";
import Hand from "./Hand";
import shapes from "../data";

describe("Hand", () => {
  it("renders correctly", () => {
    const shape = shapes[0];
    const { asFragment } = render(<Hand shape={shape} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows image", () => {
    const shape = shapes[0];
    const { queryByAltText } = render(<Hand shape={shape} />);

    expect(queryByAltText(`${shape.name}`)).toBeTruthy();
  });
});
