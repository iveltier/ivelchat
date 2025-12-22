import styles from "./chatMessage.module.css";
import user from "../../../assets/cookiemonster.jpg";
import bot from "../../../assets/walle.jpg";
import Spinner from "./spinner.jsx";
function ChatMessage({ message, sender, isSpinner, spinnerData }) {
	if (isSpinner) {
		return (
			<div
				className={
					sender === "user" ? styles.chatMessageUser : styles.chatMessageBot
				}
			>
				{sender === "bot" && (
					<img src={bot} className={styles.profilePicture} alt="chatbot" />
				)}
				<div className={styles.chatMessage}>
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
				<img src={bot} className={styles.profilePicture} alt="chatbot" />
			)}
			<div className={styles.chatMessage}>{message}</div>
			{sender === "user" && (
				<img src={user} className={styles.profilePicture} alt="user" />
			)}
		</div>
	);
}
export default ChatMessage;
