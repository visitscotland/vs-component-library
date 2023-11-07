import { shallowMount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import mapboxgl from 'mapbox-gl';

import VsMap from '../Map.vue';
import placeData from '../../../../assets/fixtures/maps/places-data.json';

jest.mock('@/stores/map.store.ts');

mapboxgl.supported = jest.fn();

const factoryShallowMount = () => shallowMount(VsMap, {
    propsData: {
        mapId: 'vs-map',
        isVisible: true,
        places: [
        ],
        regions: [
        ],
    },
});

let wrapper;

const mockAddMethod = jest.fn();
const mockMarkerMethod = jest.fn();

beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = factoryShallowMount();

    wrapper.vm.initialiseMapComponent = jest.fn();
    wrapper.vm.initialiseMapFeatures = mockAddMethod;
    wrapper.vm.initialiseMapMarkers = mockMarkerMethod;
});

describe('VsMap', () => {
    it('should render a map component with the data-test attribute `vs-map`', () => {
        expect(wrapper.find('[data-test="vs-map"]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should use the `mapId` prop for an id attribute div element', () => {
            expect(wrapper.find('.vs-map__map').attributes('id')).toBe('vs-map');
        });
    });
    describe(':methods', () => {
        it('should add map features when places props change', async() => {
            wrapper.setProps({
                places: placeData.features,
            });
            await wrapper.vm.$nextTick();

            expect(mockAddMethod).toHaveBeenCalled();
        });

        it('should add map markers when places props change', async() => {
            wrapper.setProps({
                places: placeData.features,
            });
            await wrapper.vm.$nextTick();

            expect(mockMarkerMethod).toHaveBeenCalled();
        });
    });
});
