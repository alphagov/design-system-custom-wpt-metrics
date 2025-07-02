const { defineConfig } = require('eslint/config')
const prettier = require('eslint-config-prettier')
const pluginJest = require('eslint-plugin-jest')
const neostandard = require('neostandard')

module.exports = defineConfig([
  ...neostandard({
    noStyle: true
  }),
  {
    files: ['tests/*.js'],
    plugins: {
      jest: pluginJest
    },
    languageOptions: {
      globals: pluginJest.environments.globals.globals
    }
  },
  prettier
])
