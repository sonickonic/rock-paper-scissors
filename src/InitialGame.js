import React from "react";
import styled from "styled-components";

import shapes from "./data";
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

const Chip = styled.div`
  position: relative;
  background: linear-gradient(
    ${(props) => props.lightColor},
    ${(props) => props.darkColor}
  );
  width: 13.4rem;
  height: 13.4rem;
  border-radius: 100%;
  box-shadow: inset 0px -6px 0px rgba(0, 0, 0, 0.25);

  :last-child {
    margin: 1.5rem auto 0;
  }

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    background-color: var(--white);
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const Shape = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function InitialGame() {
  return (
    <Container>
      {shapes.map((shape) => (
        <Chip
          key={shape.name}
          lightColor={shape.lightColor}
          darkColor={shape.darkColor}
        >
          <Shape src={shape.imageSrc} alt={shape.name} />
        </Chip>
      ))}
    </Container>
  );
}

export default InitialGame;
