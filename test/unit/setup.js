import { config } from '@vue/test-utils';
import mitt from 'mitt';

const testEmitter = mitt();

config.global.mocks = {
    emitter: testEmitter,
};

window.URL.createObjectURL = function() {};

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
