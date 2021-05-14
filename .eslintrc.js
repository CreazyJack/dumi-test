/*
 * @Description: eslint config
 * @Date: 2021-05-14 14:14:44
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-14 16:16:06
 */

module.exports = {
  extends: [
    'eslint-config-ali/typescript/react',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars-experimental': 2,
  },
};
