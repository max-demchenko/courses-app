import styles from './Input.module.css';

const Input = ({
	labelText = false,
	placeholderText = 'placeHolder',
	type = 'text',
	width = 'default',
	validateInputFunction = (event, onChangeFunction) => {
		onChangeFunction(event.target.value);
	},
	onChange = () => {},
}) => {
	const addLabel = (labelText) => {
		if (labelText) {
			return <label className={styles.label}>{labelText}</label>;
		}
	};

	const addInput = () => {
		if (type === 'text') {
			return (
				<input
					className={styles.Input}
					type={type}
					onChange={(event) => {
						return validateInputFunction(event, onChange);
					}}
					placeholder={placeholderText}
				></input>
			);
		} else if (type === 'textarea') {
			return (
				<textarea
					className={styles.Textarea}
					onChange={(event) => {
						onChange(event.target.value);
					}}
					placeholder={placeholderText}
				></textarea>
			);
		}
	};

	return (
		<div
			className={`${styles.InputContainer} ${
				width === '100%' ? styles.width100 : ''
			}`}
		>
			{addLabel(labelText)} {addInput()}
		</div>
	);
};

export default Input;
