module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ["*.js"],
      options: {
        parser: "babylon",
        printWidth: 80,
        bracketSpacing: true,
      },
    },
  ]
};
