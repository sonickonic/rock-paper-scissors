import React from "react";
import styled from "styled-components";

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

const Throw = ({ userSelectedHand, botSelectedHand, winner }) => {
  return (
    <Container>
      <HandContainer>
        <Hand winner={winner} shape={userSelectedHand} />
        <Text>you picked</Text>
      </HandContainer>
      <HandContainer>
        {botSelectedHand ? (
          <Hand winner={winner} shape={botSelectedHand} />
        ) : (
          <Placeholder />
        )}
        <Text>the house picked</Text>
      </HandContainer>
    </Container>
  );
};

export default Throw;
