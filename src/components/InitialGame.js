import React from "react";
import shapes from "../data";
import Hand from "./Hand";

const InitialGame = ({ currentGame, handleSelection }) => {
  return (
    <currentGame.container currentGame={currentGame}>
      {shapes
        .filter((shape) => currentGame.shapes.includes(shape.name))
        .map((shape) => (
          <Hand
            shape={shape}
            key={shape.name}
            onClick={() => {
              handleSelection(shape);
            }}
            size={currentGame.size}
          />
        ))}
    </currentGame.container>
  );
};

export default InitialGame;
