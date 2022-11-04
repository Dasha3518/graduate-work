import { combineReducers, legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { basketReducer, IBasketProducts } from './reducers/basket';
import { counterReducer, ICounterState } from './reducers/counter';
    
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.

export type TState = {
  counterReducer :ICounterState;
  basketReducer: IBasketProducts;
};

export let store = createStore(
  combineReducers({counterReducer, basketReducer}),
  composeWithDevTools()
);