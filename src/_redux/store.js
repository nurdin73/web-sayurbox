import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "./middleware";
import { login } from '../_reducers/login'
import { profile } from '../_reducers/profile'
import { archiveSeller } from '../_reducers/archiveSeller'
import { archiveBuyer } from '../_reducers/archiveBuyer'
import { archiveProduct } from '../_reducers/archiveProduct'
import { transaction } from '../_reducers/transaction'
import { product } from '../_reducers/product'
const rootReducers = combineReducers({
    login,
    profile,
    archiveSeller,
    archiveBuyer,
    archiveProduct,
    transaction,
    product
})
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store