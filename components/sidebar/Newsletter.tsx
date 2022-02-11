import React, { useState } from 'react';
import SidebarItem from './Item';
import styles from '../../styles/sidebar.module.scss';

const Newsletter: React.FC = () => {
	const [mail, setMail] = useState<string>('');

	const mailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const target = e.target || e.currentTarget;
		setMail(target.value);
	};

	const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	return (
		<SidebarItem label='Newsletter'>
			<form className='flex flex-col' onSubmit={formSubmitHandler}>
				<div className={styles['input-group']}>
					<input
						type='email'
						value={mail}
						placeholder='Email address ...'
						onChange={mailChangeHandler}
					/>
				</div>

				<button
					className={styles['submit']}
					type='submit'
					disabled={mail.length < 3}
				>
					Submit
				</button>
			</form>
		</SidebarItem>
	)
};

export default Newsletter;