import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICounterState {
	value: number;
}

const initialState: ICounterState = {
	value: 0
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementBy: (state, action: PayloadAction<number>) => {
			state.value = state.value + action.payload;
		}
	}
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
