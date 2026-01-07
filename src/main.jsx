// main.jsx
// react initalisation for the website
// the "root" - element gets created
// and the BrowserRouter (used for Routes) and the App component gets returned

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
