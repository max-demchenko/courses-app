import styles from './SearchBar.module.css';

import { Input, Button } from '../../../index';

import { useState } from 'react';

const SearchBar = ({ handleSearch, setCreateCourseIsRendered }) => {
	const [searchWord, setSearchWord] = useState('');

	const handleChangeInput = (value) => {
		setSearchWord(value);
	};

	return (
		<div className={styles.SearchBarContainer}>
			<div className={styles.SearchContainer}>
				<Input
					placeholderText='Enter course name...'
					onChange={handleChangeInput}
				/>
				<Button
					buttonText='Search'
					onClick={() => {
						handleSearch(searchWord);
					}}
				/>
			</div>
			<Button buttonText='Add new course' onClick={setCreateCourseIsRendered} />
		</div>
	);
};

export default SearchBar;
