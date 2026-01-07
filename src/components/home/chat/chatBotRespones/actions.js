// components/home/chat/chatbotResponses/actions.js
// here are functions defined for the chat bot requests
export const actions = {
	// flip a coin
	flipCoin() {
		return Math.random() < 0.5 ? "You got heads!" : "You got tails!";
	},
	// roll a dice
	dice() {
		return `You got a ${Math.floor(Math.random() * 6 + 1)}`;
	},
	// fetch a quote
	async fetchQuote(userMsg) {
		const topic = userMsg.replace(/^(quotes|quote|zitat)\s*/i, "").trim();
		if (!topic)
			return "Please add a topic after the keyword, e.g. quotes life. Type 'list' for every available topic.";

		// check api key
		const key = import.meta.env.VITE_API_NINJAS_KEY;
		if (!key) {
			return "There was no API-Key found. Please read the README.md for further help.";
		}

		try {
			const res = await fetch(
				`https://api.api-ninjas.com/v2/quotes?categories=${topic}`,
				{ headers: { "X-Api-Key": key } },
			);
			if (!res.ok) throw new Error("fetch failed");
			const data = await res.json();
			if (!data.length)
				return `No quotes found for “${topic}”. Type 'list' for every available topic.`;
			const { quote, author } = data[0];
			return `“${quote}” — ${author}`;
		} catch (e) {
			console.error(e);
			return "Sorry, I couldn’t fetch a quote right now. Try again later.";
		}
	},
	// fetch a dad joke
	async fetchJoke() {
		// check api key
		const key = import.meta.env.VITE_API_NINJAS_KEY;
		if (!key) {
			return "There was no API-Key found. Please read the README.md for further help.";
		}

		try {
			const res = await fetch(`https://api.api-ninjas.com/v1/dadjokes`, {
				headers: { "X-Api-Key": key },
			});
			if (!res.ok) throw new Error("fetch failed");
			const data = await res.json();
			if (!data.length) return `No dad jokes found. You got lucky!`;
			const { joke } = data[0];

			return `${joke}`;
		} catch (e) {
			console.error(e);
			return `No dad jokes found. You got lucky!`;
		}
	},
};
