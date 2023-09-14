import { config, shallowMount } from '@vue/test-utils';

import VsCarbonCalculatorResults from '../CarbonCalculatorResults.vue';

jest.mock('@/utils/svg-context');

config.global.renderStubDefaultSlot = true;

const results = 'Results';
const kgsOf = 'KGs of CO2';
const comparison = 'That\'s the equivalent of xxx';
const kgsPerDay = 'KGs of CO2 per day';
const perDaySuccess = 'Congratulations!';
const perDayTarget = 5;

const factoryShallowMount = (propsData) => shallowMount(VsCarbonCalculatorResults, {
    propsData: {
        ...propsData,
    },
    global: {
        provide: {
            labelsMap: {
                results,
                kgsOf,
                kgsPerDay,
                comparison,
                perDaySuccess,
                perDayTarget,
            },
        },
    },
});

describe('VsCarbonCalculatorResults', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const Results = wrapper.find('[data-test=vs-carbon-calculator-results]');

        expect(Results.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should correctly render the labelsMap `results`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(results);
        });

        it('should correctly render the labelsMap `kgsOf`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(kgsOf);
        });

        it('should correctly render the labelsMap `kgsPerDay`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(kgsPerDay);
        });

        it('should not render the labelsMap `perDaySuccess` if perDay emissions are above the `perDayTarget` value', () => {
            const wrapper = factoryShallowMount({
                totalKilos: 20,
                stayDuration: 2,
            });

            expect(wrapper.text()).not.toContain(perDaySuccess);
        });

        it('should render the labelsMap `perDaySuccess` if perDay emissions are below or equal to the `perDayTarget` value', () => {
            const wrapper = factoryShallowMount({
                totalKilos: 20,
                stayDuration: 4,
            });

            expect(wrapper.text()).toContain(perDaySuccess);
        });
    });
});
