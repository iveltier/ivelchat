const availableBotNames = Object.keys(chatBots.bots);
// object {botName : [messages: "..."]}
const [botsMessages, setBotsMessages] = useState(() => {
	const init = {};
	availableBotNames.forEach((name) => {
		init[name];
	});
	return init;
});

// set the current bot | default: first bot
const [currentBot, setCurrentBot] = useState(availableBotNames[0] ?? null);

const [chatMessages, setChatMessages] = useState([
	() => botsMessages[availableBotNames[0]] ?? [],
]);

function selectBot(newBot) {
	if (!newBot || newBot === currentBot) return;

	setBotsMessages((prev) => {
		const updated = {
			...prev,
			[currentBot]: chatMessages,
		};
		setChatMessages(updated[newBot] ?? []);
		setCurrentBot(newBot);
		return updated;
	});
}
