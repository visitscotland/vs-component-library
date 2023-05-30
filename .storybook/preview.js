import { setup } from '@storybook/vue3';

import '@/assets/fonts/fonts.scss';
import '@/styles/core.styles.scss';

import { createPinia } from 'pinia';
import mitt from 'mitt';

setup(app => {
    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;
    app.use(createPinia());
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
                { name: 'Dark', value: '#191919' },
            ],
        },
    },
    decorators: [
        story => ({
            components: { story },
            template: '<div style="margin: 3em;"><story /></div>',
        }),
    ],
};

export default preview;
