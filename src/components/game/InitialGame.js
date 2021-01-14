import React from "react";
import shapes from "../../data";
import Hand from "./Hand";
import { connect } from "react-redux";

const InitialGame = ({ currentGame, handleSelection }) => {
  return (
    <currentGame.container>
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

const mapStateToProps = (state) => ({
  currentGame: state.game.currentGame,
});

export default connect(mapStateToProps)(InitialGame);
