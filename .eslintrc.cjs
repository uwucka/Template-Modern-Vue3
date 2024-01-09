require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'airbnb-base'
  ],
  plugins: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'warn',
    'array-element-newline': ['error', 'consistent'],
    indent: 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', 120],
    'no-unused-vars': 'error',
    semi: ['error', 'never'],
    'no-nested-ternary': 'error',
    'no-empty': 'error',
    'no-return-await': 'error',
    'semi-style': ['error', 'first'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': [
      'warn',
      'never',
      {
        autofix: true,
        ignore: []
      }
    ],
    'vue/attribute-hyphenation': [
      'warn',
      'never',
      {
        ignore: []
      }
    ],
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
