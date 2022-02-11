import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { PostObj } from '../../@types/common';
import styles from '../../styles/post.module.scss';

interface Props extends PostObj {
	summary: boolean;
}

const Post: React.FC<Props> = ({ id, userId, title, body, summary }: Props) => {
	return (
		<div className={clsx(styles.post, 'shadow-md')}>
			<div className={styles.title}>
				<h1>{title}</h1>
			</div>

			<div className={styles.image}>
				<Image
					layout='fill'
					src={'https://picsum.photos/1920/1024?random=' + id}
					priority
				/>
			</div>

			<div className={styles.summary}>
				<p>{body}</p>
			</div>

			{summary &&
				<div className={styles.action}>
					<Link href={'/post/' + id}>
						Continue Reading
					</Link>
				</div>
			}
		</div>
	)
};

export default Post;