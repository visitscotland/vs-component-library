/**
 * This file outputs an object for consumption by webpack as its entry config.
 * The object lists components to build and their file paths.
 */

const glob = require('glob');
const path = require('path');

const { camelCase, upperFirst } = require('lodash');

const componentPaths = [
    './src/components/**/*.vue',
    './src/components/**/*.vue',
    './src/components/modules/**/*.vue',
    './src/components/templates/**/*.vue',
    './src/components/examples/**/*.vue',
    './src/custom-components/**/*.vue',
];

const storePattern = './src/components/**/*.store.js';

const components = {
    VsApp: './src/main.js',
};

const normalizePath = (p) => (p.startsWith('./') ? p : `./${p}`);

const itemKey = (basename, store) => `Vs${store ? 'Store' : ''}${upperFirst(camelCase(basename))}`;

componentPaths
    .reduce((accumulator, pattern) => accumulator.concat(glob.sync(pattern)), [])
    .forEach((componentPath) => {
        components[itemKey(path.basename(componentPath, '.vue'))] = normalizePath(componentPath);
    });

glob.sync(storePattern).forEach((storePath) => {
    components[itemKey(path.basename(storePath, '.js'), true)] = normalizePath(storePath);
});

module.exports = components;
