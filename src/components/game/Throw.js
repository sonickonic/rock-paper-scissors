import React from "react";
import styled from "styled-components";

import Hand from "./Hand";
import Placeholder from "./Placeholder";

const Text = styled.p`
  text-align: center;
  color: var(--white);
  margin-top: 2.5rem;
`;

const Container = styled.div`
  position: relative;
  width: 31.5rem;
  height: 28.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Throw = ({ userSelectedHand, botSelectedHand, winner }) => {
  return (
    <Container>
      <div>
        <Hand winner={winner} shape={userSelectedHand} />
        <Text>you picked</Text>
      </div>
      <div>
        {botSelectedHand ? (
          <Hand winner={winner} shape={botSelectedHand} />
        ) : (
          <Placeholder />
        )}
        <Text>the house picked</Text>
      </div>
    </Container>
  );
};

export default Throw;
