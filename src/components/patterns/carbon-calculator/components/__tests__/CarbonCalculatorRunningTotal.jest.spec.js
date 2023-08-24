import { config, shallowMount } from '@vue/test-utils';

import VsCarbonCalculatorRunningTotal from '../CarbonCalculatorRunningTotal.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsCarbonCalculatorRunningTotal, {
    propsData: {
        ...propsData,
        totalKilos: 13,
    },
});

describe('VsCarbonCalculatorRunningTotal', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const RunningTotal = wrapper.find('[data-test=vs-carbon-calculator-running-total]');

        expect(RunningTotal.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should properly display the totalKilos prop', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain('13');
        });
    });
});
