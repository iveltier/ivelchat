import { useState } from "react";
import Chat from "./chat/chat.jsx";
import styles from "./home.module.css";
import Menu from "./menu/menu.jsx";
import chatBots from "./chat/chatBotRespones/chatBots.json";
function Home() {
	// get the available bot names from JSON
	const availableBotNames = Object.keys(chatBots.bots);
	// object {botName : [messages: "..."]}
	const [botsMessages, setBotsMessages] = useState(() => {
		const init = {};
		availableBotNames.forEach((name) => {
			const startMsg = chatBots.bots[name].responses.start;
			init[name] = [
				{ id: crypto.randomUUID(), sender: "bot", message: startMsg },
			];
		});
		return init;
	});
	const [chatMessages, setChatMessages] = useState(
		botsMessages[availableBotNames[0]] ?? [],
	);
	return (
		<div className={styles.homeWrapper}>
			<Menu
				availableBotNames={availableBotNames}
				setBotsMessages={setBotsMessages}
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
			/>
			<Chat chatMessages={chatMessages} setChatMessages={setChatMessages} />
		</div>
	);
}
export default Home;
