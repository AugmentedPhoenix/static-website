// Import the Redux modules
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

// Import the rootReducer with the combined reducers
import reduxRootReducer from "./reduxRootReducer";

// Set the initial global state to an emty array
const initialState = {};

// Some middleware so we can see what is happening with reduxdevtools
const middleware = [thunk];

// Create the store with the combined reducers and the initial state
const store = createStore(
  reduxRootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
