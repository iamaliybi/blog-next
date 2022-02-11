import Image from 'next/image';
import SidebarItem from './Item';
import styles from '../../styles/sidebar.module.scss';

interface SocialMedia {
	id: string;
	name: string;
	href: string;
	icon: any;
}

const ICONS = {
	instagram: (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5">
			</rect>
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
			</path>
			<line x1="17.5" y1="6.5" x2="17.51" y2="6.5">
			</line>
		</svg>
	),

	twitter: (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
			</path>
		</svg>
	),

	youtube: (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
			</path>
			<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02">
			</polygon>
		</svg>
	)
}

const Follow: React.FC = () => {
	const SOCIAL_MEDIA: SocialMedia[] = [
		{ id: 'instagram', name: 'Instagram', href: '#', icon: ICONS['instagram'] },
		{ id: 'twitter', name: 'Twitter', href: '#', icon: ICONS['twitter'] },
		{ id: 'youtube', name: 'Youtube', href: '#', icon: ICONS['youtube'] },
	];

	return (
		<SidebarItem label='Follow Us'>
			<div className='flex flex-wrap justify-center'>
				{SOCIAL_MEDIA.map((media: SocialMedia) => (
					<div
						key={media.id}
						className={styles['social-item']}
					>
						<a
							rel="noreferrer"
							target='_blank'
							href={media.href}
						>
							{media.icon}
							<span>{media.name}</span>
						</a>
					</div>
				))}
			</div>
		</SidebarItem>
	)
};

export default Follow;