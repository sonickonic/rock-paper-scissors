import React from "react";
import { render } from "@testing-library/react";
import InitialGame from "./InitialGame";
import gameType from "../gameTypes";

describe("InitialGame", () => {
  describe("classic game", () => {
    const classic = gameType[0];

    it("renders correctly", () => {
      const { asFragment } = render(<InitialGame currentGame={classic} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows three hands", () => {
      const { container } = render(<InitialGame currentGame={classic} />);

      expect(container.querySelectorAll("img")).toHaveLength(3);
    });
  });

  describe("expansion game", () => {
    const expansion = gameType[1];

    it("renders correctly", () => {
      const { asFragment } = render(<InitialGame currentGame={expansion} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows five hands", () => {
      const { container } = render(<InitialGame currentGame={expansion} />);

      expect(container.querySelectorAll("img")).toHaveLength(5);
    });
  });
});
