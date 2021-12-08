import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment, decrement } from './redux/slices/counter';
import { useGetPostByIdQuery } from './redux/slices/posts';
import { getPhotos } from './redux/slices/gallery';

function App() {
	const { value } = useAppSelector((state) => state.counter);
	const { photos } = useAppSelector((state) => state.gallery);
	// const everything = useAppSelector((state) => state.posts);
	const dispatch = useAppDispatch();
	const [ skip, setSkip ] = React.useState(true);
	console.log('RESULT', photos);

	// useGetPostByIdQuery(1, { skip });

	return (
		<div className="App">
			<h1>{value}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<br />
			<h1>{String(skip)}</h1>
			<button onClick={() => setSkip((old) => !old)}>Get Posts</button>
			<button onClick={() => dispatch(getPhotos(100999))}>Get Posts</button>
		</div>
	);
}

export default App;
