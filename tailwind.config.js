/** @type {import('tailwindcss').Config} */
// Colours are CSS variables (see src/index.css) so the light/dark theme can swap them.
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			fontFamily: {
				primary: ["Inter", "sans-serif"],
				display: ['"Barlow Condensed"', "sans-serif"],
			},
			colors: {
				// Sol Shalom Trading brand
				surface: v("surface"),
				ink: { DEFAULT: v("ink"), soft: v("ink-soft") },
				primary: v("ink"),
				deep: v("deep"),
				accent: { DEFAULT: v("accent"), hover: v("accent-hover") },
				brand: { DEFAULT: "#3FA9AC", aqua: v("aqua"), tint: v("tint") },
				card: v("card"),
				stage: v("stage"),
				line: v("line"),
				grey: {
					DEFAULT: "#919297",
					1: "#D9D9D9",
					2: "#E7E9EB",
					3: "#F5F5F5",
				},
				white: "#fff",
			},
			dropShadow: {
				primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
			},
		},
	},
	plugins: [],
};
