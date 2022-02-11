import SidebarItem from './Item';
import styles from '../../styles/sidebar.module.scss';

const About: React.FC = () => {
	return (
		<SidebarItem label='About Me'>
			<div className='flex flex-col'>
				<div style={{ backgroundImage: 'url(\'/images/avatar.jpg\')' }} className={styles['about-image']}>
					<div className={styles.overlay}></div>
				</div>

				<div className={styles['about-content']}>
					<p className='font-normal text-base text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, totam eaque! Officia architecto fugit, reiciendis non </p>
				</div>
			</div>
		</SidebarItem>
	)
};

export default About;