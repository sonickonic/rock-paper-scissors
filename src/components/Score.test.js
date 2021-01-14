import React from "react";
import { render } from "@testing-library/react";
import Score from "./header/Score";

describe("Score", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Score />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows score value", () => {
    const score = 0;
    const { getByText } = render(<Score score={score} />);

    expect(getByText("0")).toBeTruthy();
  });
});
