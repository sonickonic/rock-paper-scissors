import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ImageSrc from "../../images/image-rules.svg";
import IconSrc from "../../images/icon-close.svg";
import Button from "../Button";

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

const CloseButton = styled.a`
  display: inline-block;
  cursor: pointer;
`;

const Title = styled.h3`
  color: var(--text);
  font-size: 3.2rem;
  font-weight: 700;
`;

const Rules = () => {
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
      <Button handleClick={handleClick} label="Rules" />
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
};

export default Rules;
