import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsGoogleMap from '../GoogleMap.vue';

jest.mock('@/utils/get-env-value');
jest.mock('@/utils/svg-context');
jest.mock('@/utils/is-apple-ios');

const props = {
    center: {
        lat: 57.7,
        lng: -4.7,
    },
    zoom: 6.25,
    mapId: 'b55b94a250e703072014702e',
    googleMapsOptions: {
        clickableIcons: true,
        isFractionalZoomEnabled: true,
        renderingTypeVector: true,
        gestureHandling: 'cooperative',
    },
    mapBounds: {
        north: 61.3,
        south: 54.6,
        west: -8.7,
        east: 2,
    },
    initialViewIsScotland: true,
    isViewToFitMarkers: false,
    isMarkerTooltipsEnabled: false,
    isPolygonTooltipsEnabled: true,
    languageCode: 'en',
    uiLabels: {
        fullScreen: 'Fullscreen toggle',
        zoomIn: 'Zoom in',
        zoomOut: 'Zoom out',
    },
    jsDisabled: false,
};

const factoryShallowMount = (propsData) => shallowMount(VsGoogleMap, {
    propsData: {
        ...props,
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsGoogleMap, {
    propsData: {
        ...props,
        ...propsData,
    },
});

describe('VsGoogleMap', () => {
    it('should render a gmp-map', () => {
        const wrapper = factoryShallowMount();
        const mapWrapper = wrapper.find('[data-test="vs-google-map"]');

        expect(mapWrapper.exists()).toBe(true);
        expect(mapWrapper.element.tagName).toBe('GMP-MAP');
    });

    describe(':custom-controls', () => {
        it('should render three VsButtons for zoom in & out, plus fullscreen', () => {
            const wrapper = factoryMount();
            const cusomControlWrapper = wrapper.find('[data-test="vs-google-map__custom-control-container"]');

            expect(cusomControlWrapper.exists()).toBe(true);
            expect(cusomControlWrapper.element.tagName).toBe('DIV');

            const customZoonInButton = wrapper.find('[data-test="vs-google-map__custom-control--zoom-in"]');
            expect(customZoonInButton.exists()).toBe(true);
            expect(customZoonInButton.classes()).toContain('vs-button');
            expect(customZoonInButton.element.tagName).toBe('BUTTON');

            const customZoomOutButton = wrapper.find('[data-test="vs-google-map__custom-control--zoom-out"]');
            expect(customZoomOutButton.exists()).toBe(true);
            expect(customZoomOutButton.classes()).toContain('vs-button');
            expect(customZoomOutButton.element.tagName).toBe('BUTTON');

            const customFullScreenButton = wrapper.find('[data-test="vs-google-map__custom-control--fullscreen"]');
            expect(customFullScreenButton.exists()).toBe(true);
            expect(customFullScreenButton.classes()).toContain('vs-button');
            expect(customFullScreenButton.element.tagName).toBe('BUTTON');
        });

        it('should render the labels for the custom controls', () => {
            const wrapper = factoryMount();

            const customZoonInButton = wrapper.find('[data-test="vs-google-map__custom-control--zoom-in"]');
            expect(customZoonInButton.text()).toBe('Zoom in');

            const customZoomOutButton = wrapper.find('[data-test="vs-google-map__custom-control--zoom-out"]');
            expect(customZoomOutButton.text()).toBe('Zoom out');

            const customFullScreenButton = wrapper.find('[data-test="vs-google-map__custom-control--fullscreen"]');
            expect(customFullScreenButton.text()).toBe('Fullscreen toggle');
        });

        it('should allow the labels to be changed on the buttons', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                uiLabels: {
                    fullScreen: 'Volledig scherm inschakelen/uitschakelen',
                    zoomIn: 'Inzoomen',
                    zoomOut: 'Uitzoomen',
                },
            });

            const customZoonInButton = wrapper.find('[data-test="vs-google-map__custom-control--zoom-in"]');
            expect(customZoonInButton.text()).toBe('Inzoomen');

            const customZoomOutButton = wrapper.find('[data-test="vs-google-map__custom-control--zoom-out"]');
            expect(customZoomOutButton.text()).toBe('Uitzoomen');

            const customFullScreenButton = wrapper.find('[data-test="vs-google-map__custom-control--fullscreen"]');
            expect(customFullScreenButton.text()).toBe('Volledig scherm inschakelen/uitschakelen');
        });
    });

    describe.only(':slots', () => {
        it('should render in the #vs-google-map-marker slot when populated', () => {
            const slotMount = () => mount(VsGoogleMap, {
                propsData: {
                    ...props,
                },
                slots: {
                    'vs-google-map-marker': '<gmp-advanced-marker data-test="marker" position="{0,0}"></gmp-advanced-marker>',
                },
            });

            const wrapper = slotMount();

            expect(wrapper.find('[data-test="marker"]').exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
