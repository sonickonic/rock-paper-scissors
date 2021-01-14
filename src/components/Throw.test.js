import React from "react";
import { render } from "@testing-library/react";
import Throw from "./Throw";
import shapes from "../data";

describe("Throw", () => {
  describe("before bot selected hand", () => {
    const userHand = shapes[0];

    it("renders correctly", () => {
      const { asFragment } = render(<Throw userHand={userHand} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows one hand", () => {
      const { container } = render(<Throw userHand={userHand} />);

      expect(container.querySelectorAll("img")).toHaveLength(1);
    });
  });

  describe("after bot selected hand", () => {
    const userHand = shapes[0];
    const botHand = shapes[1];

    it("renders correctly", () => {
      const { asFragment } = render(
        <Throw userHand={userHand} botHand={botHand} />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows two hands", () => {
      const { container } = render(
        <Throw userHand={userHand} botHand={botHand} />
      );

      expect(container.querySelectorAll("img")).toHaveLength(2);
    });
  });
});
