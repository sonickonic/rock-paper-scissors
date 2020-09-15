import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: var(--white);
  padding: 1rem 2.4rem;
  border-radius: 0.4rem;
`;

const Title = styled.h3`
  color: var(--score-text);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.16em;
`;

const Points = styled.div`
  color: var(--text);
  letter-spacing: -0.025em;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
`;

function Score() {
  const [score, serScore] = useState("0");

  return (
    <Container>
      <Title>score</Title>
      <Points>{score}</Points>
    </Container>
  );
}

export default Score;
