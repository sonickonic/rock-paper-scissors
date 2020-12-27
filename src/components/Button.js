import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: ${(props) => (props.primary ? "var(--text)" : "var(--white)")};
  background-color: ${(props) =>
    props.primary ? "var(--white)" : "transparent"};
  width: ${(props) => (props.primary ? "22rem" : "none")};
  padding: 1rem 3.6rem;
  border: ${(props) => (props.primary ? "none" : "1px solid var(--white)")};
  border-radius: 0.7rem;

  font-family: "Barlow Semi Condensed", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.15em;
  text-align: center;
  transition: all 300ms ease;

  cursor: pointer;

  &:hover {
    color: var(--rock-darker);
    border: ${(props) =>
      props.primary ? "none" : "1px solid var(--rock-darker)"};
  }
`;

const Button = ({ label, handleClick, primary }) => {
  return (
    <Btn primary={primary} onClick={handleClick}>
      {label}
    </Btn>
  );
};

export default Button;
