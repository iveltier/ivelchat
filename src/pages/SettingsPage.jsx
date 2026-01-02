import Settings from "../components/settings/settings.jsx";
function SettingsPage({
	enableTimestamp,
	setEnableTimestamp,
	isMonospace,
	setIsMonospace,
	enable24hFormat,
	setEnable24hFormat,
	currentUserPicture,
	setCurrentUserPicture,
}) {
	return (
		<Settings
			enable24hFormat={enable24hFormat}
			setEnable24hFormat={setEnable24hFormat}
			enableTimestamp={enableTimestamp}
			setEnableTimestamp={setEnableTimestamp}
			isMonospace={isMonospace}
			setIsMonospace={setIsMonospace}
			currentUserPicture={currentUserPicture}
			setCurrentUserPicture={setCurrentUserPicture}
		/>
	);
}
export default SettingsPage;
