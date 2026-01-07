// components/settings/homepageButton/homepageButton.jsx
// fixed link to homepage
import styles from "./homepageButton.module.css";
import { Link } from "react-router";
function HomepageButton() {
	return (
		<Link to="/homepage">
			<div className={styles.settingsLogo}>⮌</div>
		</Link>
	);
}
export default HomepageButton;
