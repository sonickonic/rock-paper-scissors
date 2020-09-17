import React from "react";
import styled from "styled-components";

import shapes from "./data";
import Chip from "./Chip";
import Background from "./images/bg-triangle.svg";

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

function InitialGame() {
  return (
    <Container>
      {shapes.map((shape) => (
        <Chip shape={shape} key={shape.name} />
      ))}
    </Container>
  );
}

export default InitialGame;
