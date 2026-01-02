import Home from "../components/home/home.jsx";
function HomePage({
	enableTimestamp,
	isMonospace,
	enable24hFormat,
	currentUserPicture,
}) {
	return (
		<Home
			enableTimestamp={enableTimestamp}
			isMonospace={isMonospace}
			enable24hFormat={enable24hFormat}
			currentUserPicture={currentUserPicture}
		/>
	);
}
export default HomePage;
