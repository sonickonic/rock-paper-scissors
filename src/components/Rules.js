import React from "react";
import styled from "styled-components";
import IconSrc from "../images/icon-close.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  padding: 10rem 0 6rem;
  background-color: var(--white);
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;

  @media (min-width: 500px) {
    padding: 3rem 5rem 3rem;
    height: 41.5rem;
    width: 40rem;
    border-radius: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 0px 100vh rgba(0, 0, 0, 0.7);
  }
`;

const CloseButton = styled.a`
  display: inline-block;
  cursor: pointer;

  @media (min-width: 500px) {
    position: absolute;
    top: 4rem;
    right: 5rem;
  }
`;

const Title = styled.h3`
  color: var(--text);
  font-size: 3.2rem;
  font-weight: 700;

  @media (min-width: 500px) {
    align-self: flex-start;
  }
`;

const Image = styled.img`
  width: 30rem;
`;

const Rules = ({ currentGame, handleClick }) => {
  return (
    <Container>
      <Title>rules</Title>
      <Image alt="Game rules" src={currentGame.rules} />
      <CloseButton>
        <img onClick={handleClick} alt="Close button" src={IconSrc} />
      </CloseButton>
    </Container>
  );
};

export default Rules;
