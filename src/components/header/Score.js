import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: var(--white);
  padding: clamp(1rem, 2vw, 2rem) clamp(2.4rem, 4vw, 5rem);
  border-radius: 0.4rem;
`;

const Title = styled.h3`
  color: var(--score-text);
  font-size: clamp(1rem, 2vw, 1.6rem);
  font-weight: 600;
  letter-spacing: 0.16em;
`;

const Points = styled.div`
  color: var(--text);
  letter-spacing: -0.025em;
  font-size: clamp(4rem, 4vw, 5.5rem);
  font-weight: 700;
  line-height: 1;
`;

const Score = ({ score }) => {
  return (
    <Container>
      <Title>score</Title>
      <Points>{score}</Points>
    </Container>
  );
};

export default Score;
