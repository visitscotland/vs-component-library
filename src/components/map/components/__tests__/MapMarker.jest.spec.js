import { shallowMount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import VsMapMarker from '../MapMarker.vue';

jest.mock('@/stores/map.store.ts');

const factoryShallowMount = () => shallowMount(VsMapMarker, {
    propsData: {
        mapId: 'vs-map',
        feature: {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [
                    -3.2852550000000003,
                    55.95357800000001,
                ],
            },
            properties: {
                title: 'Visit Edinburgh and discover the best things to see and do in Scotland\'s capital',
                type: 'featured',
                id: 'af10c61f-4f4d-412d-ab7a-267834ee4201',
            },
            id: 'af10c61f-4f4d-412d-ab7a-267834ee4201',
        },
    },
});

let wrapper;

beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = factoryShallowMount();
});

describe('VsMapMarker', () => {
    it('should render a marker component with the data-test attribute `vs-map-marker`', () => {
        expect(wrapper.find('[data-test="vs-map-marker"]').exists()).toBe(true);
    });
});
