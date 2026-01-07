// ../../../components/home/settingslogo/settingsLogo.jsx
// ascii logo used in every site
import styles from "./logo.module.css";

const asciiLogo = `
.__             .__         .__            __   
|__|__  __ ____ |  |   ____ |  |__ _____ _/  |_ 
|  \\  \\/ // __ \\|  | _/ ___\\|  |  \\\\__  \\\\   __\\
|  |\\   /\\  ___/|  |_\\  \\___|   Y  \\/ __ \\|  |  
|__| \\_/  \\___  >____/\\___  >___|  (____  /__|  
              \\/          \\/     \\/     \\/      
`;

export default function Logo() {
	//returns a pre element for ascii art
	return <pre className={styles.logo}>{asciiLogo}</pre>;
}
