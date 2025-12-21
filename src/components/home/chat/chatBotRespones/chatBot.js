// chatBot
import { actions } from "./actions.js"; // file with js code for chat bot responses
import responses from "./chatBotRespones.json"; // response JSON for diffrent chat bots with diffrent functions
export function getBotResponse(message, botName) {
	const bot = responses[botName];
	const text = message.toLowerCase().trim();

	// check if the user message directly coresponses to the given chat bot response
	let response = bot[text];

	if (!response) {
		const key = Object.keys(bot).find((k) => text.includes(k));
		response = bot[key];
	}

	if (!response) return bot["default"]; // else return default response

	if (typeof response === "object" && response.action) {
		//check if the response should be an actions => use the actions.js file
		const fn = actions[response.action];
		return fn();
	}

	return response;
}
