/* eslint-disable no-param-reassign */

import {
    Vue,
    initApp as initAppMain,
    initSSRApp as initSSRAppMain,
} from '@/main';

export { Vue };

export const initApp = (options) => initAppMain(options);

export const initSSRApp = (options) => {
    const template = document.querySelector('#app-template').innerHTML;
    options.template = template;

    return initSSRAppMain(options);
};
