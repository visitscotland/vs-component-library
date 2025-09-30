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
            storySort: {
                order: [
                    'Components',  
                        ['Actions & controls', 'Feedback & status', 'Layout & content structure', 'Media & data visualisation', 'Navigation', 'Overlays & popups', 'Text & typography', 'To be reviewed', 'Deprecated'], 
                    'Patterns', 
                    'Pages'],
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
