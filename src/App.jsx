import "./style.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import { useState } from "react";
function App() {
	const [isMonospace, setIsMonospace] = useState(false);
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route
				path="/startseite"
				element={<HomePage isMonospace={isMonospace} />}
			/>
			<Route
				path="/settings"
				element={<SettingsPage setIsMonospace={setIsMonospace} />}
			/>
		</Routes>
	);
}

export default App;
