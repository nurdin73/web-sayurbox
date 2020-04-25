import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "./middleware";
import {login} from '../_reducers/login'
import {profile} from '../_reducers/profile'
const rootReducers = combineReducers({
    login,
    profile
})
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store