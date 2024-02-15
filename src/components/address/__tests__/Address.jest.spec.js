import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsAddress from '../Address.vue';

const defaultSlot = 'Default Slot';

const factoryShallowMount = () => shallowMount(VsAddress, {
    slots: {
        default: defaultSlot,
    },
});

describe('VsAddress', () => {
    it('should render address', () => {
        const wrapper = factoryShallowMount();
        const Address = wrapper.find('div[data-test=vs-address]');

        expect(Address.exists()).toBe(true);
    });

    describe('slots:', () => {
        it('should render content inserted into `default` slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.text()).toContain(defaultSlot);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
