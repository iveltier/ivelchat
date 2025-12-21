import styles from "./chatInput.module.css";
import { getBotResponse } from "./chatBotRespones/chatBot.js";
import { useState } from "react";
function ChatInput({ chatMessages, setChatMessages }) {
	const [inputText, setInputText] = useState("");
	function saveInputText(event) {
		setInputText(event.target.value);
	}
	function sendMessage() {
		const newChatMessages = [
			...chatMessages,
			{ message: inputText, sender: "user", id: crypto.randomUUID() },
		];
		setChatMessages(newChatMessages);
		const response = getBotResponse(inputText, "simpleBot");
		setChatMessages([
			...newChatMessages,
			{ message: response, sender: "bot", id: crypto.randomUUID() },
		]);
		setInputText("");
	}
	return (
		<div className={styles.messageInputContainer}>
			<input
				type="text"
				onChange={saveInputText}
				value={inputText}
				className={styles.messageInput}
				placeholder="Send message to Chatbot"
			></input>
			<button type="button" onClick={sendMessage} className={styles.sendButton}>
				Send
			</button>
		</div>
	);
}
export default ChatInput;
