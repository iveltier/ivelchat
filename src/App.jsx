import "./style.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
function App() {
	const [enableTimestamp, setEnableTimestamp] = useLocalStorage(
		"enableTimestamp",
		true,
	);
	const [isMonospace, setIsMonospace] = useLocalStorage("isMonospace", false);
	const [enable24hFormat, setEnable24hFormat] = useLocalStorage(
		"enable24hFormat",
		true,
	);
	const [currentUserPicture, setCurrentUserPicture] = useLocalStorage(
		"userProfilePicture",
		"/images/profilePictures/user/cookiemonster.jpg",
	);
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route
				path="/startseite"
				element={
					<HomePage
						enableTimestamp={enableTimestamp}
						isMonospace={isMonospace}
						enable24hFormat={enable24hFormat}
						currentUserPicture={currentUserPicture}
					/>
				}
			/>
			<Route
				path="/settings"
				element={
					<SettingsPage
						enableTimestamp={enableTimestamp}
						setEnableTimestamp={setEnableTimestamp}
						isMonospace={isMonospace}
						setIsMonospace={setIsMonospace}
						enable24hFormat={enable24hFormat}
						setEnable24hFormat={setEnable24hFormat}
						currentUserPicture={currentUserPicture}
						setCurrentUserPicture={setCurrentUserPicture}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
