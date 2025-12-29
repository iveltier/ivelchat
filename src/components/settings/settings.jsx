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

	function handleProfilePictureSrc(name) {
		return `/images/profilePictures/user/${name}`;
	}

	return (
		<div className={styles.settingsContainer}>
			<Logo />

			<h1>Settings</h1>
			<div className={styles.changeProfilePictureWindow}>
				<h2>Change your profile picture</h2>
				<div className={styles.profilePicturesWrapper}>
					<img
						src={handleProfilePictureSrc("cookiemonster.jpg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("elmo.jpg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("peter.jpg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("killua.jpg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("patrick.jpg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("sandmann.jpeg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("ernie.jpg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("kadse.jpg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("cute.jpg")}
						className={styles.profilePictures}
					/>
					<img
						src={handleProfilePictureSrc("default.jpg")}
						className={styles.profilePictures}
					/>
				</div>
			</div>
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
					<tbody>
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
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Settings;
