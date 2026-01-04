import styles from "./settings.module.css";
import HomepageButton from "./homepageButton/homepageButton.jsx";
import Logo from "../home/logo/logo.jsx";
import { useState, useEffect } from "react";

function Settings({
	baseColor,
	setBaseColor,
	enableTimestamp,
	setEnableTimestamp,
	isMonospace,
	setIsMonospace,
	enable24hFormat,
	setEnable24hFormat,
	currentUserPicture,
	setCurrentUserPicture,
}) {
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
			<HomepageButton />

			<h1>Settings</h1>
			{visible && (
				<div className={styles.changeProfilePictureWindow}>
					<h2 className={styles.changeProfilePictureWindowHeading}>
						Change your profile picture
					</h2>
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
					<div className={styles.profilePicturesContainer}>
						<img
							src={currentUserPicture}
							className={styles.currentUserPicture}
						/>
						<button
							type="button"
							className={styles.changeProfilePictureButton}
							onClick={() => setVisible(true)}
						>
							CHANGE PROFILE PICTURE
						</button>
						<p className={styles.profileInfoName}>Guest</p>
						<p className={styles.profileInfoClock}>
							⏱{" "}
							{time.toLocaleTimeString("de-DE", {
								hour: "2-digit",
								minute: "2-digit",
								hour12: !enable24hFormat,
							})}
						</p>
					</div>
				</div>

				<table className={styles.settingsTable}>
					<tbody>
						<tr>
							<td>
								<p className={styles.setting}>Colorscheme</p>
								<p className={styles.discription}>
									Choose a color and the website will generate a color scheme
									based on the choosen color.
								</p>
							</td>
							<td>
								<input
									type="color"
									value={baseColor}
									onChange={(e) => {
										setBaseColor(e.target.value);
									}}
									className={styles.colorPicker}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<p className={styles.setting}>Timestamps</p>
								<p className={styles.discription}>
									Enables / disables timestamps for chat messages.
								</p>
							</td>
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
							<td>
								<p className={styles.setting}>Monospace</p>
								<p className={styles.discription}>
									Enables / disables the "
									<span className={styles.mono}>monospace</span>" font-family
									for chat messages.
								</p>
							</td>
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
							<td>
								<p className={styles.setting}>24h Format</p>
								<p className={styles.discription}>
									Enables / disables the 24h Format for every clock.
								</p>
							</td>
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
