import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Hand from "./Hand";
import Placeholder from "./Placeholder";

const Text = styled.p`
  text-align: center;
  color: var(--white);
  margin-top: 2.5rem;
  letter-spacing: 0.16em;

  @media (min-width: 800px) {
    font-size: 2rem;
    margin-bottom: 6rem;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 47rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 800px) {
    max-width: 60rem;
  }
`;

const HandContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const Throw = ({ userHand, botHand, winner }) => {
  return (
    <Container>
      <HandContainer>
        <Hand winner={winner} shape={userHand} size="big" />
        <Text>you picked</Text>
      </HandContainer>
      <HandContainer>
        {botHand ? (
          <Hand winner={winner} shape={botHand} size="big" />
        ) : (
          <Placeholder />
        )}
        <Text>the house picked</Text>
      </HandContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  userHand: state.game.userHand,
  botHand: state.game.botHand,
});

export default connect(mapStateToProps)(Throw);
