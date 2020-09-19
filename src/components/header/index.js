import React from "react";
import styled from "styled-components";

import Logo from "../../images/logo.svg";
import Score from "./Score";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem;
  border: 2px solid var(--gray);
  border-radius: 0.7rem;
`;

const LogoStyle = styled.img`
  width: 8.1rem;
  height: 4.7rem;
`;

function Header({ score }) {
  return (
    <Container>
      <LogoStyle alt="Logo" src={Logo} />
      <Score score={score} />
    </Container>
  );
}

export default Header;
