module.exports = {
	extends: [
		`airbnb/hooks`,
		`plugin:react/recommended`
	],
	plugins: [`react`],
	rules: {
		"react/display-name": `off`,
		"react/jsx-props-no-spreading": `off`,
		"react/no-array-index-key": `off`,
		"react/prop-types": `off`,
	},
};
