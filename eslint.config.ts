import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

import pluginVitest from '@vitest/eslint-plugin';
import oxlint from 'eslint-plugin-oxlint';
// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup
import pluginPlaywright from 'eslint-plugin-playwright';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'src/shared/ui/shadcn/**'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  ...oxlint.configs['flat/recommended'],
  skipFormatting,
  {
    plugins: {
      vue: pluginVue,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      semi: ['warn', 'always'],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      'no-multiple-empty-lines': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-const': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^vue', '^pinia', '@tanstack', 'vee-validate', '@vee-validate'],
            ['@app/', '@pages/', '@widgets/', '@features/', '@entities/', '@shared/', '.vue'],
            ['.js', '.ts'],
            ['.css'],
          ],
        },
      ],
    },
  },
);
