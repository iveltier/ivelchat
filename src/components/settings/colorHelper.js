import { colord } from "colord";

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

/* ---------- Text-Farben ---------- */
export function getTextColor(bg) {
	return colord(bg).isDark() ? "#ffffff" : "#000000";
}

/** Subtile Schriftfarbe für Placeholder / Untertitel */
export function getSubTextColor(bg) {
	return colord(bg).isDark()
		? "#a3a3a3" // helles Grau bei dunklem Hintergrund
		: "#6c6c6c"; // mittel-grau bei hellem Hintergrund
}

export function applyPaletteToCSS(palette) {
	const root = document.documentElement;
	palette.forEach((color, i) =>
		root.style.setProperty(`--theme-color-${i + 1}`, color),
	);

	const mainText = getTextColor(palette[0]);
	const subText = getSubTextColor(palette[0]);

	root.style.setProperty("--theme-text-color", mainText);
	root.style.setProperty("--theme-sub-text-color", subText);
}
