import { config } from '@vue/test-utils';
import mitt from 'mitt';
import { createTestingPinia } from '@pinia/testing';
import { toHaveNoViolations } from 'jest-axe';

// used for Axe accessibility testing
expect.extend(toHaveNoViolations);

// used for testing events
const testEmitter = mitt();

config.global.mocks = {
    emitter: testEmitter,
};

config.global.plugins = [
    createTestingPinia(),
];

window.URL.createObjectURL = function() {};

// test mocks
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn(),
        resize: jest.fn(),
        scrollZoom: {
            disable: jest.fn(),
        },
    })),
    FullscreenControl: jest.fn(),
    NavigationControl: jest.fn(),
}));

jest.mock('vue-youtube-vue-3', () => ({
    VueYoutube: jest.fn(() => ({
    })),
}));
