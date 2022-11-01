module.exports = {
  "stories": [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    // "babelModeV7": true
  },
  // viteFinal: (config, { configType }) => {
  //   if (configType === 'PRODUCTION') {
  //     config.base = '/desafio-sprint-5'
  //   }
  //   return config
  // }
}
  // babelDefault: async () => {
  //   return {
  //     compact: true,
  //     presets: ["@babel/preset-env", "@babel/preset-react"],
  //   };
  // },
