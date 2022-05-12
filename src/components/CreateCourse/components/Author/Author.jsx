import styles from './Author.module.css';

import { Button } from '../../../common/index';

const Author = ({
	authorName = 'author name',
	authorID = '',
	isAdded = false,
	handleToggleAuthorToCourse = () => {},
}) => {
	return (
		<div className={styles.Author}>
			<p>{authorName}</p>
			{isAdded ? (
				<Button
					buttonText='Delete author'
					onClick={() => {
						handleToggleAuthorToCourse(
							{ id: authorID, name: authorName },
							false
						);
					}}
				/>
			) : (
				<Button
					buttonText='Add author'
					onClick={() => {
						handleToggleAuthorToCourse({ id: authorID, name: authorName });
					}}
				/>
			)}
		</div>
	);
};

export default Author;
