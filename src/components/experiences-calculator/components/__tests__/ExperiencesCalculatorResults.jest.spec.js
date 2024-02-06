import { config, shallowMount } from '@vue/test-utils';

import VsExperiencesCalculatorResults from '../ExperiencesCalculatorResults.vue';

jest.mock('@/utils/svg-context');

config.global.renderStubDefaultSlot = true;

const results = 'Results';

const factoryShallowMount = (propsData) => shallowMount(VsExperiencesCalculatorResults, {
    propsData: {
        ...propsData,
    },
    global: {
        provide: {
            labelsMap: {
                results,
            },
        },
    },
});

describe('VsExperiencesCalculatorResults', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const Results = wrapper.find('[data-test=vs-experiences-calculator-results]');

        expect(Results.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should correctly render the labelsMap `results`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(results);
        });
    });
});
