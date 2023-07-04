import { config, shallowMount } from '@vue/test-utils';
import VsCannedSearch from '../CannedSearch.vue';

config.global.renderStubDefaultSlot = true;

const apiUrl = 'http://172.28.81.65:8089/data/search/productsearch?areaproxdist=10&loc=Scotland&locplace=&locprox=1&prodtypes=acco&locale=';
const slotContent = 'These are some buttons';
const creditSlotContent = 'This is some credit info';

const factoryShallowMount = () => shallowMount(VsCannedSearch, {
    propsData: {
        linkUrl: apiUrl,
    },
    slots: {
        'vs-canned-search-buttons': slotContent,
        'vs-canned-search-credit': creditSlotContent,
    },
});

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
});
