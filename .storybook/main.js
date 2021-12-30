/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2021-12-23 11:41:49
 * @LastEditTime: 2021-12-29 18:32:17
 */
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "staticDirs": ["../public"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "core": {
    "builder": "webpack5"
  }
}