import styles from "./chat.module.css";
import ChatInput from "./chatInput.jsx";
import ChatMessages from "./chatMessages.jsx";

function Chat({
	chatMessages,
	setBotsMessages,
	currentBot,
	isMonospace,
	currentUserPicture,
}) {
	return (
		<div className={`${styles.appContainer} ${styles.fadeOverlay}`}>
			<ChatMessages
				chatMessages={chatMessages}
				currentUserPicture={currentUserPicture}
			/>
			<ChatInput
				chatMessages={chatMessages}
				setBotsMessages={setBotsMessages}
				currentBot={currentBot}
				isMonospace={isMonospace}
			/>
		</div>
	);
}

export default Chat;
