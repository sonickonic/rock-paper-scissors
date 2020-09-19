import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ImageSrc from "../../images/image-rules.svg";
import IconSrc from "../../images/icon-close.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  padding: 10rem 0 6rem;
  background-color: var(--white);
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
`;

const RulesButton = styled.a`
  display: inline-block;
  color: var(--white);
  font-size: 1.6rem;
  letter-spacing: 0.15em;
  border: 1px solid var(--white);
  padding: 1rem 3.6rem;
  border-radius: 0.7rem;
  margin-top: auto;
  cursor: pointer;
`;

const CloseButton = styled.a`
  display: inline-block;
  cursor: pointer;
`;

const Title = styled.h3`
  color: var(--text);
  font-size: 3.2rem;
  font-weight: 700;
`;

function Rules() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
  }, []);

  return (
    <div>
      <RulesButton onClick={handleClick}>Rules</RulesButton>
      {open ? (
        <Container>
          <Title>rules</Title>
          <img alt="Game rules" src={ImageSrc} />
          <CloseButton>
            <img onClick={handleClick} alt="Close button" src={IconSrc} />
          </CloseButton>
        </Container>
      ) : null}
    </div>
  );
}

export default Rules;
