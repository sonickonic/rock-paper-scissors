import rock from "./images/icon-rock.svg";
import scissors from "./images/icon-scissors.svg";
import paper from "./images/icon-paper.svg";

const shapes = [
  {
    name: "paper",
    imageSrc: paper,
    lightColor: "var(--paper)",
    darkColor: "var(--paper-darker)",
    beats: "rock",
  },
  {
    name: "scissors",
    imageSrc: scissors,
    lightColor: "var(--scissors)",
    darkColor: "var(--scissors-darker)",
    beats: "paper",
  },
  {
    name: "rock",
    imageSrc: rock,
    lightColor: "var(--rock)",
    darkColor: "var(--rock-darker)",
    beats: "scissors",
  },
];

export default shapes;
