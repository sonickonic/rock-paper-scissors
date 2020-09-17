import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Chip from "./Chip";
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

function Throw({ selected }) {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setRandomNumber(Math.floor(Math.random() * 3));
    }, 1000);
  }, []);

  return (
    <Container>
      <div>
        <Chip shape={selected} />
        <Text>you picked</Text>
      </div>
      <div>
        {randomNumber || randomNumber === 0 ? (
          <Chip shape={shapes[randomNumber]} />
        ) : (
          <Placeholder />
        )}
        <Text>the house picked</Text>
      </div>
    </Container>
  );
}

export default Throw;
