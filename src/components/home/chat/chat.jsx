import { useState } from "react";
import ChatInput from "./chatInput.jsx";
import ChatMessages from "./chatMessages.jsx";
function Chat() {
	const [chatMessages, setChatmessages] = useState([
		{ message: "Hello, how can I help you?", sender: "bot", id: "id1" },
	]);

	return (
		<>
			<ChatInput
				chatMessages={chatMessages}
				setChatmessages={setChatmessages}
			/>
			<ChatMessages chatMessages={chatMessages} />
		</>
	);
}
export default Chat;
