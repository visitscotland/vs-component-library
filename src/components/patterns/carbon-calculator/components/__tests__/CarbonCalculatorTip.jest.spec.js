import { config, shallowMount } from '@vue/test-utils';

import VsCarbonCalculatorTip from '../CarbonCalculatorTip.vue';

jest.mock('@/utils/svg-context');

config.global.renderStubDefaultSlot = true;

const tipContent = 'This is a tip';

const factoryShallowMount = (propsData) => shallowMount(VsCarbonCalculatorTip, {
    propsData: {
        tip: tipContent,
        allTips: false,
        ...propsData,
    },
});

describe('VsCarbonCalculatorTip', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const Tip = wrapper.find('[data-test=vs-carbon-calculator-tip]');

        expect(Tip.exists()).toBe(true);
    });

    describe(':props', () => {
        it('renders the main `tip` prop if `allTips` is false', () => {
            const wrapper = factoryShallowMount();

            const allTips = wrapper.find('[data-test=vs-carbon-calculator-tip__summary]');

            expect(allTips.exists()).toBe(false);
            expect(wrapper.text()).toContain(tipContent);
        });

        it('does not render the main `tip` prop if `allTips` is true', () => {
            const wrapper = factoryShallowMount({
                allTips: true,
            });

            const allTips = wrapper.find('[data-test=vs-carbon-calculator-tip__summary]');

            expect(allTips.exists()).toBe(true);
            expect(wrapper.text()).not.toContain(tipContent);
        });
    });
});
