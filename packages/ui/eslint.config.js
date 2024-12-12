import { reactLint } from '@repo/eslint-config/react';
import tsEslint from 'typescript-eslint';

/** @type {import("eslint").Linter.Config} */
export default tsEslint.config(reactLint, {
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json'],
    },
  },
});
