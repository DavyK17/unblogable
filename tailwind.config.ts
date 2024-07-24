import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import { black, lofi } from "daisyui/src/theming/themes";

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
					...lofi,
					"base-100": "#000"
				}
			},
			{
				dark: {
					...black,
					"base-100": "#fff"
				}
			}
		]
	}
} as Config;
