import { createApp, createSSRApp } from 'vue';
import pinia from '@/stores';
import mitt from 'mitt';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const { Vue } = require('vue');
const { isObject, each } = require('lodash');

const noJsClass = 'no-js';

const { BTab } = require('bootstrap-vue-next');

require('@/styles/core.styles.scss');
require('@/assets/fonts/fonts.scss');

const removeNoJSClass = () => {
    // remove no-js class
    const elements = document.getElementsByClassName(noJsClass);

    each(elements, (element) => {
        element.classList.remove(noJsClass);
    });
};

export const initApp = (options, skipRemoveNoJsClass) => {
    const app = createApp({
        components: {
            BTab,
        },
        ...isObject(options) ? options : {
        },
    });

    app.use(pinia());

    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;
    app.config.compilerOptions.comments = true;

    if (!skipRemoveNoJsClass) {
        removeNoJSClass();
    }

    return app;
};

export const initSSRApp = (options, skipRemoveNoJsClass) => {
    const app = createSSRApp({
        components: {
            BTab,
        },
        ...isObject(options) ? options : {
        },
    });

    app.use(pinia());

    const emitter = mitt();
    app.config.globalProperties.emitter = emitter;
    app.config.compilerOptions.comments = true;

    if (!skipRemoveNoJsClass) {
        removeNoJSClass();
    }

    return app;
};

export { Vue };
