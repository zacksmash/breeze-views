import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginTailwind from 'eslint-plugin-tailwindcss'
import pluginNewLines from 'eslint-plugin-modules-newlines'

export default [
    {
        files: ['/resources/js/**/*.{js,mjs,cjs,ts,vue}']
    },
    {
        ignores: ['*.config.js', 'vendor/*', 'node_modules/*', 'public/*']
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                'route': true,
            },
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser
            }
        }
    },
    {
        plugins: {
            'tailwindcss': pluginTailwind,
            'modules-newlines': pluginNewLines,
        },
        rules: {
            'comma-dangle': ['error', 'always-multiline'],
            'indent': ['error', 2],
            'semi': ['error', 'never'],
            'quotes': ['error', 'single'],
            'brace-style': ['error', '1tbs', {
                'allowSingleLine': true,
            }],
            'object-curly-spacing': [
                'error', 'always',
            ],
            'object-curly-newline': ['error', {
                'ImportDeclaration': {
                    'multiline': true,
                    'minProperties': 3
                },
                'ExportDeclaration': {
                    'multiline': true,
                    'minProperties': 3
                },
            }],
            'sort-imports': ['error', {
                'ignoreCase': false,
                'ignoreDeclarationSort': true,
                'ignoreMemberSort': false,
                'allowSeparatedGroups': true,
            }],
            'no-multiple-empty-lines': ['error', {
                max: 1,
                maxBOF: 0,
                maxEOF: 1,
            }],
            'no-multi-spaces': 'error',
            'no-trailing-spaces': ['error'],

            '@typescript-eslint/no-unused-vars': 'off',

            'modules-newlines/import-declaration-newline': 'warn',
            'modules-newlines/export-declaration-newline': 'warn',

            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/enforces-negative-arbitrary-values': 'warn',
            'tailwindcss/enforces-shorthand': 'warn',
            'tailwindcss/migration-from-tailwind-2': 'off',
            'tailwindcss/no-arbitrary-value': 'off',
            'tailwindcss/no-custom-classname': 'off',
            'tailwindcss/no-contradicting-classname': 'error',

            'vue/no-deprecated-slot-attribute': 'off',
            'vue/html-indent': [
                'error', 2, {
                    'attribute': 1,
                    'baseIndent': 1,
                    'closeBracket': 0,
                    'alignAttributesVertically': true,
                }
            ],
            'vue/script-indent': ['error', 2],
            'vue/multiline-html-element-content-newline': ['error', {
                'ignoreWhenEmpty': true,
                'ignores': ['pre', 'textarea'],
                'allowEmptyLines': false,
            }],
            'vue/max-attributes-per-line': [
                'error', {
                    'singleline': 2,
                    'multiline': 1,
                },
            ],
            'vue/first-attribute-linebreak': ['error', {
                'singleline': 'ignore',
                'multiline': 'below',
            }],
            'vue/no-reserved-component-names': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/order-in-components': ['error'],
            'vue/attributes-order': ['error', {
                'alphabetical': false,
            }],
            'vue/no-v-text-v-html-on-component': 'off',
            'vue/padding-line-between-tags': ['error', [{
                'blankLine': 'always',
                'prev': '*',
                'next': '*'
            }, ]],
            'vue/html-self-closing': ['error', {
                'html': {
                    'void': 'never',
                    'normal': 'always',
                    'component': 'always',
                },
                'svg': 'always',
                'math': 'always',
            }],
            'vue/html-closing-bracket-newline': ['error', {
                'singleline': 'never',
                'multiline': 'always',
                'selfClosingTag': {
                    'singleline': 'never',
                    'multiline': 'always',
                },
            }],
            'vue/singleline-html-element-content-newline': ['error', {
                'ignoreWhenNoAttributes': true,
                'ignoreWhenEmpty': true,
            }],
        }
    }
];
