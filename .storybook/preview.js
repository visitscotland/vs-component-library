import { setup } from '@storybook/vue3';

import { createPinia } from 'pinia';

setup((app) => {
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