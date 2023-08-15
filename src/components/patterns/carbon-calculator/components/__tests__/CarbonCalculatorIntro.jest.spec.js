import { config, shallowMount } from '@vue/test-utils';

import VsCarbonCalculatorIntro from '../CarbonCalculatorIntro.vue';

config.global.renderStubDefaultSlot = true;

const defaultSlot = 'Carbon intro page';

const factoryShallowMount = (propsData) => shallowMount(VsCarbonCalculatorIntro, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: defaultSlot,
    },
});

describe('VsCarbonCalculatorIntro', () => {
    it('should render a div with the correct test attribute', () => {
        const wrapper = factoryShallowMount();

        const Intro = wrapper.find('div[data-test=vs-carbon-calculator-intro]');

        expect(Intro.exists()).toBe(true);
    });

    describe(':slots', () => {
        it('renders content in the `default` slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(defaultSlot);
        });
    });
});
