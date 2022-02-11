import { NextPage, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { userAgentIsBot } from '../../utils/helper';
import { PostObj } from '../../@types/common';

import Sidebar from '../../components/sidebar';
import PostItem from '../../components/posts/Post';

import styles from '../../styles/home.module.scss';

interface Props {
	p: PostObj | null;
}

const Post: NextPage<Props> = ({ p }: Props) => {
	const router = useRouter();
	const { pid } = router.query;

	const [post, setPost] = useState<PostObj | null>(p);

	const fetchPost = async () => {
		console.log(`Fetching post ${pid} ...`);

		try {
			const api = await fetch('https://jsonplaceholder.typicode.com/posts/' + pid);
			const postFetched: PostObj = await api.json();

			setPost(postFetched);
		} catch (e) {
			// Handle errors
		}
	};

	useEffect(() => {
		if (!p) fetchPost();
	}, []);

	return (
		<div className='container mx-auto'>
			<div className={styles.title}>
				<h1 className='font-bold uppercase'>{post?.title.slice(0, 30)}...</h1>
			</div>

			<div className='flex flex-col lg:flex-row'>
				<div className="xl:w-9/12 lg:w-8/12">
					<div className="flex flex-col pr-12">
						{post &&
							<PostItem {...post} summary={false} />
						}
					</div>
				</div>
				<Sidebar />
			</div>
		</div>
	);
};

export const getServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
	let post: PostObj | null = null;
	if (!userAgentIsBot(req.headers['user-agent'])) return { props: { p: post } };

	const api = await fetch('https://jsonplaceholder.typicode.com/posts/' + query.pid);
	post = await api.json();

	return { props: { p: post } };
};

export default Post