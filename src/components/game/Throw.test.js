import React from "react";
import { render } from "@testing-library/react";
import Throw from "./Throw";
import shapes from "../../data";

describe("Throw", () => {
  describe("before bot selected hand", () => {
    const userSelectedHand = shapes[0];

    it("renders correctly", () => {
      const { asFragment } = render(
        <Throw userSelectedHand={userSelectedHand} />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows one hand", () => {
      const { container } = render(
        <Throw userSelectedHand={userSelectedHand} />
      );

      expect(container.querySelectorAll("img")).toHaveLength(1);
    });
  });

  describe("after bot selected hand", () => {
    const userSelectedHand = shapes[0];
    const botSelectedHand = shapes[1];

    it("renders correctly", () => {
      const { asFragment } = render(
        <Throw
          userSelectedHand={userSelectedHand}
          botSelectedHand={botSelectedHand}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows two hands", () => {
      const { container } = render(
        <Throw
          userSelectedHand={userSelectedHand}
          botSelectedHand={botSelectedHand}
        />
      );

      expect(container.querySelectorAll("img")).toHaveLength(2);
    });
  });
});
