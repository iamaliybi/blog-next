import { useEffect, useState } from "react";
import { PostType } from '../../@types/common';
import Post from "./Post";

import styles from '../../styles/home.module.scss';

interface Props {
	p: PostType.PostObjects | null;
}

interface PostState {
	items: PostType.PostObjects | null;
	loaded: number;
	isLoaded: boolean;
}

const Posts: React.FC<Props> = ({ p }: Props) => {
	const [posts, setPosts] = useState<PostState>({
		items: p,
		loaded: 0,
		isLoaded: true,
	});

	const calculateLoadedPost = () => {
		let shouldBeLoaded = posts.loaded + 5;
		const items = posts.items as PostType.PostObjects;

		if (shouldBeLoaded > items.length) shouldBeLoaded = items.length;

		setPosts({
			...posts,
			loaded: shouldBeLoaded,
			isLoaded: shouldBeLoaded === items.length
		});
	};

	const fetchPosts = async () => {
		console.log('Fetching posts ...');

		try {
			const api = await fetch('https://jsonplaceholder.typicode.com/posts');
			const posts: PostType.PostObjects = await api.json();

			let length = posts.length;
			length = length > 5 ? 5 : length;
			setPosts({
				items: posts,
				loaded: length,
				isLoaded: length === posts.length
			});
		} catch (e) {
			// Handle errors
		}
	}

	useEffect(() => {
		if (!posts.items) fetchPosts();
	}, []);

	return (
		<div className="xl:w-9/12 lg:w-8/12">
			{
				posts.items === null
					?
					<div className="w-full text-center">
						<span className="text-lg font-medium text-primary">Loading ...</span>
					</div>
					:
					<>
						<div className="flex flex-col pr-12">
							{posts.items?.slice(0, posts.loaded - 1).map(post => (
								<Post key={post.id} {...post} summary />
							))}
						</div>

						<div className={styles['load-more']}>
							<button onClick={calculateLoadedPost} disabled={posts.isLoaded} type="button">Load More</button>
						</div>
					</>
			}
		</div>
	)
};

export default Posts;