import player from "../models/player.js"
import {createStore} from "redux";
import addPlayer from "../actions/addPlayer";

function players(state = [], action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return state.concat([action.payload]);
        default:
            return state;
    }
}

const store = createStore(players, [])

const RootLayer = () => {
    store.dispatch(addPlayer)
}

export default RootLayer;