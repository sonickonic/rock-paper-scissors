import React from "react";
import styled from "styled-components";

import IconSrc from "../../images/icon-close.svg";

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
`;

const CloseButton = styled.a`
  display: inline-block;
  cursor: pointer;
`;

const Title = styled.h3`
  color: var(--text);
  font-size: 3.2rem;
  font-weight: 700;
`;

const Rules = ({ gameType, handleClick }) => {
  return (
    <Container>
      <Title>rules</Title>
      <img alt="Game rules" src={gameType.rules} />
      <CloseButton>
        <img onClick={handleClick} alt="Close button" src={IconSrc} />
      </CloseButton>
    </Container>
  );
};

export default Rules;
