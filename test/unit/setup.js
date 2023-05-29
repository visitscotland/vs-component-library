import { setActivePinia, createPinia } from 'pinia';

global.beforeEach(() => {
    setActivePinia(createPinia());
});
