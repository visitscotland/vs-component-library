/**
 * Babel config used only by Jest (via babel-jest).
 *
 * Purpose:
 * - Transpiles modern JS so Jest can execute it in a Node environment
 * - Only applies during unit tests (not used by Vite or production builds)
 *
 * - Required for current Jest + Vue SFC test setup
 * - Vue files are handled separately by @vue/vue3-jest
 *
 * Can be removed when:
 * - Migrating tests to Vitest, or
 * - Removing Jest / babel-jest from the project
 */

module.exports = {
    presets: ['@babel/preset-env'],
    ignore: [/node_modules\/(?!bootstrap-vue-next)/],
    env: {
        test: {
            presets: ['@babel/preset-env'],
        },
    },
};