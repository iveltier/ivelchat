import styles from "./chatMessage.module.css";
import user from "../../../assets/cookiemonster.jpg";
import bot from "../../../assets/walle.jpg";
function ChatMessage({ message, sender }) {
	return (
		<div>
			{sender === "bot" && (
				<img src={bot} className={styles.profilePicture} alt="chatbot" />
			)}
			{message}
			{sender === "user" && (
				<img src={user} className={styles.profilePicture} alt="user" />
			)}
		</div>
	);
}
export default ChatMessage;
