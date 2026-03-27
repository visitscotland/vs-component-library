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

const factoryFloating = (propsData) => mount(
    VsTooltip,
    mountOptions({
        useLegacy: false,
        ...propsData,
    }),
);

const factoryShallowMount = (propsData) => shallowMount(
    VsTooltip,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsTooltip,
    mountOptions(propsData),
);

describe('VsTooltip (legacy)', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = factoryShallowMount();
    });

    it('should render a vs-tooltip element', () => {
        const tooltip = wrapper.find('[data-test=vs-tooltip]');
        expect(tooltip.exists()).toBe(true);
    });

    describe(':props', () => {
        it(':title - should accept and render a `data-original-title` property', () => {
            const tooltip = wrapper.find('[data-test=vs-tooltip]');
            expect(tooltip.attributes('data-original-title')).toBe('Bus');
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

describe('VsTooltip (floating-ui)', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = factoryFloating();
    });

    it('should render a trigger wrapper', () => {
        const trigger = wrapper.find('[data-test="vs-tooltip-trigger"]');
        expect(trigger.exists()).toBe(true);
    });

    it('should show tooltip on mouseenter', async() => {
        await wrapper.find('span').trigger('mouseenter');

        expect(wrapper.vm.visible).toBe(true);
    });

    it('should hide tooltip on mouseleave', async() => {
        await wrapper.find('span').trigger('mouseenter');
        await wrapper.find('span').trigger('mouseleave');

        expect(wrapper.vm.hideTimeout).not.toBeNull();
    });

    it('should render tooltip when visible', async() => {
        await wrapper.setData({
            visible: true,
        });

        const tooltip = wrapper.find('.vs-tooltip-popover');

        expect(tooltip.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render the title inside the tooltip', async() => {
            await wrapper.setData({
                visible: true,
            });

            expect(wrapper.text()).toContain('Bus');
        });

        it('should apply subtle class when subtle prop is true', async() => {
            const wrapperWithSubtle = factoryFloating({
                subtle: true,
            });

            await wrapperWithSubtle.setData({
                visible: true,
            });

            const tooltip = wrapperWithSubtle.find('.vs-tooltip-popover');

            expect(tooltip.classes()).toContain('vs-tooltip-popover--subtle');
        });
    });

    describe(':slots', () => {
        it('should render slot content inside the trigger', () => {
            expect(wrapper.text()).toContain(slotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
