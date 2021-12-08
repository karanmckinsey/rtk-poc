import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

// actions
export const getPhotos = createAsyncThunk('gallery/getPhotos', async (x: number, y) => {
	console.log('ARG', x);
	const state = y.getState() as RootState;
	console.log(state.gallery.photos);
	const { data } = await axios.get('https://picsum.photos/v2/list?page=3&limit=9');
	return data;
});

// reducer
export const gallerySlice = createSlice({
	name: 'gallery',
	initialState: {
		photos: [],
		loading: false,
		error: false
	},
	reducers: {},
	// for thunks
	extraReducers: {
		[getPhotos.pending.toString()]: (state) => {
			state.loading = true;
		},
		[getPhotos.rejected.toString()]: (state) => {
			state.loading = false;
			state.error = true;
		},
		[getPhotos.fulfilled.toString()]: (state, action) => {
			state.loading = false;
			state.error = false;
			state.photos = action.payload;
		}
	}
});
