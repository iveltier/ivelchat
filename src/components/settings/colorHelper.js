import { colord } from "colord";

export function generatePalette(base) {
	return [
		base,
		colord(base).lighten(0.15).toHex(), // 2 hell
		colord(base).lighten(0.3).toHex(), // 3 heller
		colord(base).darken(0.15).toHex(), // 4 dunkel
		colord(base).darken(0.25).toHex(), // 5 dunkler
		colord(base).invert().lighten(0.1).toHex(), // invertet
		colord(base).rotate(180).toHex(), // kontrast
	];
}

export function getTextColor(bg) {
	return colord(bg).isDark() ? "#ffffff" : "#000000";
}

export function applyPaletteToCSS(palette) {
	const root = document.documentElement;
	palette.forEach((color, i) => {
		root.style.setProperty(`--theme-color-${i + 1}`, color);
	});
	root.style.setProperty("--theme-text-color", getTextColor(palette[0]));
}
