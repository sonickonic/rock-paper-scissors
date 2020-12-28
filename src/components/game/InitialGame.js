import React from "react";
import shapes from "../../data";
import Hand from "./Hand";

const InitialGame = ({ handleSelection }) => {
  return (
    <Container>
      {shapes.map((shape) => (
        <Hand
          gameType={gameType}
          shape={shape}
          key={shape.name}
          onClick={() => {
            handleSelection(shape);
          }}
        />
      ))}
    </Container>
  );
};

export default InitialGame;
