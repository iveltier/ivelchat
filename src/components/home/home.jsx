import Chat from "./chat/chat.jsx";
import styles from "./home.module.css";
import Menu from "./menu/menu.jsx";
function Home() {
	return (
		<div className={styles.homeWrapper}>
			<Menu />
			<Chat />
		</div>
	);
}
export default Home;
