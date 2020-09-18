import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./header";
import Rules from "./Rules";
import InitialGame from "./InitialGame";
import Throw from "./Throw";
import PlayAgain from "./PlayAgain";
import shapes from "./data";

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
  const [selected, setSelected] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    if (!selected) return;

    setTimeout(() => {
      setRandomNumber(Math.floor(Math.random() * 3));
    }, 1000);
  }, [selected]);

  useEffect(() => {
    if (!randomNumber && randomNumber !== 0) return;

    if (selected.beats === shapes[randomNumber].name) {
      setResult("win");
    } else if (selected.name === shapes[randomNumber].name) {
      setResult("draw");
    } else {
      setResult("lose");
    }
  }, [randomNumber]);

  const handleSelection = (shape) => {
    setSelected(shape);
  };

  const handleClick = () => {
    setSelected();
    setRandomNumber();
    setResult();
  };

  return (
    <Container>
      <Header />
      {!selected ? (
        <InitialGame handleSelection={handleSelection} />
      ) : (
        <Throw randomNumber={randomNumber} selected={selected} />
      )}
      {result && <PlayAgain result={result} handleClick={handleClick} />}
      <Rules />
    </Container>
  );
};

export default Game;
