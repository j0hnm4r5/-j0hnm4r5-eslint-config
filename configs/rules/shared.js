module.exports = {
	extends: [
		`plugin:sonarjs/recommended`,
		`plugin:unicorn/recommended`,
		`plugin:prettier/recommended`,
		`prettier/unicorn`,
	],
	plugins: [`unicorn`, `no-secrets`, `sonarjs`],
	rules: {
		"consistent-return": `off`,
		"import/first": `off`,
		"import/newline-after-import": `off`,
		"no-bitwise": `off`,
		"no-console": `off`,
		"no-plusplus": `off`,
		"no-underscore-dangle": `off`,
		"no-use-before-define": `off`,
		"no-secrets/no-secrets": `error`,
		"prefer-const": `error`,
		"prefer-template": `error`,
		"quotes": [`error`, `backtick`],
		"radix": [`error`, `as-needed`],
		"unicorn/filename-case": `off`,
		"unicorn/no-nested-ternary": `off`,
	},
};