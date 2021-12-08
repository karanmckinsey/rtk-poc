import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TYPES } from '../types';

export const postsApis = createApi({
	reducerPath: 'posts',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: (builder) => ({
		getPostById: builder.query<TYPES.POSTS, number>({
			query: (id) => `posts/${id}`
		})
	})
});

export const { useGetPostByIdQuery } = postsApis;
