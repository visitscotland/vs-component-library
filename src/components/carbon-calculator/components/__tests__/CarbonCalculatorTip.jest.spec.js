import { config, shallowMount } from '@vue/test-utils';

import VsCarbonCalculatorTip from '../CarbonCalculatorTip.vue';

jest.mock('@/utils/svg-context');

config.global.renderStubDefaultSlot = true;

const tipContent = 'This is a tip';

const topTip = 'Top Tip!';
const allTips = 'Click here to view all of our tips!';

const factoryShallowMount = (propsData) => shallowMount(VsCarbonCalculatorTip, {
    propsData: {
        tip: tipContent,
        allTips: false,
        ...propsData,
    },
    global: {
        provide: {
            labelsMap: {
                topTip,
                allTips,
            },
        },
    },
});

describe('VsCarbonCalculatorTip', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const Tip = wrapper.find('[data-test=vs-carbon-calculator-tip]');

        expect(Tip.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should correctly render the labelsMap `topTip`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(topTip);
        });

        it('renders the main `tip` prop if `showingAllTips` is false', () => {
            const wrapper = factoryShallowMount();

            const allTipsContainer = wrapper.find('[data-test=vs-carbon-calculator-tip__summary]');

            expect(allTipsContainer.exists()).toBe(false);
            expect(wrapper.text()).toContain(tipContent);
        });

        it('does not render the main `tip` prop if `showingAllTips` is true', () => {
            const wrapper = factoryShallowMount({
                showingAllTips: true,
            });

            const allTipsContainer = wrapper.find('[data-test=vs-carbon-calculator-tip__summary]');

            expect(allTipsContainer.exists()).toBe(true);
            expect(wrapper.text()).not.toContain(tipContent);
        });

        it('should correctly render the labelsMap `allTips` if `showingAllTips` is true', () => {
            const wrapper = factoryShallowMount({
                showingAllTips: true,
            });

            expect(wrapper.text()).toContain(allTips);
        });
    });
});
