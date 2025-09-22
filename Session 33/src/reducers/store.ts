import { combineReducers, createStore } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { notificationReducer } from './notificationReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  notification: notificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
