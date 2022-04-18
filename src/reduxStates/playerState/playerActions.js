import { ADD_PLAYER } from "../types";

export const addPlayer = (player) => async (dispatch) => {
  dispatch({
    type: ADD_PLAYER,
    payload: player
  });
};
