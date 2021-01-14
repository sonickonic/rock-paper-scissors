import React from "react";
import styled from "styled-components";

const HandContainer = styled.div`
  position: relative;
  background: linear-gradient(
    ${(props) => props.lightColor},
    ${(props) => props.darkColor}
  );
  width: ${(props) => (props.size === "small" ? "9.8rem" : "13.4rem")};
  height: ${(props) => (props.size === "small" ? "9.8rem" : "13.4rem")};
  border-radius: 100%;
  box-shadow: inset 0px -6px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => (props.size === "small" ? "7.3rem" : "10rem")};
    height: ${(props) => (props.size === "small" ? "7.3rem" : "10rem")};
    border-radius: 100%;
    background-color: var(--white);
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.25);
  }

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: rgba(255, 255, 255, 0.03) 0px 0px 0px 25px,
      rgba(255, 255, 255, 0.03) 0px 0px 0px 50px,
      rgba(255, 255, 255, 0.03) 0px 0px 0px 75px;
    opacity: ${(props) => (props.winner ? "1" : "0")};
  }

  @media (min-width: 650px) {
    width: ${(props) => (props.size === "small" ? "14.7rem" : "20rem")};
    height: ${(props) => (props.size === "small" ? "14.7rem" : "20rem")};
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.25);

    ::before {
      width: ${(props) => (props.size === "small" ? "10.9rem" : "15rem")};
      height: ${(props) => (props.size === "small" ? "10.9rem" : "15rem")};
      box-shadow: inset 0px 8px 0px rgba(0, 0, 0, 0.25);
    }

    ::after {
      box-shadow: rgba(255, 255, 255, 0.03) 0px 0px 0px 60px,
        rgba(255, 255, 255, 0.03) 0px 0px 0px 120px,
        rgba(255, 255, 255, 0.03) 0px 0px 0px 180px;
    }
  }
`;

const Shape = styled.img`
  width: ${(props) => (props.size === "small" ? "3.4rem" : "4.5rem")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 650px) {
    width: ${(props) => (props.size === "small" ? "5rem" : "7rem")};
  }
`;

const Hand = ({ shape, onClick, winner, size }) => {
  return (
    <HandContainer
      onClick={onClick}
      lightColor={shape.lightColor}
      darkColor={shape.darkColor}
      size={size}
      winner={winner === shape.name ? "winner" : null}
    >
      <Shape size={size} src={shape.imageSrc} alt={shape.name} />
    </HandContainer>
  );
};

export default Hand;
