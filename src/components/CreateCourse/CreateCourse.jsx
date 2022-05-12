import styles from './CreateCourse.module.css';

import { Button, Input } from '../common/index';
import Author from './components/Author/Author';

import { mockedAuthorsList, mockedCoursesList } from '../../constants';

import { useState } from 'react';

const CreateCourse = ({ displayCourses }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');
	const [newAuthorName, setNewAuthorName] = useState('');
	const [authors, setAuthors] = useState([...mockedAuthorsList]);
	const [addedAuthors, setAddedAuthors] = useState([]);

	const addCourse = () => {
		if (!title) {
			alert('Please enter course title');
		} else if (description.length < 2) {
			alert('Please enter course description');
		} else if (addedAuthors.length === 0) {
			alert('Please add authors to the course');
		} else if (duration === '' || duration === 0) {
			alert('Please add duration');
		} else {
			let date = new Date();
			mockedCoursesList.push({
				id: String(Date.now()),
				title: title,
				description: description,
				creationDate: date
					.toLocaleString('en-GB', { timeZone: 'UTC' })
					.split(',')[0],
				duration: duration,
				authors: addedAuthors.map((authorObj) => {
					return authorObj.id;
				}),
			});
			console.log(mockedCoursesList);
			displayCourses();
		}
	};

	const validateDurationInput = (event, onChangeFunction) => {
		if (isNaN(Number(event.target.value))) {
			event.target.value = duration;
			onChangeFunction(event.target.value);
		} else {
			setDuration(event.target.value);
		}
	};

	const handleDisplayDuration = () => {
		let hours = Math.floor(duration / 60);
		let minutes = duration % 60;
		return `${hours.toString().length === 1 ? String('0' + hours) : hours}:${
			minutes.toString().length === 1 ? '0' + minutes : minutes
		}`;
	};

	const handleCreateAuthor = () => {
		if (newAuthorName.length > 1) {
			let newAuthor = { id: String(Date.now()), name: newAuthorName };
			mockedAuthorsList.push(newAuthor);
			setAuthors([...authors, newAuthor]);
			console.log(mockedAuthorsList);
		} else {
			alert('Author name should be at leas 2 characters long');
		}
	};

	const handleToggleAuthorToCourse = (author, add = true) => {
		if (add) {
			setAddedAuthors([...addedAuthors, author]);
			setAuthors([
				...authors.filter((ele) => {
					return ele.id !== author.id;
				}),
			]);
		} else {
			setAuthors([...authors, author]);
			setAddedAuthors([
				...addedAuthors.filter((ele) => {
					return ele.id !== author.id;
				}),
			]);
		}
	};

	const mapAuthors = (authorArray, isAdded) => {
		if (authorArray.length === 0) {
			return <p>Author list is empty</p>;
		}
		return authorArray.map((ele) => {
			return (
				<Author
					authorName={ele.name}
					authorID={ele.id}
					key={ele.id}
					handleToggleAuthorToCourse={handleToggleAuthorToCourse}
					isAdded={isAdded}
				/>
			);
		});
	};

	return (
		<div className={styles.CreateCourseContainer}>
			<div className={styles.CreateCourseHeader}>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					onChange={setTitle}
				/>
				<Button buttonText='Create Course' onClick={addCourse} />
			</div>
			<Input
				labelText='Description'
				placeholderText='Enter description'
				type='textarea'
				onChange={setDescription}
			/>
			<div className={styles.CreateCourseBody}>
				<div className={styles.addAuthorContainer}>
					<div className={styles.addAuthorInputContainer}>
						<h3>Add author</h3>
						<Input
							placeholderText='Enter author name...'
							width='100%'
							labelText='Author name'
							onChange={setNewAuthorName}
						/>
						<Button buttonText='Create author' onClick={handleCreateAuthor} />
					</div>

					<div className={styles.durationInputContainer}>
						<h3>Duration</h3>
						<Input
							placeholderText='Enter duration in minutes...'
							labelText='Duration'
							width='100%'
							validateInputFunction={validateDurationInput}
						/>
						<p>Duration:{handleDisplayDuration()} hours</p>
					</div>
				</div>
				<div className={styles.authorsContainer}>
					<h3>Authors</h3>
					<div className={styles.authorsList}>{mapAuthors(authors, false)}</div>
					<h3>Course authors</h3>
					<div className={styles.addeAuthorsList}>
						{mapAuthors(addedAuthors, true)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
