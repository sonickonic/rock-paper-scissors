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
