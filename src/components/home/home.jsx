import { useState } from "react";
import Logo from "./logo/logo.jsx";
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
			const profilePicture = chatBots.bots[name].profilePicture;
			init[name] = [
				{
					id: crypto.randomUUID(),
					sender: "bot",
					message: startMsg,
					profilePicture: profilePicture,
					timestamp: new Date(),
				},
			];
		});
		return init;
	});
	const [chatMessages, setChatMessages] = useState(
		botsMessages[availableBotNames[0]] ?? [],
	);
	// set the current bot | default: first bot
	const [currentBot, setCurrentBot] = useState(availableBotNames[0] ?? null);
	return (
		<>
			<Logo />
			<div className={styles.homeWrapper}>
				<Menu
					availableBotNames={availableBotNames}
					setBotsMessages={setBotsMessages}
					chatMessages={chatMessages}
					setChatMessages={setChatMessages}
					currentBot={currentBot}
					setCurrentBot={setCurrentBot}
				/>
				<Chat
					chatMessages={chatMessages}
					setChatMessages={setChatMessages}
					currentBot={currentBot}
				/>
			</div>
		</>
	);
}
export default Home;
