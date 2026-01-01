import styles from "./chatMessage.module.css";
import Spinner from "./spinner.jsx";
function ChatMessage({
	message,
	sender,
	profilePicture,
	isSpinner,
	spinnerData,
	timestamp,
	isMonospace,
}) {
	const profilePictureSrc = `/images/profilePictures/bots/${profilePicture}`;
	if (isSpinner) {
		return (
			<div
				className={
					sender === "user" ? styles.chatMessageUser : styles.chatMessageBot
				}
			>
				{sender === "bot" && (
					<img
						src={profilePictureSrc}
						className={styles.profilePicture}
						alt="chatbot"
					/>
				)}
				<div
					className={`${styles.chatMessage} ${isMonospace ? styles.monospace : ""}`}
				>
					<Spinner
						frames={spinnerData.frames}
						interval={spinnerData.interval}
					/>
				</div>
			</div>
		);
	}
	return (
		<div
			className={
				sender === "user" ? styles.chatMessageUser : styles.chatMessageBot
			}
		>
			{sender === "bot" && (
				<img
					src={profilePictureSrc}
					className={styles.profilePicture}
					alt="chatbot"
				/>
			)}
			<div
				className={`${styles.chatMessage} ${isMonospace ? styles.monospace : ""}`}
			>
				<p>{message}</p>
				<span className={styles.timeStap}>
					{timestamp?.toLocaleString("de-DE", { hour12: false })}
				</span>
			</div>
			{sender === "user" && (
				<img
					src="/images/profilePictures/user/cookiemonster.jpg"
					className={styles.profilePicture}
					alt="user"
				/>
			)}
		</div>
	);
}
export default ChatMessage;
