// menu.jsx
// this is the contact menu
// you can add / remove bots or search in the contacts

import { useState, useRef, useEffect } from "react";
import styles from "./menu.module.css";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import chatBots from "../../home/chat/chatBotRespones/chatBots.json";
import addSymbolBlack from "../../../assets/addSymbolBlack.png";
import addSymbolWhite from "../../../assets/addSymbolWhite.png";
import { getTextColor } from "../../settings/colorHelper";

function Menu({
	baseColor,
	availableBotNames,
	setBotsMessages,
	chatMessages,
	currentBot,
	setCurrentBot,
}) {
	// list with added bots, saved in localStorage
	const [botList, setBotList] = useLocalStorage("botList", [
		{ name: "Intro-Bot" },
	]);

	// text in the searchBar
	const [searchText, setSearchText] = useState("");
	// variable to determine if the search mode or the add mode needs to be used
	const [isAdding, setIsAdding] = useState(false);
	// const to add a new bot
	const [newBotName, setNewBotName] = useState("");
	//ref for input to e.g. focus the cursor
	const inputRef = useRef(null);

	// search function
	function handleSearch(event) {
		if (isAdding) return; // look if "+" has been pressed, else search for the value of the input | if add mode is on
		setSearchText(event.target.value.toLowerCase()); // set the search variable
	}

	// triggered by "+" - button
	// add a new bot
	function handleNewBot() {
		if (filteredAvailableBots.length !== 0) {
			setIsAdding(true); // set the adding mode to true => no more searching (handleSearch() is deactivated)
			setNewBotName(""); // reset newBotName
			setSearchText(""); // reset searchText
			inputRef.current.focus(); // focus on the input field
		}
	}

	// user is done typing => handle enter
	function handleKeyDown(event) {
		if (event.key === "Enter" && isAdding && newBotName.trim() !== "") {
			//when enter is pressed, adding mode is on and newBotName/value of input field is ""
			const name = newBotName.trim();

			// look if the bot is available in the JSON ChatBot list
			if (availableBotNames.includes(name)) {
				setBotList([...botList, { name: newBotName.trim() }]); // add the new bot to the botList array
			}

			//reset
			setNewBotName(""); // reset the input field value
			setIsAdding(false); // set the isAdding - mode to false, so the user can search again
			setSearchText(""); // also reset the searchText so both searchText and newBotName is ""
		}
		if (event.key === "Escape" && isAdding) {
			// abort and reset
			setNewBotName("");
			setIsAdding(false);
			setSearchText("");
		}
	}
	// filter for available bots and show bots, who havent been added yet

	const filteredAvailableBots = availableBotNames
		.filter((bot) => bot.toLowerCase().includes(newBotName.toLowerCase()))
		.filter((bot) => !botList.some((b) => b.name === bot))
		.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

	// already added bots , sorted
	const filteredBots = botList
		.filter((bot) => bot.name.toLowerCase().includes(searchText))
		.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

	// function to change the current chat
	function selectBot(newBot) {
		if (!newBot || newBot === currentBot) return;

		// save current chat
		setBotsMessages((prev) => ({
			...prev,
			[currentBot]: chatMessages,
		}));

		// switch bots
		setCurrentBot(newBot);
	}

	// remove bot by pressing the "X"
	function removeBot(botName) {
		//remove from localStorage
		setBotList((prev) => prev.filter((bot) => bot.name !== botName));

		// delete all messages exept first one (start)
		setBotsMessages((prev) => {
			const startMsg = prev[botName]?.[0]; // safe first message
			return {
				...prev,
				[botName]: startMsg ? [startMsg] : [], // keep only the start msg
			};
		});

		// switch to other bot, if the removed bot was active
		if (botName === currentBot) {
			const remaining = botList.filter((b) => b.name !== botName);
			const next = remaining.length ? remaining[0].name : null;
			setCurrentBot(next);
		}
	}

	// variable to get the current text color (based on the baseColor choosen by the user)
	// used for the color of the addingIcon
	const [isTextColorWhite, setIsTextColorWhite] = useState(
		getTextColor(baseColor) === "#ffffff",
	);

	// always update on the change of baseColor
	useEffect(() => {
		setIsTextColorWhite(getTextColor(baseColor) === "#ffffff");
	}, [baseColor]);

	// the li elements under the search bar change wether isAdding is true or false
	// if true then it shows available Bot Names, who havent been added yet
	// if false it shows available Bot Names, who have been added yet
	return (
		<div className={styles.menuContainer}>
			<div className={styles.searchContainer}>
				<input
					ref={inputRef}
					name="input"
					className={styles.chatBotInput}
					type="text"
					placeholder={isAdding ? "Add a new bot..." : "Search"}
					value={isAdding ? newBotName : searchText}
					onChange={(e) => {
						isAdding ? setNewBotName(e.target.value) : handleSearch(e);
					}}
					onKeyDown={handleKeyDown}
				/>
			</div>
			<ul className={styles.chatBotList}>
				{!isAdding ? (
					<li
						className={`${styles.chatBotListItem} ${styles.addBot} ${filteredAvailableBots.length === 0 ? styles.disabled : ""}`}
						onClick={handleNewBot}
						title="Add new Bot"
					>
						{isTextColorWhite ? (
							<img
								src={addSymbolWhite}
								alt="add sign"
								className={styles.addSymbol}
							/>
						) : (
							<img
								src={addSymbolBlack}
								alt="add sign"
								className={styles.addSymbol}
							/>
						)}
						<span className={styles.chatBotName}>Add a new bot</span>
					</li>
				) : (
					""
				)}
				<div className={styles.listWrapper}>
					{isAdding
						? filteredAvailableBots.map((botName) => {
							const botData = chatBots.bots[botName];

							return (
								<li
									key={botName}
									className={styles.chatBotListItem}
									style={{ borderLeft: `6px solid ${botData.color}` }}
									onClick={() => {
										setBotList([...botList, { name: botName }]);
										setIsAdding(false);
										setNewBotName("");
										setSearchText("");
									}}
								>
									<img
										src={`/images/profilePictures/bots/${botData.profilePicture}`}
										alt={botName}
										className={styles.botProfilePicture}
									/>
									<span className={styles.chatBotName}>{botName}</span>
								</li>
							);
						})
						: filteredBots.map((bot) => {
							const botData = chatBots.bots[bot.name];

							return (
								<li
									key={bot.name}
									onClick={() => selectBot(bot.name)}
									className={`${styles.chatBotListItem} ${bot.name === currentBot ? styles.currentBot : ""
										}`}
								>
									<img
										src={`/images/profilePictures/bots/${botData.profilePicture}`}
										alt={bot.name}
										className={styles.botProfilePicture}
									/>
									<span className={styles.chatBotName}>{bot.name}</span>
									<span
										className={styles.remove}
										onClick={(e) => {
											e.stopPropagation();
											removeBot(bot.name);
										}}
									>
										×
									</span>
								</li>
							);
						})}
				</div>
			</ul>
		</div>
	);
}

export default Menu;
