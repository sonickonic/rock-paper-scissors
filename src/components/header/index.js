import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Score from "./Score";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 70rem;
  padding: clamp(1rem, 2vw, 1.7rem);
  border: 2px solid var(--gray);
  border-radius: 0.7rem;
`;

const LogoStyle = styled.img`
  height: clamp(4.7rem, 7vw, 9.2rem);

  cursor: pointer;
`;

const Header = ({ currentGame, handleClick }) => {
  return (
    <Container>
      <LogoStyle alt="Logo" src={currentGame.logo} onClick={handleClick} />
      <Score />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentGame: state.game.currentGame,
});

export default connect(mapStateToProps)(Header);
