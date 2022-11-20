import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const slice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getAllItems(state, { payload }) {
      state.items = payload;
    }
  },
  extraReducers: {}
});

const { reducer } = slice;
export const itemsReducer = reducer;
export const {
  getAllItems,
} = slice.actions;