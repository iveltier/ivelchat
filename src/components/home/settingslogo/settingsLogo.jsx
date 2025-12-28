import styles from "./settingsLogo.module.css";
import { Link } from "react-router";
function SettingsLogo() {
	return (
		<Link to="/settings">
			<div className={styles.settingsLogo}>⚙</div>
		</Link>
	);
}
export default SettingsLogo;
