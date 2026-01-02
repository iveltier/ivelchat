import Settings from "../components/settings/settings.jsx";
function SettingsPage({
	setIsMonospace,
	currentUserPicture,
	setCurrentUserPicture,
}) {
	return (
		<Settings
			setIsMonospace={setIsMonospace}
			currentUserPicture={currentUserPicture}
			setCurrentUserPicture={setCurrentUserPicture}
		/>
	);
}
export default SettingsPage;
