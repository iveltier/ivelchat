// components/home/chat/chatMessage.jsx
// generates the chatmessage
import styles from "./chatMessage.module.css";
import Spinner from "./spinner.jsx";
function ChatMessage({
	message,
	sender,
	profilePicture,
	isSpinner,
	spinnerData,
	timestamp,
	enableTimestamp,
	isMonospace,
	enable24hFormat,
	currentUserPicture,
}) {
	// bot profilePicture src
	const profilePictureSrc = `/images/profilePictures/bots/${profilePicture}`;
	// spinner message
	if (isSpinner) {
		return (
			<div className={styles.chatMessageBot}>
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
	// return the profilePicture on the left if the sender is "bot" => else on right
	// settings like isMonospace get applied here
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
				className={`${styles.chatMessage} ${isMonospace ? styles.monospace : ""} ${sender === "user" ? styles.chatMessageUserShadow : styles.chatMessageBotShadow}`}
			>
				<p className={styles.message}>{message}</p>

				{enableTimestamp && (
					<span className={styles.timestamp}>
						{new Date(timestamp).toLocaleString("de-DE", {
							hour12: !enable24hFormat,
						})}
					</span>
				)}
			</div>
			{sender === "user" && (
				<img
					src={currentUserPicture}
					className={styles.profilePicture}
					alt="user"
				/>
			)}
		</div>
	);
}
export default ChatMessage;
