import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { connect } from "react-redux";

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

const PlayAgain = ({ handleClick, result }) => {
  return (
    <Container>
      <Title>{result === "draw" ? `a ${result}` : `you ${result}`}</Title>
      <Button primary label="play again" handleClick={handleClick} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  result: state.game.result,
});

export default connect(mapStateToProps)(PlayAgain);
