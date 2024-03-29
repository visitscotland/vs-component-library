import { shallowMount } from '@vue/test-utils';
import VsMapWithSidebarListItem from '../MapWithSidebarListItem.vue';

const itemDataObj = {
    properties: {
        category: {
            id: 'cities',
            label: 'Cities',
        },
        title: 'Glasgow',
        id: 'glasgow',
        image: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm',
    },
};

const factoryShallowMount = () => shallowMount(VsMapWithSidebarListItem, {
    slots: {
        default: 'Button text',
    },
    propsData: {
        itemData: itemDataObj,
    },
    computed: {
        isActive() {
            return true;
        },
        highlightedPlace() {
            return 'highlighted-id';
        },
    },
    global: {
        provide: {
            mapId: 'vs-map',
        },
    },
});

describe('VsMapWithSidebarListItem', () => {
    it('should render a component with the data-test attribute `vs-map-with-sidebar-list-item`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-map-with-sidebar-list-item');
    });

    describe(':props', () => {
        it('should render the button text from the `itemData` prop', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.vm.$nextTick();
            expect(wrapper.text()).toBe('Glasgow');
        });
    });

    describe(':methods', () => {
        it('should emit `show-item-detail` with a value of the `itemData` prop id when the button is clicked', async() => {
            const wrapper = factoryShallowMount();
            const mockMethod = jest.spyOn(wrapper.vm, 'showItemDetail');
            await wrapper.trigger('click');

            expect(mockMethod).toHaveBeenCalledWith(itemDataObj);
        });
    });
});
