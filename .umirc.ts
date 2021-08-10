/*
 * @Description: 未添加描述
 * @Date: 2021-05-14 14:10:28
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-07-14 17:56:05
 */
import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'dumi-test',
  base: '/dumi-test/',
  mock: {},
  publicPath: './',
  history: { type: 'hash' },
  hash: true,
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false
  },
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site'
  // more config: https://d.umijs.org/config
})
