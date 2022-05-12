import { Button } from '../../../index';

import styles from './CourseCard.module.css';

const CourseCard = ({
	courseTitle,
	courseDescription,
	authors,
	duration,
	creationDate,
}) => {
	return (
		<div className={styles.CourseCardContainer}>
			<div className={styles.CourseCardDescription}>
				<h1>{courseTitle}</h1>
				<p>{courseDescription}</p>
			</div>
			<div className={styles.infoMainContainer}>
				<div className={styles.infoContainer}>
					<h5 className={styles.infoTitle}>Authors:</h5>
					<p>
						{authors.map((ele) => {
							return <span key={ele}>{ele + ', '}</span>;
						})}
					</p>
				</div>
				<div className={styles.infoContainer}>
					<h5 className={styles.infoTitle}>Duration:</h5>
					<p>{duration}</p>
				</div>
				<div className={styles.infoContainer}>
					<h5 className={styles.infoTitle}>Created:</h5>
					<p>{creationDate}</p>
				</div>
				<Button />
			</div>
		</div>
	);
};

export default CourseCard;
