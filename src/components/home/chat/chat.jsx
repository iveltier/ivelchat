import styles from "./chat.module.css";
import { useState } from "react";
import ChatInput from "./chatInput.jsx";
import ChatMessages from "./chatMessages.jsx";
function Chat() {
	const [chatMessages, setChatMessages] = useState([
		{ message: "Hello, how can I help you?", sender: "bot", id: "id1" },
	]);

	return (
		<div className={styles.appContainer}>
			<ChatMessages chatMessages={chatMessages} />
			<ChatInput
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
			/>
		</div>
	);
}
export default Chat;
