import { setup } from '@storybook/vue3';

import '@/assets/fonts/fonts.scss';

import { createPinia } from 'pinia';
import mitt from 'mitt';

setup((app) => {
  const emitter = mitt();
  app.config.globalProperties.emitter = emitter;
  app.use(createPinia());
});

const preview = {
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="margin: 3em;"><story /></div>',
    }),
  ],
};

export default preview;