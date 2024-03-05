import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsTabs from '../Tabs.vue';

config.global.renderStubDefaultSlot = true;

const defaultSlot = 'Default Slot';

function mountOptions() {
    return {
        slots: {
            default: defaultSlot,
        },
    };
};

const factoryShallowMount = () => shallowMount(
    VsTabs,
    mountOptions(),
);

const factoryMount = () => mount(
    VsTabs,
    mountOptions(),
);

describe('VsTabs', () => {
    it('should render a tabs wrapper', () => {
        const wrapper = factoryShallowMount();
        const Tabs = wrapper.find('div[data-test=vs-tabs]');

        expect(Tabs.exists()).toBe(true);
    });

    describe('slots:', () => {
        it('should render content inserted into `default` slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(defaultSlot);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
