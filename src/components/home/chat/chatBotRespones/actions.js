// actions.js
// here are functions defined for the chat bot requests
export const actions = {
	flipCoin() {
		return Math.random() < 0.5 ? "You got heads!" : "You got tails!";
	},
	dice() {
		return `You got a ${Math.floor(Math.random() * 6 + 1)}`;
	},
	async fetchQuote(userMsg) {
		// Topic extrahieren (alles nach dem Keyword)
		const topic = userMsg.replace(/^(quotes|quote|zitat)\s*/i, "").trim();

		if (!topic)
			return "Please add a topic after the keyword, e.g. *quotes life*.";

		try {
			const res = await fetch(
				`https://api.api-ninjas.com/v2/quotes?categories=${topic}
`,
				{ headers: { "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY } },
			);
			if (!res.ok) throw new Error("fetch failed");
			const data = await res.json(); // Array mit 1 Objekt
			if (!data.length) return `No quotes found for “${topic}”.`;
			const { quote, author } = data[0];
			return `“${quote}” — ${author}`;
		} catch (error) {
			console.error(error);
			return "Sorry, I couldn’t fetch a quote right now. Try again later.";
		}
	},
};
