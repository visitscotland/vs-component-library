import { config, shallowMount } from '@vue/test-utils';

import VsFooterUtilityList from '../FooterUtilityList.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = 'Some slot content';

const factoryShallowMount = (propsData) => shallowMount(VsFooterUtilityList, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: slotContent,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsFooterUtilityList', () => {
    it('should render a component with the data-test attribute `vs-footer-utility-list`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-footer-utility-list');
    });

    describe(':slots', () => {
        it('renders content inserted into the `default` slot', () => {
            expect(wrapper.text()).toContain(slotContent);
        });
    });
});
