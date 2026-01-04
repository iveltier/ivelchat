import Home from "../components/home/home.jsx";
function HomePage({
	baseColor,
	enableTimestamp,
	isMonospace,
	enable24hFormat,
	currentUserPicture,
}) {
	return (
		<Home
			baseColor={baseColor}
			enableTimestamp={enableTimestamp}
			isMonospace={isMonospace}
			enable24hFormat={enable24hFormat}
			currentUserPicture={currentUserPicture}
		/>
	);
}
export default HomePage;
