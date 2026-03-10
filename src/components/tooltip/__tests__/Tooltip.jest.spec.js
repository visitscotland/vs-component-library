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
    it('should render a vs-tooltip element', () => {
        const tooltip = wrapper.find('[data-test=vs-tooltip]');
        expect(tooltip.exists()).toBe(true);
    });

    describe(':props', () => {
        it(':title - should accept and render a `data-original-title` property', () => {
            expect(wrapper.attributes('data-original-title')).toBe('Bus');
        });

        it(':position - should accept and pass position to tooltip config', () => {
            const wrapperWithPosition = factoryShallowMount({
                position: 'bottom',
            });

            expect(wrapperWithPosition.vm.tooltipConfig.placement).toBe('bottom');
        });

        it(':position - should default to "top"', () => {
            expect(wrapper.vm.tooltipConfig.placement).toBe('top');
        });

        it(':subtle - should add "vs-tooltip--subtle" class when true', () => {
            const wrapperWithSubtle = factoryMount({
                subtle: true,
            });

            expect(wrapperWithSubtle.vm.tooltipConfig.customClass).toContain('vs-tooltip--subtle');
        });

        it(':subtle - should not add "vs-tooltip--subtle" class when false', () => {
            const wrapperWithoutSubtle = factoryMount({
                subtle: false,
            });

            expect(wrapperWithoutSubtle.vm.tooltipConfig.customClass).not.toContain('vs-tooltip--subtle');
            expect(wrapperWithoutSubtle.vm.tooltipConfig.customClass).toContain('vs-tooltip');
        });

        it(':subtle - should default to false', () => {
            expect(wrapper.vm.tooltipConfig.customClass).not.toContain('vs-tooltip--subtle');
            expect(wrapper.vm.tooltipConfig.customClass).toContain('vs-tooltip');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
