import player from "../models/player.js"
import {createStore} from "redux";
import addPlayer from "../actions/addPlayer";

function players(state = [], action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return state.push(action.payload);
        default:
            return state;
    }
}

const store = createStore(players, [player("Mr Mindless", "Lich", "EU", "Reaper", "true")])

const RootLayer = () => {
    store.dispatch({
        type: 'ADD_PLAYER',
        payload: player("Mr Mindless", "Lich", "EU", "Reaper", false)
    })

    return (
        <div/>
    )
}

export default RootLayer;