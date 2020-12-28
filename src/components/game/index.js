import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../header";
import Rules from "./Rules";
import InitialGame from "./InitialGame";
import Throw from "./Throw";
import PlayAgain from "./PlayAgain";
import shapes from "../../data";
import games from "../../gameTypes";

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

const Game = () => {
  const [gameType, setGameType] = useState(games[0]);
  const [userSelectedHand, setUserSelectedHand] = useState();
  const [botSelectedHand, setBotSelectedHand] = useState();
  const [result, setResult] = useState();
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    if (!userSelectedHand) return;

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * gameType.shapes.length);
      setBotSelectedHand(shapes[randomIndex]);
    }, 1000);
  }, [gameType.shapes.length, userSelectedHand]);

  useEffect(() => {
    if (!botSelectedHand && botSelectedHand !== 0) return;

    if (userSelectedHand.beats.includes(botSelectedHand.name)) {
      setResult("win");
      setScore(score + 1);
    } else if (userSelectedHand.name.includes(botSelectedHand.name)) {
      setResult("draw");
    } else {
      setResult("lose");
      setScore(score - 1);
    }
  }, [botSelectedHand]);

  const handleSelection = (shape) => {
    setUserSelectedHand(shape);
  };

  const clickPlayAgain = () => {
    setUserSelectedHand();
    setBotSelectedHand();
    setResult();
  };

  const handleClick = () => {
    gameType === games[0] ? setGameType(games[1]) : setGameType(games[0]);
    setUserSelectedHand();
    setBotSelectedHand();
    setResult();
  };

  return (
    <Container>
      <Header score={score} gameType={gameType} handleClick={handleClick} />
      {userSelectedHand ? (
        <Throw
          botSelectedHand={botSelectedHand}
          userSelectedHand={userSelectedHand}
        />
      ) : (
        <InitialGame handleSelection={handleSelection} />
      )}
      {result && <PlayAgain result={result} handleClick={clickPlayAgain} />}
      <Rules gameType={gameType} />
    </Container>
  );
};

export default Game;
