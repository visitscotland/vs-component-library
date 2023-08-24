import { config, shallowMount } from '@vue/test-utils';

import VsCarbonCalculatorResults from '../CarbonCalculatorResults.vue';

jest.mock('@/utils/svg-context');

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsCarbonCalculatorResults, {
    propsData: {
        ...propsData,
    },
});

describe('VsCarbonCalculatorResults', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const Results = wrapper.find('[data-test=vs-carbon-calculator-results]');

        expect(Results.exists()).toBe(true);
    });

    describe(':props', () => {
        it('calculates and displays foodPercentage properly based on input props', () => {
            const wrapper = factoryShallowMount({
                totalKilos: 10,
                foodKilos: 5,
                foodLabel: 'Food ',
            });

            expect(wrapper.text()).toContain('Food 50.0%');
        });
    });
});
