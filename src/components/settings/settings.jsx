import styles from "./settings.module.css";
import Logo from "../home/logo/logo.jsx";
import { useState, useEffect } from "react";
import { generatePalette, applyPaletteToCSS } from "./colorHelper.jsx";

function Settings({
	enableTimestamp,
	setEnableTimestamp,
	isMonospace,
	setIsMonospace,
	enable24hFormat,
	setEnable24hFormat,
	currentUserPicture,
	setCurrentUserPicture,
}) {
	const [baseColor, setBaseColor] = useState("#FFFFFF");
	const [palette, setPalette] = useState([]);

	useEffect(() => {
		const newPalette = generatePalette(baseColor);
		setPalette(newPalette);
		applyPaletteToCSS(palette);
	}, [baseColor]);
	const profilePicturesSrc = "/images/profilePictures/user/";
	const [visible, setVisible] = useState(false);

	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 100);

		return () => clearInterval(interval);
	}, []);

	function handleProfilePictureSrc(name) {
		return profilePicturesSrc + name;
	}

	// esc to close
	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === "Escape") {
				setVisible(false);
			}
		};
		window.addEventListener("keydown", handleEsc);

		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, []);

	return (
		<div className={styles.settingsContainer}>
			<Logo />

			<h1>Settings</h1>
			{visible && (
				<div className={styles.changeProfilePictureWindow}>
					<h2>Change your profile picture</h2>
					<div className={styles.profilePicturesWrapper}>
						{[
							"cookiemonster.jpg",
							"elmo.jpg",
							"peter.jpg",
							"killua.jpg",
							"patrick.jpg",
							"sandmann.jpeg",
							"ernie.jpg",
							"kadse.jpg",
							"cute.jpg",
							"default.jpg",
						].map((file) => (
							<img
								key={file}
								alt={file}
								src={handleProfilePictureSrc(file)}
								className={styles.profilePictures}
								onClick={() => {
									setCurrentUserPicture(handleProfilePictureSrc(file));
									setVisible(false);
								}}
							/>
						))}
					</div>
				</div>
			)}
			<div className={styles.settingsWrapper}>
				<div>
					<img src={currentUserPicture} className={styles.currentUserPicture} />
					<button
						type="button"
						className={styles.changeProfilePictureButton}
						onClick={() => setVisible(true)}
					>
						CHANGE PROFILE PICTURE
					</button>
					<p className={styles.profileInfo}>Guest</p>

					<p>
						⏱{" "}
						{time.toLocaleTimeString("de-DE", {
							hour: "2-digit",
							minute: "2-digit",
							hour12: !enable24hFormat,
						})}
					</p>
				</div>

				<table className={styles.settingsTable}>
					<tbody>
						<tr>
							<td>Color Scheme</td>
							<td>
								<input
									type="color"
									value={baseColor}
									onChange={(e) => {
										setBaseColor(e.target.value);
									}}
								/>
							</td>
						</tr>
						<tr>
							<td>Timestamps</td>
							<td>
								<label className={styles.switch}>
									<input
										type="checkbox"
										className={styles.checkBox}
										onChange={(e) => {
											setEnableTimestamp(e.target.checked);
										}}
										checked={enableTimestamp}
									/>
									<span className={styles.slider}></span>
								</label>
							</td>
						</tr>
						<tr>
							<td>Monospace</td>
							<td>
								<label className={styles.switch}>
									<input
										type="checkbox"
										className={styles.checkBox}
										onChange={(e) => {
											setIsMonospace(e.target.checked);
										}}
										checked={isMonospace}
									/>
									<span className={styles.slider}></span>
								</label>
							</td>
						</tr>
						<tr>
							<td>24h Format</td>
							<td>
								<label className={styles.switch}>
									<input
										type="checkbox"
										className={styles.checkBox}
										onChange={(e) => {
											setEnable24hFormat(e.target.checked);
										}}
										checked={enable24hFormat}
									/>
									<span className={styles.slider}></span>
								</label>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Settings;
