import type { NextPage, GetServerSidePropsContext } from 'next';
import { userAgentIsBot } from '../utils/helper';
import { PostType } from '../@types/common';

import Posts from '../components/posts';
import Sidebar from '../components/sidebar';

import styles from '../styles/home.module.scss';

interface Props {
	posts: PostType.PostObj[]
};

const Home: NextPage<Props> = ({ posts }: Props) => {
	return (
		<div className='container mx-auto'>
			<div className={styles.title}>
				<h1 className='font-bold uppercase'>True Blog</h1>
			</div>

			<div className='flex flex-col lg:flex-row'>
				<Posts p={posts} />
				<Sidebar />
			</div>
		</div>
	)
};

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
	let posts: PostType.PostObjects | null = null;

	if (!userAgentIsBot(req.headers['user-agent'])) return { props: { posts } };

	const api = await fetch('https://jsonplaceholder.typicode.com/posts');
	posts = await api.json();

	return { props: { posts } };
};

export default Home
