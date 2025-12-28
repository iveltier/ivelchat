import styles from "./settings.module.css";
import Logo from "../home/logo/logo.jsx";
import { useState, useEffect } from "react";

function Settings() {
	const [currentUserPicture, setCurrentUserPicture] = useState(
		"/images/profilePictures/user/cookiemonster.jpg",
	);

	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 100);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.settingsContainer}>
			<Logo />

			<h1>Settings</h1>
			<div className={styles.changeProfilePictureWindow}></div>
			<div className={styles.settingsWrapper}>
				<div>
					<img src={currentUserPicture} className={styles.currentUserPicture} />
					<button type="button" className={styles.changeProfilePictureButton}>
						CHANGE PROFILE PICTURE
					</button>
					<p className={styles.profileInfo}>Guest</p>

					<p>
						⏱{" "}
						{time.toLocaleTimeString("de-DE", {
							hour: "2-digit",
							minute: "2-digit",
							hour12: false,
						})}
					</p>
				</div>

				<table className={styles.settingsTable}>
					<tr>
						<td>Color Scheme</td>
						<td></td>
					</tr>
					<tr>
						<td>Timestamps</td>
						<td></td>
					</tr>
					<tr>
						<td>Monospace</td>
						<td></td>
					</tr>
					<tr>
						<td>24h Format</td>
						<td></td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default Settings;
