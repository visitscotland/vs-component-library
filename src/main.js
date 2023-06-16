import { createApp, createSSRApp } from 'vue';
import mitt from 'mitt';

const { Vue } = require('vue');
const { isObject, each } = require('lodash');
const { noJsClass } = require('@/utils/no-js-class');

const { BTab } = require('bootstrap-vue-next');

require('@/styles/core.styles.scss');
require('@/assets/fonts/fonts.scss');

const defaultVueOptions = {
    comments: true,
    components: {
        BTab,
    },
};

const removeNoJSClass = () => {
    // remove no-js class
    const elements = document.getElementsByClassName(noJsClass);

    each(elements, (element) => {
        element.classList.remove(noJsClass);
    });
};

export const initApp = (options, skipRemoveNoJsClass) => {
    const app = createApp({
        ...defaultVueOptions,
        ...isObject(options) ? options : {
        },
    });

    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;

    if (!skipRemoveNoJsClass) {
        removeNoJSClass();
    }

    return app;
};

export const initSSRApp = (options, skipRemoveNoJsClass) => {
    const app = createSSRApp({
        ...defaultVueOptions,
        ...isObject(options) ? options : {
        },
    });

    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;

    if (!skipRemoveNoJsClass) {
        removeNoJSClass();
    }

    return app;
};

export { Vue };
