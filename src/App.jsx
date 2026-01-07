// App.jsx
// main component that returns every site

import "./style.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import {
	applyPaletteToCSS,
	generatePalette,
} from "./components/settings/colorHelper.js";

function App() {
	// global variables, which need to be used by many pages (settings)
	// every variable gets stored on the localStorage

	// basecolor for the colorscheme
	const [baseColor, setBaseColor] = useLocalStorage("baseColor", "#c7bdd6");

	// array with every color used in the site, initalised by ./components/settings/colorHelper.js
	const [palette, setPalette] = useState();
	useEffect(() => {
		// generates on start and on change of baseColor a new palette and applies it to the global css variables
		const newPalette = generatePalette(baseColor);
		setPalette(newPalette);
		applyPaletteToCSS(newPalette);
	}, [baseColor]);

	// const used for the timestamp setting
	// enables / disables timestamps on messages
	const [enableTimestamp, setEnableTimestamp] = useLocalStorage(
		"enableTimestamp",
		true,
	);

	// const used for the monospace setting
	// enables / disables the font 'monospace' on messages

	const [isMonospace, setIsMonospace] = useLocalStorage("isMonospace", false);

	// const used for the 24h-Format setting
	// enables / disables 24h - Format for every time display
	const [enable24hFormat, setEnable24hFormat] = useLocalStorage(
		"enable24hFormat",
		true,
	);

	// const used for the current user picture
	// sets the path to the file (../public/images/profilePictures/user/example.png)
	const [currentUserPicture, setCurrentUserPicture] = useLocalStorage(
		"userProfilePicture",
		"/images/profilePictures/user/cookiemonster.jpg",
	);

	// returns the components for the website
	// Routes is used to have links like /homepage or /settings
	// every component has props, if needed, to "transport" the variables like isMonospace where its needed
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route
				path="/homepage"
				element={
					<HomePage
						baseColor={baseColor}
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
						baseColor={baseColor}
						setBaseColor={setBaseColor}
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
