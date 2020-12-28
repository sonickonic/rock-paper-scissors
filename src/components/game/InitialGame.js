import React from "react";
import shapes from "../../data";
import Hand from "./Hand";

const InitialGame = ({ gameType, handleSelection }) => {
  return (
    <gameType.container gameType={gameType}>
      {shapes
        .filter((shape) => gameType.shapes.includes(shape.name))
        .map((shape) => (
          <Hand
            gameType={gameType}
            shape={shape}
            key={shape.name}
            onClick={() => {
              handleSelection(shape);
            }}
          />
        ))}
    </gameType.container>
  );
};

export default InitialGame;
