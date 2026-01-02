import SettingsLogo from "./settingslogo/settingsLogo.jsx";
import Logo from "./logo/logo.jsx";
import Chat from "./chat/chat.jsx";
import styles from "./home.module.css";
import Menu from "./menu/menu.jsx";
import chatBots from "./chat/chatBotRespones/chatBots.json";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";

function Home({
	enableTimestamp,
	isMonospace,
	enable24hFormat,
	currentUserPicture,
}) {
	const availableBotNames = Object.keys(chatBots.bots);

	const [botsMessages, setBotsMessages] = useLocalStorage(
		"botsMessages",
		(() => {
			const init = {};
			availableBotNames.forEach((name) => {
				const startMsg = chatBots.bots[name].responses.start;
				const profilePicture = chatBots.bots[name].profilePicture;
				const timestamp = new Date();
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
	const [currentBot, setCurrentBot] = useLocalStorage(
		"currentBot",
		availableBotNames[0] ?? null,
	);

	const chatMessages = botsMessages[currentBot] ?? [];

	return (
		<>
			<SettingsLogo />
			<Logo />
			<div className={styles.homeWrapper}>
				<Menu
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
