const { renderToString } = require('@vue/server-renderer');

/** PLACEHOLDER: COMPONENT IMPORTS */

const { initSSRApp } = require('@/main');

const defaultVueOptions = {
    components: {
        /** PLACEHOLDER: COMPONENT REGISTRATION */
    },
};

export function createSSRApp (options) {
    const vueOptions = {
        ...options,
        ...defaultVueOptions,
    };

    return initSSRApp(vueOptions, true);
};

export { renderToString };
