import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import stylisticTs  from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
       parser: parserTs,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic/ts': stylisticTs,
      '@stylistic': stylistic,
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
      '@stylistic/function-call-spacing': ["error", "never"],
      '@stylistic/semi-spacing': "error",
      '@stylistic/space-before-blocks': "error",

    },
  },
)
