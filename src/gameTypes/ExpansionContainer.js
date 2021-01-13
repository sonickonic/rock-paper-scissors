import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  position: relative;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: 190px;
  background-position: center;
  width: 31rem;
  height: 30rem;

  div:nth-child(1) {
    position: absolute;
    right: 0;
    top: 8rem;
  }

  div:nth-child(2) {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 0;
  }

  div:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 4.4rem;
  }

  div:nth-child(4) {
    position: absolute;
    bottom: 0;
    left: 4.4rem;
  }

  div:nth-child(5) {
    position: absolute;
    left: 0;
    top: 8rem;
  }

  @media (min-width: 650px) {
    width: 47rem;
    height: 43rem;
    background-size: 30rem;

    div:nth-child(1) {
      top: 10rem;
    }

    div:nth-child(5) {
      top: 10rem;
    }
  }
`;

const ExpansionContainer = ({ currentGame, children }) => {
  return <Container background={currentGame.background}>{children}</Container>;
};

const mapStateToProps = (state) => ({
  currentGame: state.game.currentGame,
});

export default connect(mapStateToProps)(ExpansionContainer);
