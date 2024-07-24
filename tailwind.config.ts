import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#03a1fb",
					secondary: "#166b9c",
					accent: "#012032",
					neutral: "#011118",
					"base-100": "#eff3f5",
					info: "#654401",
					success: "#02ca4b",
					warning: "#bd490f",
					error: "#ca0241"
				},
				dark: {
					primary: "#03a1fb",
					secondary: "#63b8e9",
					accent: "#cdecfe",
					neutral: "#e6f6fe",
					"base-100": "#011118",
					info: "#fed481",
					success: "#0fbd4f",
					warning: "#f07c42",
					error: "#fd1c63"
				}
			}
		]
	}
} as Config;
