// actions.js
// here are functions defined for the chat bot requests
export const actions = {
	flipCoin() {
		return Math.random() < 0.5 ? "You got heads!" : "You got tails!";
	},
};
