import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import { useState, useEffect } from 'react';

import styles from './Courses.module.css';

const Courses = ({ setCreateCourseIsRendered }) => {
	const [articleArray, setArticleArray] = useState([]);

	const handleSearch = (searchWord) => {
		console.log(mockedCoursesList);
		if (searchWord === '') {
			handleFillingCourses(mockedCoursesList);
		} else {
			handleFillingCourses(
				mockedCoursesList.filter((articleObj) => {
					return (
						articleObj.id.includes(searchWord.toLowerCase()) ||
						articleObj.title
							.toLocaleLowerCase()
							.includes(searchWord.toLowerCase())
					);
				})
			);
		}
	};

	const handleFillingCourses = (filteredCourseList) => {
		setArticleArray(
			filteredCourseList.map((article) => {
				return (
					<CourseCard
						key={article.id}
						courseTitle={article.title}
						courseDescription={article.description}
						duration={article.duration}
						creationDate={article.creationDate}
						authors={getAuthorsArray(article.authors)}
					/>
				);
			})
		);
	};

	const getAuthorsArray = (authorsIDsArray) => {
		const authorNamesArray = [];
		authorsIDsArray.forEach((AuthorID) => {
			mockedAuthorsList.forEach((authorObj) => {
				if (authorObj.id === AuthorID) {
					authorNamesArray.push(authorObj.name);
				}
			});
		});
		return authorNamesArray;
	};

	useEffect(() => {
		handleSearch('');
	}, []);

	return (
		<div className={styles.Courses}>
			<SearchBar
				handleSearch={handleSearch}
				setCreateCourseIsRendered={setCreateCourseIsRendered}
			/>
			<div className={styles.coursesContainer}>
				{articleArray.map((ele) => ele)}
			</div>
		</div>
	);
};

export default Courses;
