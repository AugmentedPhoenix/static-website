import { ADD_PLAYER } from "../types";
import { hash } from "../../utility/hashFunctions"

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

//hash(action.payload.name + "+" + action.payload.server)
// /action.payload.name + " " + action.payload.server