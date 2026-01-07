// helper to generate a Palette
import { colord } from "colord";

// generates a palette based on a choosen color
export function generatePalette(base) {
	return [
		base,
		colord(base).lighten(0.15).toHex(), // 2 hell
		colord(base).lighten(0.2).toHex(), // 3 heller
		colord(base).lighten(0.3).toHex(), // 4 sehr hell
		colord(base).darken(0.1).toHex(), // 5 dunkel
		colord(base).darken(0.15).toHex(), // 6 dunkler
		colord(base).invert().toHex(), // 7 invertiert
		colord(base).lighten(0.2).alpha(0.95).toHex(), // 8 3 in hell
	];
}

// text colors
// chooses if the text color is better readable when white or black
export function getTextColor(bg) {
	return colord(bg).isDark() ? "#ffffff" : "#000000";
}

// sub color
export function getSubTextColor(bg) {
	return colord(bg).isDark()
		? "#a3a3a3" // light gray
		: "#6c6c6c"; // semi dark gray
}

// applies the generated palette to global css variables
export function applyPaletteToCSS(palette) {
	const root = document.documentElement;
	palette.forEach((color, i) =>
		// e.g. var(--theme-color-1)
		root.style.setProperty(`--theme-color-${i + 1}`, color),
	);

	const mainText = getTextColor(palette[0]);
	const subText = getSubTextColor(palette[0]);

	// e.g. color: var(--theme-text-color);
	root.style.setProperty("--theme-text-color", mainText);
	root.style.setProperty("--theme-sub-text-color", subText);
}
