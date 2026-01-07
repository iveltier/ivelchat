// ../../components/home/home.jsx
// /homepage
// component with main chat and menu
import SettingsLogo from "./settingslogo/settingsLogo.jsx";
import Logo from "./logo/logo.jsx";
import Chat from "./chat/chat.jsx";
import styles from "./home.module.css";
import Menu from "./menu/menu.jsx";
import chatBots from "./chat/chatBotRespones/chatBots.json";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";

function Home({
	baseColor,
	enableTimestamp,
	isMonospace,
	enable24hFormat,
	currentUserPicture,
}) {
	// available Bot names from JSON with pre-defined bots
	const availableBotNames = Object.keys(chatBots.bots);

	// objekt with every chat message, stored in localStorage for persistence
	// objekt bots: [bot]: {0:"message", 1:"message"..}
	const [botsMessages, setBotsMessages] = useLocalStorage(
		"botsMessages",
		(() => {
			const init = {};
			// initalizes for every bot a pre defined start message + profilePicture
			availableBotNames.forEach((name) => {
				const startMsg = chatBots.bots[name].responses.start;
				const profilePicture = chatBots.bots[name].profilePicture;
				init[name] = [
					{
						id: crypto.randomUUID(),
						sender: "bot",
						message: startMsg,
						profilePicture: profilePicture,
						timestamp: Date.now(),
					},
				];
			});
			return init;
		})(),
	);

	// const with the currentBot the user is chatting with
	// on start its always the first one in the availableBotNames array
	const [currentBot, setCurrentBot] = useLocalStorage(
		"currentBot",
		availableBotNames[0] ?? null,
	);

	// const with the chatMessages for only the currentBot
	// saves ressources to have an extra smaller array and evolved like this in development
	const chatMessages = botsMessages[currentBot] ?? [];

	// return the chat, menu, settings-logo and ivelchat-logo
	return (
		<>
			<SettingsLogo />
			<Logo />
			<div className={styles.homeWrapper}>
				<Menu
					baseColor={baseColor}
					availableBotNames={availableBotNames}
					setBotsMessages={setBotsMessages}
					chatMessages={chatMessages}
					currentBot={currentBot}
					setCurrentBot={setCurrentBot}
				/>
				<Chat
					chatMessages={chatMessages}
					setBotsMessages={setBotsMessages}
					currentBot={currentBot}
					enableTimestamp={enableTimestamp}
					isMonospace={isMonospace}
					enable24hFormat={enable24hFormat}
					currentUserPicture={currentUserPicture}
				/>
			</div>
		</>
	);
}

export default Home;
