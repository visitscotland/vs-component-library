import { config } from '@vue/test-utils';
import mitt from 'mitt';

const testEmitter = mitt();

config.global.mocks = {
    emitter: testEmitter,
};

window.URL.createObjectURL = function() {};
