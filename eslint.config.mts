// ESLint flat config setup for Vue 3 + TypeScript project
// Combines Vue, TypeScript, import, Storybook, and Prettier rules

import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from 'eslint-config-prettier/flat'
import js from '@eslint/js'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import { configureVueProject } from '@vue/eslint-config-typescript'

// Enables Vue + TS project awareness (improves type-aware linting)
configureVueProject({ scriptLangs: ['ts', 'tsx', 'js'] })

export default defineConfigWithVueTs(
    // Files and folders to exclude from linting
  	globalIgnores([
		'**/dist/**',
		'**/dist-ssr/**',
		'**/coverage/**',
		'**/node_modules/**',
		'src/components/product-search/**/*',
	]),

	// Base file targeting for linting
    {
		name: 'app/files-to-lint',
		files: ['**/*.{vue,ts,mts,tsx,js}'],
	},

    // Global browser + node globals for app code
    {
        files: ['**/*.{js,ts,vue}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    // Jest test environment globals
    {
        files: ['**/*.spec.*', '**/test/**/*'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },

    // Core ESLint recommended rules for plain JS files
    {
        files: ['**/*.{js,mjs,cjs}'],
        ...js.configs.recommended,
    },

    // Vue + TypeScript recommended rule sets
    vueTsConfigs.recommended,
    ...pluginVue.configs['flat/recommended'],

    // Storybook-specific lint rules
    storybook.configs['flat/recommended'],

    // Disables ESLint rules that conflict with Prettier formatting
    skipFormatting,

    // Project-wide rule overrides (Vue + JS/TS code style rules)
	{
        rules: {
            'vue/attributes-order': 'off',
            'vue/no-unused-vars': 'error',
            'vue/order-in-components': 'error',
            'vue/no-v-html': 'off',
            'vue/component-name-in-template-casing': [
                'error',
                'PascalCase',
                {
                    registeredComponentsOnly: false,
                },
            ],
            'vue/singleline-html-element-content-newline': [
                'error',
                {
                    ignoreWhenNoAttributes: true,
                    ignoreWhenEmpty: true,
                },
            ],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: {
                        max: 1,
                    },
                    multiline: {
                        max: 1,
                    },
                },
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'always',
                    },
                },
            ],
            'template-curly-spacing': 'off',
            'linebreak-style': 'off',
            'no-extra-semi': 'off',
            'no-plusplus': [
                'error',
                {
                    allowForLoopAfterthoughts: true,
                },
            ],
            'no-debugger': 'warn',
            'no-underscore-dangle': 'off',
            'prefer-destructuring': [
                'error',
                {
                    array: false,
                    object: false,
                },
                {
                    enforceForRenamedProperties: false,
                },
            ],
        },
    },

    // Exceptions for config/test files where Node-style imports are allowed
    {
        files: [
            '**/*.config.js',
            '**/*.config.cjs',
            '**/jest.conf.*',
            'babel.config.*',
            '**/test/unit/**/*.js',
            '**/src/utils/**/*.js',
        ],
        rules: {
            '@typescript-eslint/no-require-imports': 'off'
        }
    },
)
