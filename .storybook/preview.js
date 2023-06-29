import { setup } from '@storybook/vue3';

import '@/assets/fonts/fonts.scss';
import '@/styles/core.styles.scss';

import mitt from 'mitt';

setup(app => {
    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;
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
                { name: 'Yellow', value: '#fcca1b' },
            ],
        },
    },
    decorators: [
        story => ({
            components: { story },
            template: '<div class="m-4 m-md-9"><story /></div>',
        }),
    ],
};

export default preview;
