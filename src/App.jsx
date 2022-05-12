import { Header, Courses, CreateCourse } from './components/index';

import { useState } from 'react';

import styles from './App.module.css';

const handleRenderCourses = () => {};

function App() {
	const [createCourseIsRendered, setCreateCourseIsRendered] = useState(false);

	return (
		<div className={styles.App}>
			<Header />
			{createCourseIsRendered ? (
				<CreateCourse
					displayCourses={() => {
						setCreateCourseIsRendered(false);
					}}
				/>
			) : (
				<Courses
					setCreateCourseIsRendered={() => {
						setCreateCourseIsRendered(true);
					}}
				/>
			)}
		</div>
	);
}

export default App;
