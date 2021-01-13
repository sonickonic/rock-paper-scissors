import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { switchGame } from "../../actions";
import Header from "../header";
import Button from "../Button";
import Rules from "./Rules";
import InitialGame from "./InitialGame";
import Throw from "./Throw";
import PlayAgain from "./PlayAgain";
import shapes from "../../data";

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

const Game = ({ currentGame, switchGame }) => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [userSelectedHand, setUserSelectedHand] = useState();
  const [botSelectedHand, setBotSelectedHand] = useState();
  const [result, setResult] = useState();
  const [winner, setWinner] = useState();
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    if (!userSelectedHand) return;

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * currentGame.shapes.length);
      setBotSelectedHand(shapes[randomIndex]);
    }, 300);
  }, [currentGame.shapes.length, userSelectedHand]);

  useEffect(() => {
    if (!botSelectedHand && botSelectedHand !== 0) return;

    if (userSelectedHand.beats.includes(botSelectedHand.name)) {
      setResult("win");
      setScore(score + 1);
      setWinner(userSelectedHand.name);
    } else if (userSelectedHand.name.includes(botSelectedHand.name)) {
      setResult("draw");
      setWinner();
    } else {
      setResult("lose");
      setScore(score - 1);
      setWinner(botSelectedHand.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botSelectedHand]);

  const handleSelection = (shape) => {
    setUserSelectedHand(shape);
  };

  const clickPlayAgain = () => {
    setUserSelectedHand();
    setBotSelectedHand();
    setResult();
    setWinner();
  };

  const handleClick = () => {
    switchGame();
    setUserSelectedHand();
    setBotSelectedHand();
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
      <Header score={score} handleClick={handleClick} />
      {userSelectedHand ? (
        <Throw
          botSelectedHand={botSelectedHand}
          userSelectedHand={userSelectedHand}
          winner={winner}
        />
      ) : (
        <InitialGame handleSelection={handleSelection} />
      )}
      {result && <PlayAgain result={result} handleClick={clickPlayAgain} />}
      <ButtonContainer>
        <Button handleClick={toggleIsRulesOpen} label="Rules" />
      </ButtonContainer>
      {isRulesOpen && <Rules handleClick={toggleIsRulesOpen} />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentGame: state.game.currentGame,
});

const mapDispatchToProps = { switchGame };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
