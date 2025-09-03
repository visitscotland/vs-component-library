import { setup } from '@storybook/vue3-vite';
import { createBootstrap } from 'bootstrap-vue-next';

import '@/assets/fonts/fonts.scss';
import '@/styles/core.styles.scss';
import pinia from '@/stores/index.ts';
import mitt from 'mitt';

setup(app => {
    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;
    app.provide('emitter', emitter);
    app.use(pinia());
    app.use(createBootstrap());
});

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            options: {
                grey: { name: 'Grey', value: '#F2F2F8' },
                dark: { name: 'Dark', value: '#200F2E' },
                light: { name: 'Light', value: '#fff' },
            },
        },
        options: {
            storySort: (a, b) => {
                // Storybook story IDs look like "folder/subfolder/file--storyName"
                // We only care about the first 3 folder levels (before --storyName)
                const aKey = a.id.split('--')[0].split('/').slice(0, 3).join('/');
                const bKey = b.id.split('--')[0].split('/').slice(0, 3).join('/');

                // Sort alphabetically by those first 3 folder levels
                // If they’re equal, return 0 to leave story order unchanged
                return aKey.localeCompare(bKey, undefined, { numeric: true }) || 0;
            },
        },
    },
    decorators: [
        (story) => {
            window.bypassCookiesRequired = true;
            window.bypassCookiesLoaded = true;

            return {
              components: { story },
              template: `
                <story/>
            `,
            };
        },
    ],
    tags: ["autodocs"],
};

export default preview;
