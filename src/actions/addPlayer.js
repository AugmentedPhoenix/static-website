import player from "../models/player.js"

export const ADD_PLAYER = "ADD_PLAYER"
export const addPlayer = {
    type: ADD_PLAYER,
    payload: player
};
export default addPlayer;