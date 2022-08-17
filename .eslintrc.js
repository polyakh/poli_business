const OFF = "off";
const WARNING = "warn";
const ERROR = 2;

module.exports = {
  extends: ["plugin:storybook/recommended", "next", "next/core-web-vitals", "eslint:recommended"],
  rules: {
    quotes: [ERROR, "double"],
  },
  overrides: [
    {
      files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      rules: {
        // example of overriding a rule
        "storybook/hierarchy-separator": "error",
      },
    },
  ],
};
