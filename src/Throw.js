import React from "react";
import styled from "styled-components";

import Chip from "./Chip";

const Text = styled.p`
  text-align: center;
  color: var(--white);
  margin-top: 2.5rem;
`;

function Throw({ selected }) {
  return (
    <div>
      <Chip shape={selected} />
      <Text>you picked</Text>
    </div>
  );
}

export default Throw;
