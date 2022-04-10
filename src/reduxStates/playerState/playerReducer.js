import { ADD_PLAYER } from "../types";

const initialState = {};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
