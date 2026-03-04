
// backend/eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default tseslint.config(
  // Игноры
  {
    ignores: ['dist/**', 'node_modules/**', '*.js', 'eslint.config.js']
  },
  
  // Основная конфигурация
  {
    files: ['src/**/*.ts'],
    
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        ...globals.node,
        ...globals.es2020
      }
    },
    
    plugins: {
      prettier: prettierPlugin
    },
    
    rules: {
      // Базовые правила
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      
      // Prettier
      'prettier/prettier': 'error',
      
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }],
      
      // Node.js
      'no-console': 'off',
      
      // Express: async в роутах
      '@typescript-eslint/no-misused-promises': ['error', {
        'checksVoidReturn': { 'attributes': false }
      }]
    }
  }
);