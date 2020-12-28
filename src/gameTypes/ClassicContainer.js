import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: 190px;
  background-position: center;
  width: 31rem;
  height: 28rem;

  div:nth-child(1) {
    position: absolute;
  }

  div:nth-child(2) {
    position: absolute;
    right: 0;
  }

  div:nth-child(3) {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const ClassicContainer = ({ gameType, children }) => {
  return <Container background={gameType.background}>{children}</Container>;
};

export default ClassicContainer;
