/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const nesting = require("tailwindcss/nesting");
const postcssNesting = require("postcss-nesting");

const config = {
	plugins: [
		nesting(postcssNesting),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
