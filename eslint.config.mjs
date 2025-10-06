import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import eslint from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default [
    { ignores: ['**/*.d.ts', '**/coverage', '**/dist', '*.config.ts', '*.config.mjs', '*.config.js'] },
    eslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['**/*.{ts,js}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parser: typescriptParser,
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
            'style': stylistic,
            'import': importPlugin,
        },
        rules: {
            'style/max-len': ['error', { code: 80, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true, ignoreComments: true }],
            'style/indent': ['error', 2],
            'style/semi': ['error', 'always'],
            'style/semi-style': ['error', 'last'],
            'style/quotes': ['error', 'double', { allowTemplateLiterals: 'always', avoidEscape: false }],
            'style/quote-props': ['error', 'as-needed'],
            'style/jsx-quotes': ['error', 'prefer-double'],
            'style/comma-dangle': ['error', 'always-multiline'],
            'style/comma-style': ['error', 'last'],
            'style/object-curly-spacing': ['error', 'always'],
            'style/jsx-closing-bracket-location': ['error', {
                nonEmpty: 'tag-aligned',
                selfClosing: 'after-props',
            }],
            'style/arrow-parens': ['error', 'always'],
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'import/order': ['error', {
                "groups": [
                    ["builtin", "external"], ["internal", "parent", "sibling", "index"], "unknown"
                ],
                "pathGroups": [
                    {
                        "pattern": "(@/store/**)|(@/types/**)|(@/utils/**)",
                        "group": "unknown",
                    },
                    {
                        "pattern": "@/views/**",
                        "group": "unknown",
                        "position": "after",
                    },
                    {
                        "pattern": "@/components/**",
                        "group": "unknown",
                        "position": "after",
                    },
                ],
                "newlines-between": 'always',
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": false
                }
            }],
            'import/newline-after-import': ['error', { count: 1 }],
            'import/no-unresolved': 'off',
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: typescriptParser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: globals.browser,
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
            'style': stylistic,
            'import': importPlugin,
        },
        rules: {
            'vue/script-setup-uses-vars': 'error',
            'vue/multi-word-component-names': 'off',
            'style/max-len': ['error', { code: 80, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true, ignoreComments: true }],
            'style/indent': ['error', 2],
            'style/semi': ['error', 'always'],
            'style/quotes': ['error', 'double', { allowTemplateLiterals: 'always', avoidEscape: false }],
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'import/order': ['error', {
                "groups": [
                    ["builtin", "external"], ["internal", "parent", "sibling", "index"], "unknown"
                ],
                "pathGroups": [
                    {
                        "pattern": "(@/store/**)|(@/types/**)|(@/utils/**)",
                        "group": "unknown",
                    },
                    {
                        "pattern": "@/views/**",
                        "group": "unknown",
                        "position": "after",
                    },
                    {
                        "pattern": "@/components/**",
                        "group": "unknown",
                        "position": "after",
                    },
                ],
                "newlines-between": 'always',
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": false
                }
            }],
            'import/newline-after-import': ['error', { count: 1 }],
            'import/no-unresolved': 'off',
        },
    },
];
