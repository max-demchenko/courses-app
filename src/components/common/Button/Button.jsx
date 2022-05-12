import styles from './Button.module.css';

const Button = ({ buttonText = 'button', onClick = () => {} }) => {
	return (
		<button
			className={styles.Button}
			onClick={(event) => {
				onClick();
			}}
		>
			{buttonText}
		</button>
	);
};

export default Button;
