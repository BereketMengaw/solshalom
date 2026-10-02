/** @type {import('tailwindcss').Config} */
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
				ink: { DEFAULT: "#1A2B2C", soft: "#4A5A5B" },
				primary: "#1A2B2C",
				accent: { DEFAULT: "#1F7F82", hover: "#17676A" },
				brand: { DEFAULT: "#3FA9AC", aqua: "#94D4D8", tint: "#EEF8F8" },
				card: "#F4F7F7",
				line: "#DDE6E6",
				grey: {
					DEFAULT: "#919297",
					1: "#D9D9D9",
					2: "#E7E9EB",
					3: "#F5F5F5",
				},
				white: "#fff",
			},
			backgroundImage: {
				hero: 'url("/src/assets/images/hero-bg.png")',
				newsletter: 'url("/src/assets/images/newsletter.png")',
			},
			dropShadow: {
				primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
			},
		},
	},
	plugins: [],
};
