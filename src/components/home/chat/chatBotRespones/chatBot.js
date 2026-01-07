// components/home/chat/chatBotRespones/chatBot.js
// manages the given user message and returns the bot response

import { actions } from "./actions.js"; // file with js code for chat bot responses
import chatBots from "./chatBots.json"; // response JSON for diffrent chat bots with diffrent functions
export function getBotResponse(message, botName) {
	const bot = chatBots.bots[botName];
	const text = message.toLowerCase().trim();
	const botResponses = bot.responses;

	// check if the user message directly coresponses to the given chat bot response
	let response = botResponses[text];

	if (!response) {
		const key = Object.keys(botResponses).find((k) => text.includes(k));
		response = botResponses[key];
	}

	if (!response) return botResponses["default"]; // else return default response

	if (typeof response === "object" && response.action) {
		//check if the response should be an actions => use the actions.js file
		const fn = actions[response.action];
		return fn(message);
	}

	return response;
}
