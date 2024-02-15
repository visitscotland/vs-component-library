import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsItinerary from '../Itinerary.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsItinerary, {
    propsData: {
        listViewText: 'list',
        mapViewText: 'map',
    },
});

describe('VsItinerary', () => {
    it('should render a component with the data-test attribute `vs-itinerary`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-itinerary');
    });

    describe(':props', () => {
        it('should show the `mapViewText` prop by default in its button', () => {
            const wrapper = factoryShallowMount();
            const toggleBtn = wrapper.find('[data-test="vs-itinerary-btn"]');
            expect(toggleBtn.text()).toBe('map');
        });

        it('should show the `listiewText` prop by when the map is shown', async() => {
            const wrapper = factoryShallowMount();
            const toggleBtn = wrapper.find('[data-test="vs-itinerary-btn"]');

            await wrapper.setData({
                showMap: true,
            });
            expect(toggleBtn.text()).toBe('list');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
