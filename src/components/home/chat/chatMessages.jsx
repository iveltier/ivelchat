import styles from "./chatMessages.module.css";
import ChatMessage from "./chatMessage";
function ChatMessages({ chatMessages }) {
	return (
		<div className={styles.chatMessagesContainer}>
			{chatMessages.map((chatMessage) => {
				return (
					<ChatMessage
						message={chatMessage.message}
						sender={chatMessage.sender}
						key={chatMessage.id}
					/>
				);
			})}
		</div>
	);
}
export default ChatMessages;
