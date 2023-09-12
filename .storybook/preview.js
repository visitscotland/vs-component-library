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
                { name: 'Grey', value: '#efefef' },
                { name: 'Dark', value: '#191919' },
                { name: 'Yellow', value: '#fcca1b' },
            ],
        },
    },
};

export default preview;
