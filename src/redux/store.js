import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 150,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// export const myReducer = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    user: userSlice.reducer,
  },
});
