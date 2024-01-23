import {
    config, mount, shallowMount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsCannedSearch from '../CannedSearch.vue';

config.global.renderStubDefaultSlot = true;

const apiUrl = 'https://www.visitscotland.com/data/search/productsearch?areaproxdist=10&loc=Scotland&locplace=&locprox=1&prodtypes=acco&locale=';
const slotContent = 'These are some buttons';
const creditSlotContent = 'This is some credit info';

const mountOptions = {
    propsData: {
        linkUrl: apiUrl,
    },
    slots: {
        'vs-canned-search-buttons': slotContent,
        'vs-canned-search-credit': creditSlotContent,
    },
};

const factoryShallowMount = () => shallowMount(
    VsCannedSearch,
    mountOptions,
);
const factoryMount = () => mount(
    VsCannedSearch,
    mountOptions,
);

describe('VsCannedSearch', () => {
    it('should render a component with the data-test attribute `vs-canned-search`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('[data-test="vs-canned-search"]').exists()).toBe(true);
    });

    describe(':slots', () => {
        it('should render the content of the `vs-canned-search-buttons` slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.html()).toContain(slotContent);
        });

        it('should render the content of the `vs-canned-search-credit` slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.html()).toContain(creditSlotContent);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
