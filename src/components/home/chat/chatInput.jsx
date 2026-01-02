import spinners from "./spinner.json";
import styles from "./chatInput.module.css";
import { getBotResponse } from "./chatBotRespones/chatBot.js";
import chatBots from "./chatBotRespones/chatBots.json";
import { useState } from "react";

function ChatInput({ chatMessages, setBotsMessages, currentBot, isMonospace }) {
	const [inputText, setInputText] = useState("");

	function saveInputText(event) {
		setInputText(event.target.value);
	}

	async function sendMessage() {
		if (inputText.trim() === "") {
			setInputText("");
			return;
		}

		const botProfilePicture = chatBots.bots[currentBot].profilePicture;

		const updatedMessages = [
			...chatMessages,
			{
				message: inputText,
				sender: "user",
				id: crypto.randomUUID(),
				timestamp: Date.now(),
			},
		];

		// Speichern: User-Nachricht
		setBotsMessages((prev) => ({
			...prev,
			[currentBot]: updatedMessages,
		}));

		// Spinner hinzufügen
		const spinnerKeys = Object.keys(spinners);
		const botSpinnerKey = spinnerKeys[chatBots.bots[currentBot].spinnerKey];
		const spinnerData = spinners[botSpinnerKey];

		setBotsMessages((prev) => ({
			...prev,
			[currentBot]: [
				...updatedMessages,
				{
					id: crypto.randomUUID(),
					sender: "bot",
					isSpinner: true,
					spinnerData,
					profilePicture: botProfilePicture,
				},
			],
		}));

		setInputText("");

		const delay = Math.random() * 2000 + 1000;
		await new Promise((resolve) => setTimeout(resolve, delay));

		const response = getBotResponse(inputText, "simpleChatbot");

		// Finale Bot-Antwort speichern
		setBotsMessages((prev) => ({
			...prev,
			[currentBot]: [
				...updatedMessages,
				{
					message: response,
					sender: "bot",
					id: crypto.randomUUID(),
					profilePicture: botProfilePicture,
					timestamp: Date.now(),
					isMonospace,
				},
			],
		}));
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
			/>
			<button type="button" onClick={sendMessage} className={styles.sendButton}>
				Send
			</button>
		</div>
	);
}

export default ChatInput;
