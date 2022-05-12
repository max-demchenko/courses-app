import styles from './Logo.module.css';

export const Logo = ({ img }) => {
	return <img className={styles.logo} alt='img' src={img} />;
};
