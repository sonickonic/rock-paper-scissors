import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  switchGame,
  incrementScore,
  decrementScore,
  setUserHand,
  setBotHand,
  setWinner,
  setResult,
} from "../actions";
import Header from "../components/header";
import Button from "../components/Button";
import Rules from "../components/Rules";
import InitialGame from "../components/InitialGame";
import Throw from "../components/Throw";
import PlayAgain from "../components/PlayAgain";
import shapes from "../data";

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

const ButtonContainer = styled.div`
  text-align: center;
  width: 100%;

  @media (min-width: 650px) {
    text-align: right;
  }
`;

const Game = ({
  currentGame,
  score,
  userHand,
  botHand,
  winner,
  result,
  switchGame,
  incrementScore,
  decrementScore,
  setUserHand,
  setBotHand,
  setWinner,
  setResult,
}) => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    if (!userHand) return;

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * currentGame.shapes.length);
      setBotHand(shapes[randomIndex]);
    }, 300);
  }, [currentGame.shapes.length, setBotHand, userHand]);

  useEffect(() => {
    if (!botHand && botHand !== 0) return;

    if (userHand.beats.includes(botHand.name)) {
      setResult("win");
      incrementScore();
      setWinner(userHand.name);
    } else if (userHand.name.includes(botHand.name)) {
      setResult("draw");
      setWinner();
    } else {
      setResult("lose");
      decrementScore();
      setWinner(botHand.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botHand]);

  const handleSelection = (shape) => {
    setUserHand(shape);
  };

  const clickPlayAgain = () => {
    setUserHand();
    setBotHand();
    setResult();
    setWinner();
  };

  const handleClick = () => {
    switchGame();
    setUserHand();
    setBotHand();
    setResult();
  };

  const toggleIsRulesOpen = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        setIsRulesOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
  }, []);

  return (
    <Container>
      <Header
        currentGame={currentGame}
        score={score}
        handleClick={handleClick}
      />
      {userHand ? (
        <Throw userHand={userHand} botHand={botHand} winner={winner} />
      ) : (
        <InitialGame
          currentGame={currentGame}
          handleSelection={handleSelection}
        />
      )}
      {result && <PlayAgain result={result} handleClick={clickPlayAgain} />}
      <ButtonContainer>
        <Button handleClick={toggleIsRulesOpen} label="Rules" />
      </ButtonContainer>
      {isRulesOpen && (
        <Rules currentGame={currentGame} handleClick={toggleIsRulesOpen} />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentGame: state.game.currentGame,
  score: state.game.score,
  userHand: state.game.userHand,
  botHand: state.game.botHand,
  winner: state.game.winner,
  result: state.game.result,
});

const mapDispatchToProps = {
  switchGame,
  incrementScore,
  decrementScore,
  setUserHand,
  setBotHand,
  setWinner,
  setResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
