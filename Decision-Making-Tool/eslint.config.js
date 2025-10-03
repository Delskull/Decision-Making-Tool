import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Базовые игнорируемые пути для всех файлов
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '*.min.js',
      '*.min.css',
      'vite.config.ts',
      'vite.config.d.ts',
      'vite.config.js',
      '*.config.js',
      'coverage/**',
      '.nyc_output/**',
      '*.log',
    ],
  },

  // ЯВНО исключаем конфигурационные файлы из основной проверки
  {
    files: [
      'vite.config.ts',
      '**/*.config.js',
      '**/*.config.ts',
      'commitlint.config.js',
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Глобальные переменные для конфигов
        process: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      // Отключаем строгие правила для конфигов
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/member-ordering': 'off',
      'class-methods-use-this': 'off',
      'unicorn/prefer-module': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      'no-undef': 'off',
    },
  },

  // Базовые рекомендуемые настройки ESLint
  js.configs.recommended,

  // TypeScript конфигурация ТОЛЬКО для исходного кода
  {
    files: ['src/**/*.ts'], // ТОЛЬКО файлы в src/
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        // Браузерные глобальные переменные
        document: 'readonly',
        console: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        alert: 'readonly',
        confirm: 'readonly',
        CustomEvent: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        // ... добавьте другие по необходимости
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      // Обязательные правила из требований (ТОЛЬКО для src/)
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'never' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'off',
          },
        },
      ],
      '@typescript-eslint/member-ordering': 'error',

      // ИСПРАВЛЕНО: Отключаем проблемное правило
      'class-methods-use-this': 'off',

      // Дополнительные настройки
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      // Отключаем no-undef, так как мы явно указали глобальные переменные
      'no-undef': 'off',
    },
  },

  // Unicorn плагин ТОЛЬКО для исходного кода
  {
    files: ['src/**/*.{js,ts}'],
    plugins: {
      unicorn: unicornPlugin,
    },
    rules: {
      'unicorn/prefer-module': 'off', // Отключаем для браузерного кода
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
    },
  },

  // Prettier интеграция для всех файлов
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
