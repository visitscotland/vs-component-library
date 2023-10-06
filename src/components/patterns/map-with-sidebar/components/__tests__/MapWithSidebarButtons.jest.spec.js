import { shallowMount, config } from '@vue/test-utils';
import VsMapWithSidebarButtons from '../MapWithSidebarButtons.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsMapWithSidebarButtons, {
    propsData: {
        contentData: {
            properties: {
                category: {
                    id: 'cities',
                    label: 'Cities',
                },
                title: 'Aberdeen',
                id: 'aberdeen',
                description: 'Aberdeen description',
                image: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm',
                link: {
                    label: 'Discover Aberdeen',
                    link: 'http://172.28.81.65:8089/info/see-do/national-museum-of-scotland-p246591',
                    type: 'INTERNAL',
                },
            },
        },
    },
    global: {
        provide: {
            filtersAppliedText: 'filters applied',
            clearFiltersText: 'Clear filters',
        },
    },
});

describe('VsMapWithSidebarButtons', () => {
    it('should render an element with the `vs-map-with-sidebar-buttons` data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-map-with-sidebar-buttons');
    });

    describe(':props', () => {
        it('should render the title from the `contentData` prop', () => {
            const wrapper = factoryShallowMount();

            const discoverBtn = wrapper.find('[data-test="vs-map-with-sidebar-buttons__discover"]');

            expect(discoverBtn.text()).toBe('Discover Aberdeen');
        });

        it('should render filter buttons is the `filterCount` is greater than 0', async() => {
            const wrapper = factoryShallowMount();

            wrapper.setProps({
                filterCount: 1,
            });

            await wrapper.vm.$nextTick();

            const clearFiltersBtn = wrapper.find('[data-test="vs-map-with-sidebar-buttons__clear-filters"]');

            expect(clearFiltersBtn.exists()).toBe(true);
        });
    });
});
