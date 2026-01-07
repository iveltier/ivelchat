// ../../../components/home/settingslogo/settingsLogo.jsx
// settingslogo with a link to /settings
// fixed in top right corner
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
