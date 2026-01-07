// ../../../components/home/chat/chatInput.jsx
// input + send button
import spinners from "./spinner.json";
import styles from "./chatInput.module.css";
import { getBotResponse } from "./chatBotRespones/chatBot.js";
import chatBots from "./chatBotRespones/chatBots.json";
import { useState } from "react";

function ChatInput({ chatMessages, setBotsMessages, currentBot, isMonospace }) {
	// text in user input
	const [inputText, setInputText] = useState("");

	// saves the input text in inputText
	function saveInputText(event) {
		setInputText(event.target.value);
	}

	// spamProtection if the bot is typing => user cant chat
	const [spamProtection, setSpamProtection] = useState(false);

	// function for sending a message
	async function sendMessage() {
		// if the input text is empty return
		if (inputText.trim() === "") {
			setInputText("");
			return;
		}
		// if the spamProtection is true then the user cant send a message
		if (spamProtection) {
			return;
		}

		// defines the botprofilePicture
		// gets the profilePicture from the chatBots.json

		const botProfilePicture = chatBots.bots[currentBot].profilePicture;

		// updated user message
		const updatedMessages = [
			...chatMessages,
			{
				message: inputText,
				sender: "user",
				id: crypto.randomUUID(),
				timestamp: Date.now(),
			},
		];

		// save the user message in botsMessage (persistent) without overwriting past messages
		setBotsMessages((prev) => ({
			...prev,
			[currentBot]: updatedMessages,
		}));

		// activate spamProtection
		setSpamProtection(true);

		// add spinner
		// get spinnerKeys from spinner.json
		const spinnerKeys = Object.keys(spinners);
		// every bot has its own spinner key
		const botSpinnerKey = spinnerKeys[chatBots.bots[currentBot].spinnerKey];
		// spinner date (interval + frames)
		const spinnerData = spinners[botSpinnerKey];

		// add the spinner to botsMessage => new chat bubble gets created with spinner
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

		// reset input text
		setInputText("");

		// delay before the bot answer get generated
		// show spinner
		const delay = Math.random() * 2000 + 1000;
		await new Promise((resolve) => setTimeout(resolve, delay));
		const response = await getBotResponse(inputText, currentBot);

		// turn of spamProtection
		setSpamProtection(false);

		// save final bot answer in botsMessage (persistent)
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

	// on enter send
	// on escape reset
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
				className={`${styles.messageInput} ${spamProtection ? styles.spamProtection : ""}`}
				placeholder={
					spamProtection
						? "Please wait kindly for the chatbot. It isn't always the fastest."
						: "Send message to chatbot"
				}
			/>
			<button
				type="button"
				onClick={sendMessage}
				className={styles.sendButton}
				disabled={spamProtection}
			>
				⏎
			</button>
		</div>
	);
}

export default ChatInput;
