import "./style.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
function App() {
	const [isMonospace, setIsMonospace] = useState(false);
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
						isMonospace={isMonospace}
						currentUserPicture={currentUserPicture}
					/>
				}
			/>
			<Route
				path="/settings"
				element={
					<SettingsPage
						setIsMonospace={setIsMonospace}
						currentUserPicture={currentUserPicture}
						setCurrentUserPicture={setCurrentUserPicture}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
