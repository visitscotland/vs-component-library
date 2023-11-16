import { shallowMount } from '@vue/test-utils';
import VsMapWithSidebarToggle from '../MapWithSidebarToggle.vue';

const factoryShallowMount = () => shallowMount(VsMapWithSidebarToggle);

describe('VsMapWithSidebarToggle', () => {
    it('should render an element with the `vs-map-with-sidebar-toggle` data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-map-with-sidebar-toggle');
    });
});
