import React from "react";
import styled from "styled-components";

import Header from "./header";
import Rules from "./Rules";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;
  width: 100%;
  background: radial-gradient(
    circle at top,
    var(--background),
    var(--background-darker)
  );
  padding: 3rem 3rem 5.5rem;
`;

const Game = function Game() {
  return (
    <Container>
      <Header />
      <Rules />
    </Container>
  );
};

export default Game;
