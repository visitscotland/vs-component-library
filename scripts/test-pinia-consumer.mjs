import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// Run against a Nuxt site after yalc add and yarn install, using Node 24.
const root = resolve(process.argv[2] || '.');
const require = createRequire(resolve(root, 'package.json'));
const libraryRoot = resolve(dirname(require.resolve('@visitscotland/component-library/components')), '../..');
const libraryRequire = createRequire(resolve(libraryRoot, 'package.json'));
const piniaPath = require.resolve('pinia');
assert.equal(libraryRequire.resolve('pinia'), piniaPath, 'Host and library must resolve one Pinia');
assert.match(require('pinia/package.json').version, /^4\./);
const { createPinia } = await import(pathToFileURL(piniaPath));
const { createSSRApp, h } = require('vue');
const { renderToString } = require('vue/server-renderer');
// Resolve the import condition, not the CommonJS bundle, for Nuxt's ESM path.
const pkg = libraryRequire('./package.json');
const { VsMediaCaption } = await import(pathToFileURL(resolve(libraryRoot, pkg.exports['./components'].import)));
const { default: useConfigStore } = await import(pathToFileURL(resolve(root, 'stores/configStore.ts')));

async function renderRequest(label) {
    const pinia = createPinia();
    const seen = [];
    pinia.use(({ store }) => { seen.push(store.$id); });
    pinia.state.value = {
        video: { videos: { clip: { videoId: 'clip', videoDurationMsg: label } } },
    };
    const app = createSSRApp({ render: () => h(VsMediaCaption, { videoId: 'clip' }) });
    app.use(pinia);
    const config = useConfigStore(pinia);
    config.labels = { migration: { caption: label } };
    assert.equal(config.getLabel('migration', 'caption'), label);
    const html = await renderToString(app);
    assert.ok(seen.includes('video'), 'Library store must receive host plugins');
    assert.ok(html.includes(label), 'Library must read host SSR payload state');
    return { html, pinia };
}

const [first, second] = await Promise.all([renderRequest('FIRST_REQUEST'), renderRequest('SECOND_REQUEST')]);
assert.notEqual(first.pinia, second.pinia);
assert.ok(!first.html.includes('SECOND_REQUEST'));
assert.ok(!second.html.includes('FIRST_REQUEST'));
console.log('PASS: shared Pinia 4, host plugins, CMS labels, SSR payload and concurrent request isolation:', root);
