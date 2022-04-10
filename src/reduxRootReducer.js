import { combineReducers } from "redux";

import playerReducer from "./reduxStates/playerState/playerReducer";

export default combineReducers({
  player: playerReducer,
});
