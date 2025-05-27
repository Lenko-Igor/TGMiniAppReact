import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import stylisticTs  from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      react.configs.recommended,
      jsxA11y.configs.recommended,
      js.configs.recommended, 
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}', '*.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: parserTs,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parserOptions: {
          project: ['./tsconfig.json'],
        },
      },
    ],
    plugins: {
      'react': react,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic/ts': stylisticTs,
      '@stylistic': stylistic,
      'react-x': reactX,
      'react-dom': reactDom,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/space-in-parens': ["error", "never"],
      '@stylistic/array-bracket-spacing': ["error", "never"],
      '@stylistic/arrow-spacing': ["error", { "before": true, "after": true }],
      '@stylistic/block-spacing': ["error", "never"],
      '@stylistic/comma-spacing': ["error", { "before": false, "after": true }],
      '@stylistic/comma-dangle': ["only-multiline"],
      '@stylistic/function-call-spacing': ["error", "never"],
      '@stylistic/semi-spacing': "error",
      '@stylistic/space-before-blocks': "error",
      '@typescript-eslint/no-explicit-any': "off",
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      ...reactX.configs['recommended-typescript'].rules,
      ...reactDom.configs.recommended.rules,
    },
  },
)
