import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';

import VsGoogleMapMarker from '../components/GoogleMapMarker.vue';

jest.mock('@/utils/get-env-value');
jest.mock('@/utils/svg-context');
jest.mock('@/utils/is-apple-ios');

const props = {
    featureData: {
        type: 'feature',
        properties: {
            id: 'a74c09b1-f2b6-48b6-9ac7-0de4fc6636c4',
            title: 'Aberdeen',
            description: 'Get the lowdown on Aberdeen, Scotland\'s city in the north east.',
            category: {
                id: 'cities',
                label: 'Cities',
            },
            image: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2024/04/26/marischal-college',
            link: {
                label: 'Discover Aberdeen',
                link: '/resourceapi/places-to-go/aberdeen',
                type: 'INTERNAL',
            },
            placeId: 'ChIJSXXXH0wFhEgRcsT0XNoFu-g',
        },
        geometry: {
            type: 'Point',
            coordinates: [-2.1929625, 57.14448125],
        },
    },
    markerTooltipsEnabled: false,
};

const factoryShallowMount = (propsData) => shallowMount(VsGoogleMapMarker, {
    propsData: {
        ...props,
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsGoogleMapMarker, {
    propsData: {
        ...props,
        ...propsData,
    },
});

describe('VsGoogleMap', () => {
    describe(':rendering', () => {
        it.only('should render a gmp-advanced-marker', () => {
            const wrapper = factoryShallowMount();
            const markerWrapper = wrapper.find('[data-test="vs-google-map-marker"]');

            expect(markerWrapper.exists()).toBe(true);
            expect(markerWrapper.element.tagName).toBe('GMP-ADVANCED-MARKER');
        });

        it('should render an svg for the map pin', () => {
            const wrapper = factoryShallowMount();

            const markerWrapper = wrapper.find('[data-test="vs-google-map-marker"]');
            expect(markerWrapper.exists()).toBe(true);

            const pinGraphic = markerWrapper.find('[data-test="vs-google-map-marker__pin-graphic"]');
            expect(pinGraphic.exists()).toBe(true);
            expect(pinGraphic.element.tagName).toBe('svg');
            expect(pinGraphic.find('path').exists()).toBe(true);
        });
    });

    describe(':props', () => {
        it('should render with the default color if the pinColor prop isn\'t passed', () => {
            const wrapper = factoryMount();
            const markerWrapper = wrapper.find('[data-test="vs-google-map-marker"]');
            const pinGraphic = markerWrapper.find('[data-test="vs-google-map-marker__pin-graphic"]');
            const pinGraphicPath = pinGraphic.find('path');

            expect(pinGraphicPath.attributes('fill')).toBe('#33225D');
        });

        it('should render the non default color if the pinColor prop is passed', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                pinColor: '#A8308C',
            });

            const markerWrapper = wrapper.find('[data-test="vs-google-map-marker"]');
            const pinGraphic = markerWrapper.find('[data-test="vs-google-map-marker__pin-graphic"]');
            const pinGraphicPath = pinGraphic.find('path');

            expect(pinGraphicPath.attributes('fill')).toBe('#A8308C');
        });

        it('should not render the tooltip trigger when tooltip prop set to false', async() => {
            const wrapper = factoryMount();
            const markerWrapper = wrapper.find('[data-test="vs-google-map-marker"]');
            const tooltipTrigger = markerWrapper.find('[data-test="vs-tooltip-trigger"]');
            expect(tooltipTrigger.exists()).toBe(false);
        });

        it('should render the tooltip trigger when tooltip prop set to true', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                markerTooltipsEnabled: true,
            });

            const markerWrapper = wrapper.find('[data-test="vs-google-map-marker"]');
            const tooltipTrigger = markerWrapper.find('[data-test="vs-tooltip-trigger"]');
            expect(tooltipTrigger.exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('should render content in the #vs-google-map-marker-content slot when populated', () => {
            const slotMount = (propsData) => mount(VsGoogleMapMarker, {
                propsData: {
                    ...props,
                    ...propsData,
                },
                slots: {
                    'vs-google-map-marker-content': '<span class="pin-content">1</span>',
                },
            });

            const wrapper = slotMount();

            const slotContainer = wrapper.find('[data-test="vs-google-map-marker__content"]');
            expect(slotContainer.exists()).toBe(true);

            expect(slotContainer.find('.pin-content').exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
