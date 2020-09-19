import rock from "./images/icon-rock.svg";
import scissors from "./images/icon-scissors.svg";
import paper from "./images/icon-paper.svg";
import lizard from "./images/icon-lizard.svg";
import spock from "./images/icon-spock.svg";

const shapes = [
  {
    name: "paper",
    imageSrc: paper,
    lightColor: "var(--paper)",
    darkColor: "var(--paper-darker)",
    beats: ["rock", "spock"],
  },
  {
    name: "scissors",
    imageSrc: scissors,
    lightColor: "var(--scissors)",
    darkColor: "var(--scissors-darker)",
    beats: ["paper", "lizared"],
  },
  {
    name: "rock",
    imageSrc: rock,
    lightColor: "var(--rock)",
    darkColor: "var(--rock-darker)",
    beats: ["scissors", "lizared"],
  },
  {
    name: "lizard",
    imageSrc: lizard,
    lightColor: "var(--lizard)",
    darkColor: "var(--lizard-darker)",
    beats: ["spock", "paper"],
  },
  {
    name: "spock",
    imageSrc: spock,
    lightColor: "var(--cyan)",
    darkColor: "var(--cyan-darker)",
    beats: ["rock", "scissors"],
  },
];

export default shapes;
