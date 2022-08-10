const { resolve } = require('path');
const { PATH_PREFIX, paths } = require('../config/consts');

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  typescript: { reactDocgen: false },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      [`${PATH_PREFIX}${paths.COMPONENTS}`]: resolve(__dirname, '../src/components/'),
      '~config': resolve(__dirname, '../config/'),
    };
    return config;
  },
};
