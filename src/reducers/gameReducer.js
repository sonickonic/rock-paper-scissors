import games from "../gameTypes";

const initialState = {
  currentGame: games[0],
  score: parseInt(localStorage.getItem("score")) || 0,
  userHand: false,
  botHand: false,
  winner: null,
  result: null,
};
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_GAME": {
      return {
        ...state,
        currentGame: state.currentGame === games[0] ? games[1] : games[0],
      };
    }
    case "INCREMENT_SCORE": {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    case "DECREMENT_SCORE": {
      return {
        ...state,
        score: state.score - 1,
      };
    }
    case "SET_USER_HAND": {
      return {
        ...state,
        userHand: action.payload,
      };
    }
    case "SET_BOT_HAND": {
      return {
        ...state,
        botHand: action.payload,
      };
    }
    case "SET_WINNER": {
      return {
        ...state,
        winner: action.payload,
      };
    }
    case "SET_RESULT": {
      return {
        ...state,
        result: action.payload,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
