import React from "react";
import styled from "styled-components";

const HandContainer = styled.div`
  position: relative;
  background: transparent;
  width: 13.4rem;
  height: 13.4rem;
  border-radius: 100%;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    background-color: var(--background-darker);
  }

  @media (min-width: 650px) {
    width: 20rem;
    height: 20rem;

    ::before {
      width: 15rem;
      height: 15rem;
    }
  }
`;

const Placeholder = () => {
  return <HandContainer />;
};

export default Placeholder;
