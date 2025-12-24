import spinners from "./spinner.json";
import styles from "./chatInput.module.css";
import { getBotResponse } from "./chatBotRespones/chatBot.js";
import chatBots from "./chatBotRespones/chatBots.json";
import { useState } from "react";
function ChatInput({ chatMessages, setChatMessages, currentBot }) {
	const [inputText, setInputText] = useState("");
	function saveInputText(event) {
		setInputText(event.target.value);
	}
	async function sendMessage() {
		if (inputText.trim() === "") {
			setInputText("");
			return;
		}

		// get bot profile picture
		const botProfilePicture = chatBots.bots[currentBot].profilePicture;

		// get new user chat message
		const newChatMessages = [
			...chatMessages,
			{
				message: inputText,
				sender: "user",
				id: crypto.randomUUID(),
				timestamp: new Date(),
			},
		];
		setChatMessages(newChatMessages);

		// send response
		// choose spinner

		const spinnerKeys = Object.keys(spinners);
		const randomKey = spinnerKeys[chatBots.bots[currentBot].spinnerKey];
		const spinnerData = spinners[randomKey];

		// show spinner
		const spinnerMessage = {
			id: crypto.randomUUID(),
			sender: "bot",
			isSpinner: true,
			spinnerData,
			profilePicture: botProfilePicture,
		};
		setChatMessages((prev) => [...prev, spinnerMessage]);

		setInputText("");
		// wait 1-3s
		const delay = Math.random() * 2000 + 1000;
		await new Promise((resolve) => setTimeout(resolve, delay));

		//send real bot response
		const response = getBotResponse(inputText, "simpleChatbot");

		setChatMessages([
			...newChatMessages,
			{
				message: response,
				sender: "bot",
				id: crypto.randomUUID(),
				profilePicture: botProfilePicture,
				timestamp: new Date(),
			},
		]);
	}
	function handleOnKeyDown(event) {
		if (event.key === "Enter") sendMessage();
		if (event.key === "Escape") setInputText("");
	}
	return (
		<div className={styles.messageInputContainer}>
			<input
				type="text"
				onChange={saveInputText}
				onKeyDown={handleOnKeyDown}
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
