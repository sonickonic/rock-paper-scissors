import React from "react";
import styled from "styled-components";

import shapes from "../../data";
import Hand from "./Hand";
import Background from "../../images/bg-triangle.svg";

const Container = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 190px;
  background-position: center;
  max-width: 315px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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
