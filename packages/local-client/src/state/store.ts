import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './reduces';

export const store = createStore(reducers, {}, applyMiddleware(thunk));