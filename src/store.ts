// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';
// Import the slice reducers here.
import { inventoryReducer } from './features/inventory/inventorySlice';
import { cartReducer } from './features/cart/cartSlice';
import { currencyFilterReducer } from './features/currencyFilter/currencyFilterSlice';
// Create and export the store here.

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
});
const store = createStore(rootReducer);
export default store;