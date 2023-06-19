const { renderToString } = require('@vue/server-renderer');

/** PLACEHOLDER: COMPONENT IMPORTS */

const { initSSRApp, initApp } = require('@/main');

const { BTab } = require('bootstrap-vue-next');


const defaultVueOptions = {
    components: {
        BTab,
        /** PLACEHOLDER: COMPONENT REGISTRATION */
    },
};

export function createApp (options) {
    const vueOptions = {
        ...options,
        ...defaultVueOptions,
    };

    return initApp(vueOptions, true);
};

export function createSSRApp (options) {
    const vueOptions = {
        ...options,
        ...defaultVueOptions,
    };

    return initSSRApp(vueOptions, true);
};

export { renderToString };
