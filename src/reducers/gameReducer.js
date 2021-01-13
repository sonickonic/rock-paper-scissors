import games from "../gameTypes";

const initialState = { currentGame: games[0] };
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_GAME": {
      return {
        ...state,
        currentGame: state.currentGame === games[0] ? games[1] : games[0],
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
