import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    authReducer,
    cartReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;