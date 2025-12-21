import { useState } from "react";
import ChatInput from "./chatInput.jsx";
import ChatMessages from "./chatMessages.jsx";
function Chat() {
	const [chatMessages, setChatMessages] = useState([
		{ message: "Hello, how can I help you?", sender: "bot", id: "id1" },
	]);

	return (
		<>
			<ChatInput
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
			/>
			<ChatMessages chatMessages={chatMessages} />
		</>
	);
}
export default Chat;
