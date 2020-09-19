import React from "react";
import styled from "styled-components";

import Hand from "./Hand";
import shapes from "./data";
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

function Throw({ selected, randomNumber }) {
  return (
    <Container>
      <div>
        <Hand shape={selected} />
        <Text>you picked</Text>
      </div>
      <div>
        {randomNumber || randomNumber === 0 ? (
          <Hand shape={shapes[randomNumber]} />
        ) : (
          <Placeholder />
        )}
        <Text>the house picked</Text>
      </div>
    </Container>
  );
}

export default Throw;
