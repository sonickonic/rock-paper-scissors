import React from "react";
import styled from "styled-components";

const HandContainer = styled.div`
  position: relative;
  background: linear-gradient(
    ${(props) => props.lightColor},
    ${(props) => props.darkColor}
  );
  width: ${(props) => (props.iconSize === "small" ? "9.8rem" : "13.4rem")};
  height: ${(props) => (props.iconSize === "small" ? "9.8rem" : "13.4rem")};
  border-radius: 100%;
  box-shadow: inset 0px -6px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => (props.iconSize === "small" ? "7.3rem" : "10rem")};
    height: ${(props) => (props.iconSize === "small" ? "7.3rem" : "10rem")};
    border-radius: 100%;
    background-color: var(--white);
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const Shape = styled.img`
  width: ${(props) => (props.iconSize === "small" ? "3.4rem" : "4.5rem")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Hand = ({ shape, onClick, gameType }) => {
  return (
    <HandContainer
      onClick={onClick}
      lightColor={shape.lightColor}
      darkColor={shape.darkColor}
      iconSize={gameType ? gameType.iconSize : "big"}
    >
      <Shape
        iconSize={gameType ? gameType.iconSize : "big"}
        src={shape.imageSrc}
        alt={shape.name}
      />
    </HandContainer>
  );
};

export default Hand;
