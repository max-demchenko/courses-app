import styles from './Header.module.css';
import { Logo } from './components/Logo/Logo.jsx';
import logo from '../../assets/Logo.png';
import { Button } from '../index.js';

const Header = () => {
	return (
		<div className={styles.Header}>
			<Logo img={logo} />
			<div className={styles.HeaderContent}>
				<p>Dave</p>
				<Button buttonText='Logout' />
			</div>
		</div>
	);
};

export default Header;
