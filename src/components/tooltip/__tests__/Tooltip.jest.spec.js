import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsTooltip from '../Tooltip.vue';

const slotText = 'Tooltip content';

function mountOptions(propsData) {
    return {
        slots: {
            default: slotText,
        },
        propsData: {
            title: 'Bus',
            ...propsData,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsTooltip,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsTooltip,
    mountOptions(propsData),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsTooltip', () => {
    it('should render a vs-button-stub element', () => {
        const tooltip = wrapper.find('vs-button-stub');

        expect(tooltip.exists()).toBe(true);
    });

    describe(':props', () => {
        it(':title - should accept and render a `data-original-title` property', () => {
            expect(wrapper.attributes('data-original-title')).toBe('Bus');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
