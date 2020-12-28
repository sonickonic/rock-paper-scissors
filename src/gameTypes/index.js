import logo from "../images/logo.svg";
import triangle from "../images/bg-triangle.svg";
import rules from "../images/image-rules.svg";
import ClassicContainer from "../gameTypes/ClassicContainer";

import logoBonus from "../images/logo-bonus.svg";
import pentagon from "../images/bg-pentagon.svg";
import rulesBonus from "../images/image-rules-bonus.svg";
import ExpansionContainer from "../gameTypes/ExpansionContainer";

const games = [
  {
    name: "Rock-Paper-Scissors",
    shapes: ["paper", "scissors", "rock"],
    logo: logo,
    background: triangle,
    rules: rules,
    iconSize: "big",
    container: ClassicContainer,
  },
  {
    name: "The Lizard-Spock Expansion",
    shapes: ["paper", "scissors", "rock", "lizard", "spock"],
    logo: logoBonus,
    background: pentagon,
    rules: rulesBonus,
    iconSize: "small",
    container: ExpansionContainer,
  },
];

export default games;
