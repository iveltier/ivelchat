// ../../../components/home/chat/chat.jsx
// chat container for input & messages
import styles from "./chat.module.css";
import ChatInput from "./chatInput.jsx";
import ChatMessages from "./chatMessages.jsx";

function Chat({
	chatMessages,
	setBotsMessages,
	currentBot,
	enableTimestamp,
	isMonospace,
	enable24hFormat,
	currentUserPicture,
}) {
	return (
		<div className={`${styles.appContainer} `}>
			<ChatMessages
				chatMessages={chatMessages}
				currentUserPicture={currentUserPicture}
				enableTimestamp={enableTimestamp}
				isMonospace={isMonospace}
				enable24hFormat={enable24hFormat}
			/>
			<ChatInput
				chatMessages={chatMessages}
				setBotsMessages={setBotsMessages}
				currentBot={currentBot}
			/>
		</div>
	);
}

export default Chat;
