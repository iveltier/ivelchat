// actions.js
// here are functions defined for the chat bot requests
export const actions = {
	flipCoin() {
		return Math.random() < 0.5 ? "You got heads!" : "You got tails!";
	},
	dice() {
		return `You got a ${Math.floor(Math.random() * 6 + 1)}`;
	},
};
