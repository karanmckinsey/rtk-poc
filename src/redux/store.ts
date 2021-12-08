import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { gallerySlice } from './slices/gallery';
import { postsApis } from './slices/posts';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		gallery: gallerySlice.reducer,
		[postsApis.reducerPath]: postsApis.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApis.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
