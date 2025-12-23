import styles from "./chat.module.css";
import ChatInput from "./chatInput.jsx";
import ChatMessages from "./chatMessages.jsx";

function Chat({ chatMessages, setChatMessages, currentBot }) {
	return (
		<div className={`${styles.appContainer} ${styles.fadeOverlay}`}>
			<ChatMessages chatMessages={chatMessages} />
			<ChatInput
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
				currentBot={currentBot}
			/>
		</div>
	);
}

export default Chat;
