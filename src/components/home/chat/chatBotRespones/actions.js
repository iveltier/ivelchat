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
	currentTime() {
		return `${new Date().toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		})} or
		${new Date().toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		})}`;
	},
	songRec() {
		const songs = [
			"🎵 'Bohemian Rhapsody' – Queen",
			"🎵 'Here Comes the Sun' – The Beatles",
			"🎵 'Good as Hell' – Lizzo",
			"🎵 'Judas' – Lady Gaga",
			"🎵 'departure!' – Masatoshi Ono",
			"🎵 'der, Die, Das' – die Super-duper-Band ",
			"🎵 'Aperol Spritz' – Vincent Gross",
			"🎵 'Der Käfer' – Wizo",
			"🎵 'Credit card debt' – Peter Griffin & Glenn Quagmire",
			"🎵 'On Top of the World' – Imagine Dragons",
		];
		return songs[Math.floor(Math.random() * songs.length)];
	},

	tellJoke() {
		const jokes = [
			"Why are mountains so funny? They’re hill areas.",
			"I told my wife she was drawing her eyebrows too high. She looked surprised.",
			"I threw a boomerang a few years ago. I now live in constant fear.",
			"How do you call a straight boomerang? A stick.",
			"Parallel lines have so much in common. It's a shame they'll never meet.",
		];
		return jokes[Math.floor(Math.random() * jokes.length)];
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
