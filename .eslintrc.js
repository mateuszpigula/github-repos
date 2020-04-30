module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		"@typescript-eslint/no-var-requires": 0,
		"@typescript-eslint/no-non-null-assertion": 0,
		"@typescript-eslint/camelcase": 0,
	},
};
