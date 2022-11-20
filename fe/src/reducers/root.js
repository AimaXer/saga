import { combineReducers } from '@reduxjs/toolkit';
import { itemsReducer } from './items/items.slice';

export const rootReducer = combineReducers({
  items: itemsReducer
});