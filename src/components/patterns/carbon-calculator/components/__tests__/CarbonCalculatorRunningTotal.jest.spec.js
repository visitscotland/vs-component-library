import { config, shallowMount } from '@vue/test-utils';

import VsCarbonCalculatorRunningTotal from '../CarbonCalculatorRunningTotal.vue';

config.global.renderStubDefaultSlot = true;

const kgsOf = 'KGs of CO2';
const soFar = 'Your calculation so far:';

const factoryShallowMount = (propsData) => shallowMount(VsCarbonCalculatorRunningTotal, {
    propsData: {
        ...propsData,
        totalKilos: 13.5,
    },
    global: {
        provide: {
            labelsMap: {
                soFar,
                kgsOf,
            },
        },
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

            expect(wrapper.text()).toContain('13.5');
        });

        it('should render the total kilos value with a comma delimeter if the locale is set to de-de', () => {
            const wrapper = factoryShallowMount({
                language: 'de-de',
            });

            expect(wrapper.text()).toContain('13,5');
        });

        it('should correctly render the labelsMap `kgsOf`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(kgsOf);
        });

        it('should correctly render the labelsMap `soFar`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(soFar);
        });
    });
});
