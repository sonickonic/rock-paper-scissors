import React from "react";
import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  color: var(--text);
  background-color: var(--white);
  width: 220px;
  padding: 1rem 3.6rem;
  border-radius: 0.7rem;
  margin-top: auto;

  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.15em;
  text-align: center;
  cursor: pointer;
`;

const Title = styled.p`
  text-align: center;
  font-size: 5.5rem;
  color: var(--white);
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  position: absolute;
  bottom: 15rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

function PlayAgain({ handleClick }) {
  return (
    <Container>
      <Title>you win</Title>
      <Button onClick={handleClick}>play again</Button>
    </Container>
  );
}

export default PlayAgain;
