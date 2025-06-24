/** @type {import("tailwindcss").Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: "var(--ant-font-family)",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				secondary: {
					DEFAULT: "var(--secondary)",
					hover: "var(--secondary-hover)",
				},
				tertiary: "var(--tertiary)",
				card: "var(--card)",
			},
			screens: {
				xl: "1200px",
			},
			boxShadow: {
				container: "var(--shadow-container)",
				icon: "var(--shadow-icon)",
				secondary: "var(--shadow-secondary)",
			},

			keyframes: {
				breathe: {
					"0%, 100%": { transform: "scale(1)", opacity: "1" },
					"50%": { transform: "scale(1.05)", opacity: "0.8" },
				},
				open: {
					"0%": { transform: "rotateX(50deg)" },
					"25%": { transform: "rotateX(-35deg)" },
					"50%": { transform: "rotateX(20deg)" },
					"75%": { transform: "rotateX(-10deg)" },
					"100%": { transform: "rotateX(0)" },
				},
			},
			animation: {
				breathe: "breathe 3s ease-in-out infinite",
				open: "open .9s ease",
			},
		},
	},
	plugins: [],
}
