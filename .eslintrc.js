module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Allows the use of modern ECMAScript features
    sourceType: 'module', // Allows the use of imports
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
  ],
  root: true, // Ensures ESLint looks for the configuration file in the root directory
  env: {
    node: true, // Enables Node.js global variables and Node.js scoping
    jest: true, // Enables Jest global variables for testing
  },
  ignorePatterns: ['dist', 'node_modules'], // Ignore build and dependency folders
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn', // Warns about unused variables
    '@typescript-eslint/no-explicit-any': 'off', // Disables the rule that disallows 'any' type
    'prettier/prettier': 'warn', // Ensures that Prettier code style issues are reported as warnings
  },
};
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Allows the use of modern ECMAScript features
    sourceType: 'module', // Allows the use of imports
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint
  ],
  root: true, // Ensures ESLint looks for the configuration file in the root directory
  env: {
    node: true, // Enables Node.js global variables and Node.js scoping
    jest: true, // Enables Jest global variables for testing
  },
  ignorePatterns: ['dist', 'node_modules'], // Ignore build and dependency folders
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn', // Warns about unused variables
    '@typescript-eslint/no-explicit-any': 'off', // Disables the rule that disallows 'any' type
  },
};
