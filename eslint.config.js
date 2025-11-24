// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // Globalne ignorowane katalogi
    {
        ignores: ['node_modules', 'dist', 'dist-ssr', 'build', 'coverage'],
    },

    // Rekomendacje JS od ESLinta
    js.configs.recommended,

    // Rekomendacje TypeScript (typescript-eslint)
    ...tseslint.configs.recommended,

    // Główny config dla plików źródłowych
    {
        files: ['src/**/*.{ts,tsx,js,jsx}'],

        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooks,
            prettier: prettierPlugin,
        },

        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },

        settings: {
            react: { version: 'detect' },
        },

        rules: {
            // React + React Hooks
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // Integracja z Prettierem (ostrzeżenia, nie błędy)
            'prettier/prettier': 'warn',

            // Nie wymagamy importu Reacta w każdym pliku JSX/TSX (nowy JSX transform)
            'react/react-in-jsx-scope': 'off',

            // TS: nieużywane zmienne/argumenty mogą zaczynać się od "_" (np. _index)
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],

            // Nie wymagamy jawnych typów na granicach modułów (czasem za głośne)
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
    },

    // Wyłącza reguły ESLinta konfliktujące z Prettierem
    prettierConfig,
];