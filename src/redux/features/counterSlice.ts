import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../utils/interfaces/rootState';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state.value);
      
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counterReducer.value;

export default counterSlice.reducer;
