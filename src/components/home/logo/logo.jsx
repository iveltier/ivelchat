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
	return <pre className={styles.logo}>{asciiLogo}</pre>;
}
