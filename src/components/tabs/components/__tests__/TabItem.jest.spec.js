import { shallowMount } from '@vue/test-utils';

import VsTabItem from '../TabItem.vue';

const factoryShallowMount = (propsData) => shallowMount(VsTabItem, {
    global: {
        provide: {
            noContainer: false,
        },
    },
    propsData: {
        ...propsData,
        title: 'First tab',
    },
});

describe('VsTabItem', () => {
    it('should render a TabItem', () => {
        const wrapper = factoryShallowMount();
        const tabItem = wrapper.find('[data-test=vs-tab__item]');

        expect(tabItem.exists()).toBe(true);
    });
});
