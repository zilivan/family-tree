
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default tseslint.config(
  // 🔹 Глобальные игноры
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.js',
      'eslint.config.js',
      'prisma.config.ts',
      '.prisma/**'
    ]
  },
  
  // 🔹 Базовая конфигурация для TypeScript файлов
  {
    files: ['src/**/*.ts'],
    
    // Настройки языка
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
    
    // 🔹 Регистрация плагинов (обязательно!)
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin
    },
    
    // 🔹 Правила
    rules: {
      
      // Базовые рекомендации ESLint
      ...js.configs.recommended.rules,
      
      // Рекомендации TypeScript
      ...tseslint.configs.recommended.rules,
      
      // Prettier как правило ESLint
      'prettier/prettier': 'error',
      
      // 🔹 Настройки правил TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }],
      
      // Node.js окружение
      'no-console': 'off',
      
      // Express: разрешаем async в роутах
      '@typescript-eslint/no-misused-promises': ['error', {
        'checksVoidReturn': { 
          'attributes': false ,
          'arguments': false
        }
        
      }],
       'no-undef': 'off',
    }
  }
);