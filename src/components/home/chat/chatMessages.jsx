import styles from "./chatMessages.module.css";
import ChatMessage from "./chatMessage";
import { useEffect, useRef } from "react";
function ChatMessages({ chatMessages }) {
	const chatMessageRef = useRef(null);
	useEffect(() => {
		const containerElem = chatMessageRef.current;
		if (containerElem) {
			containerElem.scrollTop = containerElem.scrollHeight;
		}
	}, [chatMessages]);
	return (
		<div className={styles.chatMessagesContainer} ref={chatMessageRef}>
			<div className={styles.pushContainer}></div>
			{chatMessages.map((chatMessage) => {
				return (
					<ChatMessage
						message={chatMessage.message}
						sender={chatMessage.sender}
						profilePicture={chatMessage.profilePicture}
						isSpinner={chatMessage.isSpinner}
						spinnerData={chatMessage.spinnerData}
						key={chatMessage.id}
					/>
				);
			})}
		</div>
	);
}
export default ChatMessages;
