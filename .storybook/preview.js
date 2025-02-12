import { setup } from '@storybook/vue3';

import '@/assets/fonts/fonts.scss';
import '@/styles/core.styles.scss';
import pinia from '@/stores/index.ts';
import mitt from 'mitt';

setup(app => {
    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;
    app.use(pinia());
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
            default: 'Light',
            values: [
                { name: 'Light', value: '#fff' },
                { name: 'Grey', value: '#F2F2F8' },
                { name: 'Dark', value: '#200F2E' },
            ],
        },
        viewport: {
            defaultViewport: 'reset',
        },
    },
    decorators: [
        (story) => {
            window.bypassCookieChecks = true;

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
