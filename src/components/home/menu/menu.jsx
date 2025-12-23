// menu.jsx
// this is the contact menu
// you can add bots or search in the contacts

import { useState, useRef } from "react";
import styles from "./menu.module.css";
import chatBots from "../chat/chatBotRespones/chatBots.json";
function Menu() {
	const [botList, setBotList] = useState([{ name: "simpleBot" }]);
	const [searchText, setSearchText] = useState("");
	const [isAdding, setIsAdding] = useState(false);
	const [newBotName, setNewBotName] = useState("");
	const inputRef = useRef(null);

	// search function
	function handleSearch(event) {
		if (isAdding) return; // look if "+" has been pressed, else search for the value of the input
		setSearchText(event.target.value.toLowerCase());
	}

	// triggered by "+" - button
	function handleNewBot() {
		setIsAdding(true); // set the adding mode to true => no more searching (handleSearch() is deactivated)
		setNewBotName(""); // reset newBotName
		setSearchText(""); // reset searchText
		inputRef.current.focus(); // focus on the input field
	}

	// user is done typing => handle enter
	function handleKeyDown(event) {
		if (event.key === "Enter" && isAdding && newBotName.trim() !== "") {
			//when enter is pressed, adding mode is on and newBotName/value of input field is ""
			const name = newBotName.trim();

			// look if the bot is available in the JSON ChatBot list
			if (chatBots.bots.includes(name)) {
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
	// get the available bot names from JSON
	const availableBotNames = Object.keys(chatBots.bots);

	// filter for available bots and show bots, who havent been added yet
	const filteredAvailableBots = availableBotNames
		.filter((bot) => bot.toLowerCase().includes(newBotName.toLowerCase()))
		.filter((bot) => !botList.some((b) => b.name === bot));

	// filtered list of added bots
	const filteredBots = botList.filter(
		(bot) => bot.name.toLowerCase().includes(searchText), // handleSearch() provides searchText
	);

	return (
		<div className={styles.menuContainer}>
			<input
				ref={inputRef}
				name="input"
				className={styles.chatBotInput}
				type="text"
				placeholder={isAdding ? "Add a new bot..." : "Search"}
				value={isAdding ? newBotName : searchText}
				onChange={(e) => {
					if (isAdding) setNewBotName(e.target.value);
					else handleSearch(e);
				}}
				onKeyDown={handleKeyDown}
			/>

			<button
				type="button"
				onClick={handleNewBot}
				className={styles.chatBotAddBtn}
			>
				+
			</button>

			<ul className={styles.chatBotList}>
				{isAdding
					? filteredAvailableBots.map((bot) => (
						<li
							key={bot}
							className={styles.chatBotListItem}
							onClick={() => {
								setBotList([...botList, { name: bot }]);
								setIsAdding(false);
								setNewBotName("");
								setSearchText("");
							}}
						>
							{bot}
						</li>
					))
					: filteredBots.map((bot) => (
						<li key={bot.name} className={styles.chatBotListItem}>
							{bot.name}
						</li>
					))}
			</ul>
		</div>
	);
}

export default Menu;
