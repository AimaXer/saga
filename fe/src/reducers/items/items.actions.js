import { createAction } from '@reduxjs/toolkit';

export const getAllItemsAction = createAction('items/getAllItems');

export const getAllItemsSuccess = createAction('items/getAllItems/success', (items) => ({
  payload: undefined,
  meta: {
    payload: {
      items,
    },
  },
}));