import React from "react";
import styled from "styled-components";

const ChipContainer = styled.div`
  position: relative;
  background: linear-gradient(
    ${(props) => props.lightColor},
    ${(props) => props.darkColor}
  );
  width: 13.4rem;
  height: 13.4rem;
  border-radius: 100%;
  box-shadow: inset 0px -6px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  :nth-child(3) {
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

function Chip({ shape, onClick }) {
  return (
    <ChipContainer
      onClick={onClick}
      lightColor={shape.lightColor}
      darkColor={shape.darkColor}
    >
      <Shape src={shape.imageSrc} alt={shape.name} />
    </ChipContainer>
  );
}

export default Chip;
