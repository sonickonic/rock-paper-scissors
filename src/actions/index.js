export const switchGame = () => ({
  type: "SWITCH_GAME",
});

export const incrementScore = () => ({
  type: "INCREMENT_SCORE",
});

export const decrementScore = () => ({
  type: "DECREMENT_SCORE",
});

export const setUserHand = (shape) => ({
  type: "SET_USER_HAND",
  payload: shape,
});

export const setBotHand = (shape) => ({
  type: "SET_BOT_HAND",
  payload: shape,
});

export const setWinner = (hand) => ({
  type: "SET_WINNER",
  payload: hand,
});
