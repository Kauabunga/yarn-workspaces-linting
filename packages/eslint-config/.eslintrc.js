/*
 * Copyright (c) Glueware Limited, part of the Middleware Group.
 * All rights reserved. This product is protected by copyright and distributed
 * under licenses restricting copying, distribution and decompilation.
 */

module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['import', 'jest', 'no-only-tests', 'prettier'],
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ['**/node_modules/**'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 2,
    camelcase: 0,
    'object-shorthand': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      1,
      {
        devDependencies: ['**/*.test.js'],
      },
    ],
    'no-only-tests/no-only-tests': 2,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'no-use-before-define': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
  },
};
