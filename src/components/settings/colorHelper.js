import { colord } from "colord";

export function generatePalette(base) {
	return [
		base,
		colord(base).lighten(0.15).toHex(), // 2 hell
		colord(base).lighten(0.3).toHex(), // 3 heller
		colord(base).darken(0.15).toHex(), // 4 dunkel
		colord(base).darken(0.3).toHex(), // 5 dunkler
		colord(base).invert().toHex(),
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
