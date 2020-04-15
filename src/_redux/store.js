import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "./middleware";
const rootReducers = combineReducers({
    
})
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store