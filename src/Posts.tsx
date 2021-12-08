import { useAppSelector } from './redux/hooks';

const Posts = () => {
	const something = useAppSelector((state) => state.posts.queries);
	console.log(something);
	return <h1>Posts</h1>;
};

export default Posts;
