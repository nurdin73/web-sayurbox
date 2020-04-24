import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "./middleware";
import {login} from '../_reducers/login'
const rootReducers = combineReducers({
    login
})
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store